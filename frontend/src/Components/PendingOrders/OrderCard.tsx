import React from 'react';
import {Divider, Text, Card} from '@geist-ui/core'

function OrderCard() {
  return (
    <div>
      <Card shadow>
        <Text h5 className="order-card-title">Order #id — Placed at: 23:21.</Text>
        <Text h6 className="order-card-drone mb-2 text-muted">Drone #id  status — battery</Text>
        <Divider />
        <div className="order-body">
          <ul>
              <li><Text>Donut 1 - 1</Text></li>
              <li><Text>Donut 2 - 4</Text></li>
              <li><Text>Donut 3 - 2</Text></li>
          </ul>
        </div>
      </Card>
   </div>
  );
}

export default OrderCard;