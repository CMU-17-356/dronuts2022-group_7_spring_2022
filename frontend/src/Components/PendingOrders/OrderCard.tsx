import React from 'react';
import {Divider, Text, Card} from '@geist-ui/core'

function OrderCard() {
  return (
    <div className="pending-orders">
      <Card shadow width="100%" >
        <Text h5 className="order-card-title">Order #id — Placed at: 23:21.</Text>
        <Text h6 className="order-card-drone mb-2 text-muted">Drone #id  status — battery</Text>
        <Divider />
        <div className="order-body">
          <ul>
              <li><Text>Donut 1 - Quantity</Text></li>
              <li><Text>Donut 2 - Quantity</Text></li>
              <li><Text>Donut 3 - Quantity</Text></li>
          </ul>
        </div>
      </Card>
   </div>
  );
}

export default OrderCard;