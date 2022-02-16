import React from 'react';
import {Grid, Card, Button, Text, Spacer} from '@geist-ui/core'
import { donutData } from '../data/dummydata';




function Cart() {
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="300px" width="100%">
      {donutData.map((data, key) => {
          return (
            <div key={key}>
                <Grid md={24}>
                <Card shadow width="100%" >
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
    </Grid.Container>
    <Grid.Container gap={1.5}>
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