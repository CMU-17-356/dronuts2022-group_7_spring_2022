import React, { useState, useEffect } from 'react';
import {Grid, Card, Button, Text, Spacer, Input} from '@geist-ui/core'
// import { donutData } from '../data/dummydata';
import { FormControl } from 'react-bootstrap';
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function Menu() {
  const [donutData, setDonutData] = useState<Array<any>>([]);
  const [orderData, setOrderData] = useState<Array<any>>([]);

   const fetchDonutData = async () => {
     const response = await fetch('/donuts').then(response => response.json())
    .then(result => {console.log('hello', result); setDonutData(result)});
     return response;
  };
  const fetchOrderData = async () => {
    const response = await fetch('/orders').then(response => response.json())
   .then(result => {console.log('orders', result); setOrderData(result)});
    return response;
 };
 
  useEffect(() => {
    fetchDonutData();
    fetchOrderData();
    }, []);
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="100px">
      {donutData.map((data, key) => {

        const updateQuantity = (value: string) => {
          const num = parseInt(value)
          if (isNaN(num) || num < 0) {
            setQuantity(0);
          }
          else {
            setQuantity(num);
          }
        }
        const updateDatabaseQuantity = (order: string, value: string) => {
          const currentOrder = orderData[0];
          const currentOrderId = orderData[0]._id;
          const num = parseInt(value)
          //iterate quantity using post operation
          var raw = JSON.stringify({"donut_id":"621e88c90db3439bca66cbf2","quantity":num});

          fetch("http://localhost:3001/orders/add_item/" + currentOrderId, {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          
          if (isNaN(num) || num < 0) {
            setQuantity(0);
          }
          else {
            setQuantity(num);
          }
        }
          return (
            <div key={key}>
                <Grid xs={20}>
                <Card shadow width="800px" >
                  {/* <img src={require(`${data.image}`)} alt="Donut Pic" /> */}
                  <Text p b>
                    {data.name}
                  </Text>
                  <Text p>
                    {data.description}
                  </Text>
                  <Text p b>
                    Price: {data.price}
                  </Text>
                  {/* <Grid.Container gap={2} height="100px" justify="center">
                    <Grid><Button auto type="secondary" onClick={() => updateQuantity((quantity-1).toString())}>-</Button></Grid>
                    <Grid><FormControl width="50px" value={quantity} onChange={(event) => updateQuantity(event.target.value)}/></Grid>
                    <Grid><Button auto type="secondary"onClick={() => updateQuantity((quantity+1).toString())}>+</Button></Grid>
                  </Grid.Container> */}
                  <Button auto type="success">Add to Cart</Button>
                </Card>
                <Spacer h={2}/>
                </Grid>
                <Spacer h={2}/>
            </div>
          );
        })}
    </Grid.Container>
    </div>
  );
}

export default Menu;