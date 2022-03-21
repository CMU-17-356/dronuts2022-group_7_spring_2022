import React, {useState, useEffect} from 'react';
import OrderCard from './OrderCard'
import { FixedSizeList as List } from 'react-window';
import {Grid, Text, Card, Divider, Collapse} from '@geist-ui/core'
import './PendingOrderCard.css';
import PastOrderCard from './PastOrderCard';

import axios from 'axios';

function PendingOrderCard() {
  const [orderData, setOrderData] = useState<Array<any>>([]);
  const [pastOrderData, setPastOrderData] = useState<Array<any>>([]);
  const [pendingOrderData, setPendingOrderData] = useState<Array<any>>([]);

  const fetchAllOrders = async () => {
    const response = await fetch('/orders').then(response => response.json())
    .then(result => {console.log('order', result); setOrderData(result)});
    return response;
  }
  const fetchPendingOrderData = async () => {
    const response = await fetch('/orders/pending').then(response => response.json())
    .then(result => {console.log('pending', result); setPendingOrderData(result)});
    return response;
  }
  const fetchPastOrderData = async () => {
    const response = await fetch('/orders/past').then(response => response.json())
    .then(result => {console.log('past', result); setPastOrderData(result)});
    return response;
  }
  
  useEffect(() => { 
    fetchAllOrders();
    fetchPendingOrderData();
    fetchPastOrderData();
    }, []);
  
  return (
    
    <div className="pending-orders-page">
      <Card shadow width="100%">
        <Text h4>Pending Orders</Text>
        <Divider />
        <div className="orders-list">
          {pendingOrderData.map((data, key) => {
           return(<div key={key}>
            <Card shadow>
              <Text h5 className="order-card-title">Order #{data._id} — Placed at: {data.time_placed}.</Text>
              <Text h6 className="order-card-drone mb-2 text-muted">Drone #{data.drone_id} status — battery</Text>
              <Text h6 className="order-card-drone mb-2 text-muted">Cost: ${data.cost}</Text>
              <Divider />
              <div className="order-body">
                <ul>
                {data.donuts.map((donutData: any, donutKey: any) => {
                    return(
                      <li key={donutKey}><Text>Donut {donutData.donut_id} - {donutData.quantity}</Text></li>);})}
                </ul>
              </div>
            </Card>
         </div>)
          })}
        </div>
      </Card>

      <Card>
        <Text h4>Past Orders (Recent)</Text>
        <Divider/>
        <div className="orders-list">
            {pastOrderData.map((pastOrderData, pastOrderKey) => {
              return (
                <div key={pastOrderKey}>
                    <Card shadow>
                    <Text>Order #{pastOrderData._id} -- Time Completed: {pastOrderData.time_delivered} </Text>
                      <ul>
                        {pastOrderData.donuts.map((pastDonutData: any, donutKey: any) => {
                          return(<li key={donutKey}><Text>Donut {pastDonutData.donut_id} - {pastDonutData.quantity}</Text></li>);
                        })}
                      </ul>
                    </Card>
                </div>
              );
            })}
        </div>
      </Card>
    </div>
  );
}

export default PendingOrderCard;