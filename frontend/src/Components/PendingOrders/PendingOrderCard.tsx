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
        </div>
      </Card>

      <Card shadow width="100%">
      <div className="past-orders">
        <Divider />
          <Collapse title="Past Orders (Recent)" className='past-orders'> 
            <PastOrderCard/>
            <PastOrderCard/>
          </Collapse>
        </div>
    </Card>
    </div>
  );
}

export default PendingOrderCard;