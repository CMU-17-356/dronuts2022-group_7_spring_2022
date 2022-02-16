import React from 'react';
import {Grid, Card, Text, Divider, Collapse} from '@geist-ui/core'


function PastOrderCard() {
  return (
    <div>
        <Text>Order #id -- Time Completed: MM/DD/YY timestamp </Text>
          <ul>
              <li><Text>Donut 1 - Quantity</Text></li>
              <li><Text>Donut 2 - Quantity</Text></li>
          </ul>
    </div>
  );
}

export default PastOrderCard;