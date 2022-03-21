import React, { useState, useEffect } from 'react';
import {Grid, Card, Button, Text, Spacer} from '@geist-ui/core'
// import { donutData } from '../data/dummydata';
import axios from 'axios';

function Cart() {
  const [cartData, setCartData] = useState<Array<any>>([]);
  const [orderData, setOrderData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [total, setTotal] = useState<number>(0);


  const fetchCartData = async () => {
    await axios.get("/orders").then(response => {
      setCartData(response.data[0].donuts);
      setOrderData(response.data[0]);
      updateTotalCost();
      console.log(response.data);
    });
    
    setLoading(false);
  };

  const updateTotalCost = () => {
    var quantity = 0;
    cartData.forEach(donut => {
      quantity = quantity + donut.quantity*donut.price;
    });
    setTotal(quantity);
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
        
      {/* {console.log(orderData);
       console.log(donutData);} */}
      {/* {setDonutData(orderData[0].donuts)}; */}
      {cartData.map((data, key) => {
          return (
            <div key={key}>
                <Grid md={24}>
                <Card shadow width="800px" >
                  {/* <img src={require(`${data.image}`)} alt="Donut Pic" /> */}
                  <Text p b>
                    beautiful donut
                  </Text>
                  <Text p>
                    Price: $420.69
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