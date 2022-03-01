import React, { useState, useEffect } from 'react';
import {Grid, Card, Button, Text, Spacer} from '@geist-ui/core'
// import { donutData } from '../data/dummydata';




function Cart() {
  const [orderData, setOrderData] = useState<Array<any>>([]);
  const [donutData, setDonutData] = useState<Array<any>>([]);


  const fetchOrderData = async () => {
    const response = await fetch('/orders').then(response => response.json())
   .then(result => {console.log('orders', result); setOrderData(result)});
    return response;
 };
  const fetchDonutData = async () => {
  //   const response = await fetch('/donuts').then(response => response.json())
  //  .then(result => {console.log('hello', result); setDonutData(result)});
  //   return response;
    console.log("penis");
    console.log(orderData[0]);
    setDonutData(orderData[0]);
  };

  const updateDatabaseQuantity = (order: string, value: string) => {
    const currentOrder = orderData[0];
    const currentOrderId = orderData[0]._id;
    const num = parseInt(value)
    //iterate quantity using post operation
    var raw = JSON.stringify({"donut_id":"621e88c90db3439bca66cbf2","quantity":num});
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:3001/orders/add_item/" + currentOrderId, {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
  }
  useEffect(() => { 
    fetchOrderData();
    fetchDonutData();
    }, []);
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="300px" width="100%">
        
      {/* onClick={() => updateDatabaseQuantity(1)} */}
      {donutData.map((data, key) => {
          return (
            <div key={key}>
                <Grid md={24}>
                <Card shadow width="800px" >
                  {/* <img src={require(`${data.image}`)} alt="Donut Pic" /> */}
                  <Text p b>
                    {data.name}
                  </Text>
                  <Text p>
                    Price: {data.price}
                  </Text>
                  <Text p>
                    Quantity: 1
                  </Text>
                  <Button auto type="error">Remove</Button>
                </Card>
                <Spacer h={2}/>
                </Grid>
                <Spacer h={2}/>
            </div>
          );
        })}
        <Grid xs={12} justify="center"></Grid>
        <Card>
          <Text h4 my={0}>Total: $10.35</Text>
          <Card.Footer>
            <Button auto type="success">Place Order</Button>
          </Card.Footer>
        </Card>
    </Grid.Container>
    </div>   
  );
}

export default Cart;