// HomePage.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './page.css';

const HomePage = () => {
  return (
    <div className="container content">
      <div className="text-center mb-5">
        <h1>Welcome to Skills Hub!</h1>
        <p className="lead">Your one-stop destination for learning and personal growth.</p>
      </div>

      <Card className="mt-4 transparent-card">
        <Card.Body>
          <Card.Title className="mb-3">Get Started on Your Journey</Card.Title>
          <Card.Text>
            Discover curated resources to help you improve both your personal and professional skills. 
            Join thousands of learners who are transforming their lives through continuous growth and development.
          </Card.Text>
          <div className="d-flex gap-3 flex-wrap">
            <Button variant="primary" href="/self-development" className="me-2">
              Self Development
            </Button>
            <Button variant="primary" href="/skill-development">
              Skill Development
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;