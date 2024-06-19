import React from 'react'
import { Button } from 'react-bootstrap'
import { motion } from 'framer-motion';

const dataset = () => {
  return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
            <motion.h1 initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} className='text-white'>Download the Report</motion.h1>
            <a href="33.csv" download="datset.csv">
                <Button style={{ padding: '10px 20px',marginTop:"20px"}} variant='outline-success'>Download Report </Button>
            </a>
        </div>  )
}

export default dataset