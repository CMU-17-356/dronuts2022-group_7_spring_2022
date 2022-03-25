import React, {useState, useEffect} from 'react';
import {Text, Card, Divider} from '@geist-ui/core'
import {Nav} from 'react-bootstrap';
import './EmployeeOrderCard.css';

function EmployeeOrderCard() {
  const [donutDict, setDonutMap] = useState<[]>([]);
  const [pastOrderData, setPastOrderData] = useState<Array<any>>([]);
  const [pendingOrderData, setPendingOrderData] = useState<Array<any>>([]);

  const fetchPendingOrderData = async () => {
    const response = await fetch('https://dronutgroup7frontend.ue.r.appspot.com/orders/pending').then(response => response.json())
    .then(result => {
      setPendingOrderData(result)
    });
    return response;
  }
  const fetchPastOrderData = async () => {
    const response = await fetch('https://dronutsgroup7backend.uk.r.appspot.com/orders/past').then(response => response.json())
    .then(result => {
      setPastOrderData(result)}
    );
    return response;
  }
  const fetchAllDonuts = async () => {
    const response = await fetch('/donuts').then(response => response.json())
    .then(result => {
      let dictionary = Object.assign({}, ...result.map((v: any) => ({[v._id]: v.name})));
      setDonutMap(dictionary)}
    );
    return response;
  }
  
  useEffect(() => { 
    fetchAllDonuts();
    fetchPendingOrderData();
    fetchPastOrderData();
    }, []);
  
  return (
    <div className="orders-page">
      <Card shadow width="100%">
        <Text h4>Pending Orders</Text>
        <Divider />
        <div className="orders-list">
          {pendingOrderData.map((data, key) => {
           let link = "/orders/"+data._id;

           return(<div key={key}>
            <Card shadow>
              <Text h5 className="order-card-title">Order #{data._id} — Placed at: {data.time_placed}.</Text>
              <Nav.Link href={link} className="modify-order-button">Modify</Nav.Link>
              <Text h6 className="order-card-drone mb-2 text-muted">Drone #{data.drone_id}</Text>
              <Text h6 className="order-card-drone mb-2 text-muted">Cost: ${data.cost}</Text>
              <Divider />
              <div className="order-body">
                <ul>
                {data.donuts.map((donutData: any, donutKey: any) => {
                    return(
                      <li key={donutKey}><Text>{donutDict[donutData.donut_id]} - {donutData.quantity}</Text></li>);})}
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
                          return(<li key={donutKey}><Text>{donutDict[pastDonutData.donut_id]} - {pastDonutData.quantity}</Text></li>);
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

export default EmployeeOrderCard;