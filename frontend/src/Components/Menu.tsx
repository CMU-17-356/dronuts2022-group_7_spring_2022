import React from 'react';
import {Grid, Card, Button, Text, Spacer} from '@geist-ui/core'
import { donutData } from '../data/dummydata';




function Menu() {
  return (
    <div>
      <Grid.Container gap={1} justify="center" height="100px">
      {donutData.map((data, key) => {
          return (
            <div key={key}>
              
                <Grid xs={20}>
                <Card shadow width="100%" >
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