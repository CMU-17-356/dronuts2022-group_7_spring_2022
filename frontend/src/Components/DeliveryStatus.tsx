import React from 'react';
import {ProgressBar} from 'react-bootstrap'
import {Text} from '@geist-ui/core'


var percent = 60;
var minutes = 17;

function DeliveryStatus() {
  return (
    <div>
        <Text p>Your drone is <b>{minutes} minutes</b> away.</Text>
        <ProgressBar now={percent} />
    </div>
  );
}

export default DeliveryStatus;