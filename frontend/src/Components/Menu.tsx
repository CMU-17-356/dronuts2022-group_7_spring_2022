import React from 'react';
import {Grid, Card, Button} from '@geist-ui/core'


function Menu() {
  return (
    <div>
      <Grid.Container gap={2} justify="center" height="100px">
          <Grid xs={6}><Card shadow width="100%" ><Button auto type="success">Add to Cart</Button></Card></Grid>
          <Grid xs={6}><Card shadow width="100%" ><Button auto type="success">Add to Cart</Button></Card></Grid>
          <Grid xs={6}><Card shadow width="100%" ><Button auto type="success">Add to Cart</Button></Card></Grid>
      </Grid.Container>
    </div>


    
  );
}

export default Menu;