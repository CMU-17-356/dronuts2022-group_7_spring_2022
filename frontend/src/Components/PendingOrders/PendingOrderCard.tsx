import React from 'react';
import OrderCard from './OrderCard'
import { FixedSizeList as List } from 'react-window';
import {Grid, Text, Card, Divider, Collapse} from '@geist-ui/core'
import './PendingOrderCard.css';
import PastOrderCard from './PastOrderCard';

const OrderRow = () => (
  <div>
    <OrderCard/>
  </div>);

function PendingOrderCard() {
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