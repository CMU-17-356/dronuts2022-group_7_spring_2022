import React, { useState } from 'react';
import {Grid, Card, Button, Text, Spacer, Input} from '@geist-ui/core'
import { donutData } from '../data/dummydata';
import { FormControl } from 'react-bootstrap';




function Menu() {
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="100px">
      {donutData.map((data, key) => {
        const [quantity, setQuantity] = useState<number>(0);
        const updateQuantity = (value: string) => {
          const num = parseInt(value)
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
                  <Grid.Container gap={2} height="100px" justify="center">
                    <Grid><Button auto type="secondary" onClick={() => updateQuantity((quantity-1).toString())}>-</Button></Grid>
                    <Grid><FormControl width="50px" value={quantity} onChange={(event) => updateQuantity(event.target.value)}/></Grid>
                    <Grid><Button auto type="secondary"onClick={() => updateQuantity((quantity+1).toString())}>+</Button></Grid>
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