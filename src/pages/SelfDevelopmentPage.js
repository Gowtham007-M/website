// SelfDevelopmentPage.js
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './page.css';

const SelfDevelopmentPage = () => {
  return (
    <div className="container content">
      <div className="mb-4">
        <h1>Self-Development</h1>
        <p className="lead">It's always you vs you...</p>
      </div>
      <Card className="mt-5 transparent-card">
        <Card.Header as="h5">Coming Soon...</Card.Header>
      </Card>
    </div>
  );
};

export default SelfDevelopmentPage;