import React, { useState } from 'react';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import '../components/assets/style.css'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const InsightsGallery = ({ insights }) => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
    setSelectedCard(insights[index]); // Set selected card data
  };


  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {insights.map((insight, index) => (
          <Col key={index}>
            <Card
              className={`h-100 border-0 rounded-3 position-relative cardb ${
                expandedCardIndex === index ? 'card-expanded' : ''
              }`}
              style={{ background: 'transparent', backdropFilter: 'blur(15px)' }}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-bg">
                <img src={insight.imageUrl} alt={insight.title} className="img-fluid rounded-3" />
              </div>
              <Card.Body className="card-body">
                <Card.Title style={{ color: '#fff' }}>{insight.title}</Card.Title>
                <Card.Text style={{ color: '#fff' }}>
                  {expandedCardIndex === index
                    ? `${insight.business_advice.substring(0,105)}...`
                    : `${insight.business_advice.substring(0, 30)}...`}
                    
                </Card.Text>
                <Link to={`/insight/${index}`}>
                <Button variant='outline-primary 'style={{width:"100%"}}>See more</Button>
              </Link>
              </Card.Body>
               
            </Card>
          </Col>
        ))}
      </Row>

      
    </Container>
  );
};

export default InsightsGallery;
