import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const InsightDetails = ({ insights }) => {
  const { index } = useParams(); // Get index from URL params
  const insight = insights[index]; // Get the selected insight based on index

  if (!insight) {
    return <div>Loading...</div>; // Handle case where insight is not found
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img
        src={insight.imageUrl}
        alt= "Not available"
        style={{ width: '90%', margin: '20px 0', borderRadius: '10px' }}
      />
     
      <motion.h3  initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} style={{ color: '#fff', margin: '10px 0' }}>{insight.title}</motion.h3>
      <h4 style={{ color: '#fff', margin: '10px 0' }}>Summary</h4>
      <motion.p initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} style={{ color: 'gold', fontSize: '18px', lineHeight: '1.6' }}>{insight.summary}</motion.p>
      <h4 style={{ color: '#fff', margin: '10px 0' }}>business advice</h4>
      <motion.p initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} style={{ color: 'gold', fontSize: '18px', lineHeight: '1.6' }}>{insight.business_advice}</motion.p>
    </div>
  );
};

export default InsightDetails;
