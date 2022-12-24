import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap-v5'
import './Cards.css'
import { BsHeart } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";



function Cards({ product , title}) {
  


  return (
    <div>

      <Container >
        <h3>{JSON.parse(product.propertyType).name}</h3>
        <Card className='cardss' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={JSON.parse(product.images)} style={{ height: '12rem' }} />
          <Card.Body>
            <div className='d-flex '>
              <Card.Title className='text-dark'>{JSON.parse(product.details).title}</Card.Title>
              <BsHeart className='ms-auto fs-5 icon '   />
            </div>
            <div className='d-flex'>
            <BsGeoAlt className=' fs-5 me-1' />
            <Card.Text className='text-dark'>{JSON.parse(product.location).city}</Card.Text>
            </div>
            <Card.Text className='text-danger '>RS {JSON.parse(product.details).price?JSON.parse(product.details).price.rate :null}{JSON.parse(product.details).price?JSON.parse(product.details).price.type : null}</Card.Text>
           
            <div className='  d-flex '>
             <Card.Text className='text-primary ms-auto ' >Explore Now</Card.Text>
            
            </div>
          </Card.Body>
        </Card>
      </Container>

      <h1></h1>

    </div>
  )
}

export default Cards
