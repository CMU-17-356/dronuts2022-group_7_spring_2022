import React, { useState, useEffect, Dispatch, SetStateAction} from 'react';
import {Grid, Card, Button, Text, Spacer, Input} from '@geist-ui/core'
// import { donutData } from '../data/dummydata';
import { FormControl } from 'react-bootstrap';
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

interface OrderProps {
  currentOrderID: String;
}

function Menu(props:OrderProps){
  const [donutData, setDonutData] = useState<Array<any>>([]);
  const [orderData, setOrderData] = useState<Array<any>>([]);
  const [donutQuantity, setDonutQuantity] = useState<Array<any>>([]);

  const updateQuantityByKey = (key: number, value: string) => {
    var num = parseInt(value);
    if (isNaN(num) || num < 0) {
      donutQuantity[key] = 0;
    }
    else {
      donutQuantity[key] = num;
    }
    setDonutQuantity([...donutQuantity]);
  }

   const fetchDonutData = async () => {
     const response = await fetch('/donuts').then(response => response.json())
    .then(result => {
      console.log('hello', result); 
      setDonutQuantity(newArray(result.length));
      setDonutData(result);
    });
     return response;
  };
  const fetchOrderData = async () => {
    const response = await fetch('/orders').then(response => response.json())
   .then(result => {console.log('orders', result); setOrderData(result)});
    return response;
 };

 const newArray = (size: number) => {
  var arr = new Array<number>();
  for (var i = 0; i < size; i++) {
    arr.push(0);
  }
  return arr;
 }
 
  useEffect(() => {
    fetchDonutData();
    fetchOrderData();
    }, []);
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="100px">
      {donutData.map((data, key) => {
        const updateDatabaseQuantity = () => {
          const currentOrderId = props.currentOrderID;
          const num = donutQuantity[key]; 
          const currentDonutId = donutData[key]._id;

          console.log('order ID', props.currentOrderID);
          
          var raw = JSON.stringify({"donut_id":currentDonutId,"quantity":num});
          if (!isNaN(num)) {
            fetch("/orders/add_item/" + currentOrderId, {
              method: 'PUT',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            })
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
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
                  <Grid.Container gap={2} height="100px" justify="center">
                    <Grid><Button auto type="secondary" onClick={() => updateQuantityByKey(key, (donutQuantity[key]-1).toString())}>-</Button></Grid>
                    <Grid><FormControl width="50px" value={donutQuantity[key]} onChange={(event) => updateQuantityByKey(key, event.target.value)}/></Grid>
                    <Grid><Button auto type="secondary" onClick={() => updateQuantityByKey(key, (donutQuantity[key]+1).toString())}>+</Button></Grid>
                  </Grid.Container>
                  <Button auto type="success" onClick={() => updateDatabaseQuantity()}>Add to Cart</Button>
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