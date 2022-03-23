import React, {useState, useEffect} from 'react';
import {Text, Card, Divider, Grid, Button} from '@geist-ui/core';
import { FormControl } from 'react-bootstrap';
import Select from 'react-select'

function SubmitModifiedOrder() {
    return true;
}

function ModifyEmployeeOrderCard() {
  const [donutDict, setDonutMap] = useState<[]>([]);
  const [curr_order, setCurrOrder] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [donutOptions, setDonutOptions] = useState<any>([]);
  const [selectedDonut, setSelectedDonut] = useState<any>({});

  var orderID: string = '';

  const fetchAllDonuts = async () => {
    const response = await fetch('/donuts').then(response => response.json())
    .then(result => {
      let dictionary = Object.assign({}, ...result.map((v: any) => ({[v._id]: v.name})));
      populateDropdown(dictionary);
      setDonutMap(dictionary);
    }
    );
    

    return response;
  }

  const determineOrderID = () => {
    var baseUrl = (window.location)
    orderID = String(baseUrl.href.split('/').pop());
  }

  const fetchOrderByID = async (oID: string) => {
    await fetch(`/orders/by_id/${oID}`)
      .then(response => response.json())
      .then(result => setCurrOrder(result))
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

  const addDonutToCart = () => {
   
    
  }
  
  const updateQuantity = (value: string) => {
    const num = parseInt(value)
    if (isNaN(num) || num < 0) {
        console.log("new quantity: ", 0);
    }
    else {
        console.log("new quantity: ", num);
    }
  }
  
  useEffect(() => { 
    determineOrderID();
    fetchAllDonuts();
    if (orderID !== '') fetchOrderByID(orderID);
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

  return (
    <div className="orders-page">
        <Card shadow width="100%">
        <Text h4>Modify Pending Order #{curr_order._id}</Text>
        <Divider />
            <Card shadow>
              <form action="/orders/by_id/{oID}" method="put" onSubmit={handleSubmit}>
                <Text h5 className="order-card-title">Placed at: {curr_order.time_placed}.</Text>
                <Text h6 className="order-card-drone mb-2 text-muted">Drone #{curr_order.drone_id}</Text>
                <Text h6 className="order-card-drone mb-2 text-muted">Cost: ${curr_order.cost}</Text>
                <Divider />
                <ul>
                {curr_order.donuts.map((donut: any, donutKey: any) => {
                    return(<li key={donutKey}>
                        <Grid.Container gap={1} justify="center" height="300px" width="100%">
                          <Grid><Text>{donutDict[donut.donut_id]}</Text></Grid>
                          <Grid><Button auto type="secondary" onClick={() => updateQuantity((donut.quantity-1).toString())}>-</Button></Grid>
                          <Grid><FormControl width="50px" value={donut.quantity} onChange={(event) => updateQuantity(event.target.value)}/></Grid>
                          <Grid><Button auto type="secondary"onClick={() => updateQuantity((donut.quantity+1).toString())}>+</Button></Grid>
                          <Button auto type="error" onClick={() => removeDonut(donut.donut_id)}>Remove</Button>
                        </Grid.Container>
                        </li>);
                })}

                </ul>
                <Select id={"selectedDonut"} options={donutOptions} onChange={(option) => changeSelectedDonut(option)}></Select>
                <Button auto type="success" onClick={() => addDonutToCart()}>Add to Order</Button>
                <input type="submit" value="Submit"></input>
              </form>
            </Card>
        </Card>
    </div>
  );
}

export default ModifyEmployeeOrderCard;