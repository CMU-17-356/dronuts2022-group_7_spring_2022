import React, {useState} from 'react';
import OrderCard from './OrderCard'
import { FixedSizeList as List } from 'react-window';
import {Grid, Text, Card, Divider, Collapse} from '@geist-ui/core'
import './PendingOrderCard.css';
import PastOrderCard from './PastOrderCard';

import axios from 'axios';

let pastOrders: Array<number> = new Array<number>();

const OrderRow = () => (
  <div>
    <OrderCard/>
  </div>);

function PendingOrderCard() {
    // axios.get(`/pending`).then(response => useState({pastOrders: response.data, done: true }))
    console.log(pastOrders);

  return (
    
    <div className="pending-orders-page">
      <Card shadow width="100%" >
        <Text h4>Pending Orders</Text>
        <Divider />
        <div className="orders-list">
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>
        </div>
      </Card>

      <Card>
        <Text h4>Past Orders (Recent)</Text>
        <Divider/>
        <div className="orders-list">
            <PastOrderCard/>
            <PastOrderCard/>
            <PastOrderCard/>
        </div>
      </Card>
    </div>
  );
}

export default PendingOrderCard;