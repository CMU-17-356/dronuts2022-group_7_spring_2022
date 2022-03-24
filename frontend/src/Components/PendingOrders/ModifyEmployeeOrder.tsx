import React, {useState, useEffect} from 'react';
import {Text, Card, Divider, Grid, Button} from '@geist-ui/core';
import { FormControl, FormControlProps } from 'react-bootstrap';
import Select from 'react-select';

function ModifyEmployeeOrderCard() {
  const [donutDict, setDonutMap] = useState<[]>([]);
  const [curr_order, setCurrOrder] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [donutOptions, setDonutOptions] = useState<any>([]);
  const [selectedDonut, setSelectedDonut] = useState<any>({});

  var orderID: string = '';

  const DEFAULT_OBJ_ID = '623cce86518980626692660a';

  const fetchAllDonuts = async () => {
    const response = await fetch('https://dronutsgroup7backend.uk.r.appspot.com/donuts/').then(response => response.json())
    .then(result => {
      let dictionary = Object.assign({}, ...result.map((v: any) => ({[v._id]: v.name})));
      populateDropdown(dictionary);
      setDonutMap(dictionary);
    });
    

    return response;
  }

  const determineOrderID = () => {
    var baseUrl = (window.location)
    orderID = String(baseUrl.href.split('/').pop());
    console.log("ORDER ID is")
  }

  const fetchOrderByID = async () => {
    await fetch('https://dronutsgroup7backend.uk.r.appspot.com/orders/by_id/' + orderID)
      .then(response => response.json())
      .then(result => setCurrOrder(result))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    setLoading(false);
  }

  const populateDropdown = (dictionary: any) => {
    var dOptions: any[] = [];
    
    for (var [key, val] of Object.entries(dictionary)) {
      let valString = val as string;
      console.log(valString);
      dOptions.push({ label: valString, value: key });
    }
    setDonutOptions(dOptions);
    console.log("dOptions: " + dOptions);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(handleSubmit);
  }  

  const removeDonut  = (value: string) => {
  }

  const changeSelectedDonut = (selectedOption: any) => {
    setSelectedDonut(selectedOption);
  }

  const upsertOrder = async () => {

    var upsertHeader = new Headers();
    upsertHeader.append("Content-Type", "application/json");
    let raw = JSON.stringify(curr_order);

    await fetch('https://dronutsgroup7backend.uk.r.appspot.com/orders/'+curr_order._id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: raw
    });
    setLoading(true);
  }

  const addDonutToCart = async () => {
    //Check if curr_order has donut, if so add one more donut
    //If not, append new donut to curr_order list.
    var containsDonut = false;
    curr_order.donuts.map((donut: any, donutKey: any) => {
      if(!containsDonut && donutKey == selectedDonut) {
        updateQuantity(donut.quantity, 1);
        containsDonut = true;
      }
    });
    var new_id = DEFAULT_OBJ_ID;
    if (!containsDonut) curr_order.donuts.push({'donut_id': selectedDonut.value, 'quantity':1, '_id': new_id});
  }
  
  const updateQuantity = (donut: any, modifier: number) => {
    var num = donut.quantity + modifier;
    if (isNaN(num) || num < 0) {
        num = 0;
    }
    donut.quantity = num;
    console.log(JSON.stringify(curr_order));
  }
  
  
  useEffect(() => { 
    determineOrderID();
    fetchAllDonuts();
    if (orderID !== '') fetchOrderByID();
    }, [isLoading]);

    console.log(isLoading);
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

  return (
    <div className="orders-page">
        <Card shadow width="100%">
        <Text h4>Modify Pending Order #{curr_order._id}</Text>
        <Divider />
            <Card shadow>
                <Text h5 className="order-card-title">Placed at: {curr_order.time_placed}.</Text>
                <Text h6 className="order-card-drone mb-2 text-muted">Drone #{curr_order.drone_id}</Text>
                <Text h6 className="order-card-drone mb-2 text-muted">Cost: ${curr_order.cost}</Text>
                <Divider />
                <ul>
                {curr_order.donuts.map((donut: any, donutKey: any) => {
                    return(<li key={donutKey}>
                        <Grid.Container gap={1} justify="center" height="300px" width="100%">
                          <Grid><Text>{donutDict[donut.donut_id]}</Text></Grid>
                          <Grid><Button auto type="secondary" onClick={() => updateQuantity(donut, -1)}>-</Button></Grid>
                          <Grid><FormControl width="50px" value={donut.quantity} onChange={(event) => updateQuantity(donut, (event.target as any).value)}/></Grid>
                          <Grid><Button auto type="secondary"onClick={() => updateQuantity(donut, +1)}>+</Button></Grid>
                          <Button auto type="error" onClick={() => removeDonut(donut.donut_id)}>Remove</Button>
                        </Grid.Container>
                        </li>);
                })}

                </ul>
                <Select id={"selectedDonut"} options={donutOptions} onChange={(option: any) => changeSelectedDonut(option)}></Select>
                <Button auto type="success" onClick={() => addDonutToCart()}>Add to Order</Button>
                <Button type="success" onClick={() => upsertOrder()}>Submit Changes</Button>
            </Card>
        </Card>
    </div>
  );
}

export default ModifyEmployeeOrderCard;