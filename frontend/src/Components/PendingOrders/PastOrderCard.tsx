import React from 'react';
import {Grid, Card, Text, Divider, Collapse} from '@geist-ui/core'


function PastOrderCard() {
  return (
    <div>
        <Card shadow>
        <Text>Order #id -- Time Completed: MM/DD/YY timestamp </Text>
          <ul>
              <li><Text>Donut 1 - 5</Text></li>
              <li><Text>Donut 2 - 6</Text></li>
          </ul>
        </Card>
    </div>
  );
}

export default PastOrderCard;