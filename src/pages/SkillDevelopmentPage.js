// SkillDevelopmentPage.js
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './page.css';

const SkillDevelopmentPage = () => {
  return (
    <div className="container content">
      <div className="mb-4">
        <h1>Skill Development</h1>
        <p className="lead">Explore a comprehensive range of technical skills to learn, from modern web development to cutting-edge design principles.</p>
      </div>

            <Card className="mt-4 transparent-card">
        <Card.Header as="h5">Git</Card.Header>
        <Card.Body>
          <Card.Title>Distributed version control system (VCS) </Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <a className="in-content" href="https://youtu.be/2ReR1YJrNOM?si=TJ-IQ6V54gOhkLu8" target="_blank" rel="noopener noreferrer">
              What is Git?
            </a>
            <small className="d-block mt-2 text-muted">Source : YouTube</small>
          </ListGroupItem>

        </ListGroup>
      </Card>

      <Card className="mt-4 transparent-card">
        <Card.Header as="h5">Front End Development</Card.Header>
        <Card.Body>
          <Card.Title>Show who you are !!</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <a className="in-content" href="https://youtu.be/PlxWf493en4?si=GTqMgPGC8h77A-PC" target="_blank" rel="noopener noreferrer">
              How to create a simple HTML website
            </a>
            <small className="d-block mt-2 text-muted">Source : freeCodeCamp.org</small>
          </ListGroupItem>

          <ListGroupItem>
            <a className="in-content" href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
              Official React Documentation - Complete Guide
            </a>
            <small className="d-block mt-2 text-muted">The authoritative source for React concepts, API references, and best practices</small>
          </ListGroupItem>

          <ListGroup className='list-group-flush'>
            <ListGroupItem>
            <a className="in-content" href="https://youtu.be/SqcY0GlETPk?si=hvrb51tjWgJKafeZ" target="_blank" rel="noopener noreferrer">
              React basics
            </a>
            <small className="d-block mt-2 text-muted">Source : YouTube</small>  
            </ListGroupItem>

          </ListGroup>

        </ListGroup>
      </Card>

    </div>
  );
};

export default SkillDevelopmentPage;