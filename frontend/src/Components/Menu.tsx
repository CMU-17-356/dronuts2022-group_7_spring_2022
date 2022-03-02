import React, { useState, useEffect } from 'react';
import {Grid, Card, Button, Text, Spacer, Input} from '@geist-ui/core'
// import { donutData } from '../data/dummydata';
import { FormControl } from 'react-bootstrap';
import { updateDefaultClause } from 'typescript';

function Menu() {
  const [donutData, setData] = useState<Array<any>>([]);
   const fetchData = async () => {
     const response = await fetch('/donuts').then(response => response.json())
    .then(result => {updateData(result)});
     return response;
  };

  const [quantity, setQuantity] = useState<Array<number>>([]);

  const updateData = (result: Array<any>) => {
    var length = result.length;
    setQuantity(new Array<number>(length).fill(0));
    setData(result);
  }

  const updateQuantityByKey = (key: number, value: string) => {
    var num = parseInt(value);
    if (isNaN(num) || num < 0) {
      quantity[key] = 0;
    }
    else {
      quantity[key] = num;
    }
  }

  useEffect(() => {
    fetchData();
    }, []);
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="100px">
      {donutData.map((data, key) => {
        const updateQuantity = (key:number, value: string) => {
          const num = parseInt(value)
          if (isNaN(num) || num < 0) {
            quantity[key] = 0;
          }
          else {
            quantity[key] = num;
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
                    <Grid><Button auto type="secondary" onClick={() => updateQuantityByKey(key, (quantity[key]-1).toString())}>-</Button></Grid>
                    <Grid><FormControl width="50px" value={quantity[key]} onChange={(event) => updateQuantityByKey(key, event.target.value)}/></Grid>
                    <Grid><Button auto type="secondary"onClick={() => updateQuantityByKey(key, (quantity[key]+1).toString())}>+</Button></Grid>
                  </Grid.Container>
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