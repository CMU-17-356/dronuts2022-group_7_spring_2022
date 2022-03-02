import React, { useState, useEffect } from 'react';
import {Grid, Card, Button, Text, Spacer} from '@geist-ui/core'
// import { donutData } from '../data/dummydata';
import axios from 'axios';




function Cart() {
  const [orderData, setOrderData] = useState<Array<any>>([]);
  const [donutData, setDonutData] = useState<Array<any>>([]);
  const [isLoading, setLoading] = useState(true);


  const fetchOrderData = async () => {
    await axios.get("/orders").then(response => {
      setDonutData(response.data[0].donuts);
      console.log(orderData);
    });
    
    setLoading(false);
  //   const response = await fetch('/orders').then(response => response.json())
  //  .then(result => {console.log('orders', result); setOrderData(result); setDonutData(orderData[0].donuts);
  //  setLoading(false) });
    
    // return response;
  };
  const fetchDonutData = async () => {
  //   const response = await fetch('/donuts').then(response => response.json())
  //  .then(result => {console.log('hello', result); setDonutData(result)});
  //   return response;
    // console.log(orderData[0].donuts);
    
  };
    
  // }
  useEffect(() => { 
    console.log("fuck");
    fetchOrderData();
    //fetchDonutData();
    }, []);
    
    // cartData = orderData[0].donuts
    // console.log(orderData[0].donuts);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="300px" width="100%">
        
      {/* {console.log(orderData);
       console.log(donutData);} */}
      {/* {setDonutData(orderData[0].donuts)}; */}
      {donutData.map((data, key) => {
          return (
            <div key={key}>
                <Grid md={24}>
                <Card shadow width="800px" >
                  {/* <img src={require(`${data.image}`)} alt="Donut Pic" /> */}
                  <Text p b>
                    Gushing beautiful donut
                  </Text>
                  <Text p>
                    Price: $420.69
                  </Text>
                  <Text p>
                    Quantity: {data.quantity}
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