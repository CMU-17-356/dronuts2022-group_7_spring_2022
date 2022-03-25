import React, { useState, useEffect } from 'react';
import {Grid, Card, Button, Text, Spacer} from '@geist-ui/core'
// import { donutData } from '../data/dummydata';
import axios from 'axios';

interface OrderProps {
  currentOrderID: String;
}


function Cart(props:OrderProps) {
  const [cartData, setCartData] = useState<Array<any>>([]);
  const [orderData, setOrderData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState<number>(0);
  const [donutDict, setDonutMap] = useState<[]>([]);


  const fetchCartData = async () => {
    console.log("currentorderDI:", props.currentOrderID);
    await axios.get("https://dronutsgroup7backend.uk.r.appspot.com/orders/by_id/" + props.currentOrderID).then(response => {
      setCartData(response.data.donuts);
      setOrderData(response.data);
      fetchAllDonuts();
      console.log(response.data);
    });
    
    setLoading(false);
  };

  const fetchAllDonuts = async () => {
    const response = await fetch('https://dronutsgroup7backend.uk.r.appspot.com/donuts').then(response => response.json())
    .then(result => {
      let dictionary = Object.assign({}, ...result.map((v: any) => ({[v._id]: v})));
      setDonutMap(dictionary);
    }
    );
    return response;
  }

  const updateTotalCost = () => {
    var newTotal = 0;
    cartData.forEach(donut => {
      console.log("for each loop line 42");
      if (null != donutDict[donut.donut_id] && null != donutDict[donut.donut_id]['price']) {
        newTotal = newTotal + donut.quantity*donutDict[donut.donut_id]['price'];
      }
    });
    if (total !== newTotal) {
      setTotal(newTotal);
    }
  }
    
  useEffect(() => { 
    fetchCartData();
    }, []);
    

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const removeDonut = (donut_id: string) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"donut_id":donut_id});

    fetch("/orders/remove_item/" + orderData._id, {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    setLoading(false);
  }
  
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="300px" width="100%">
      {/* {updateTotalCost()} */}
      {cartData.map((data, key) => {
          console.log("");
          return (
            <div key={key}>
                <Grid md={24}>
                <Card shadow width="800px" >
                  {/* <img src={require(`${data.image}`)} alt="Donut Pic" /> */}
                  <Text p b>
                    {donutDict[data.donut_id]?donutDict[data.donut_id]['name']:''}
                  </Text>
                  <Text p>
                    Price: ${donutDict[data.donut_id]?donutDict[data.donut_id]['price']:''}
                  </Text>
                  <Text p>
                    Quantity: {data.quantity}
                  </Text>
                  <Button auto type="error" onClick={() => removeDonut(data.donut_id)}>Remove</Button>
                </Card>
                <Spacer h={2}/>
                </Grid>
                <Spacer h={2}/>
            </div>
          );
        })}
        <Grid xs={12} justify="center"></Grid>
        <Card>
          <Text h4 my={0}>Total: ${total}</Text>
          <Card.Footer>
            <Button auto type="success">Place Order</Button>
          </Card.Footer>
        </Card>
    </Grid.Container>
    </div>   
  );
}

export default Cart;