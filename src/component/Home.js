import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container,Row  } from 'react-bootstrap-v5'
import './Cards.css'
import Cards from './Cards'

function Home({}) {

    const [product, setproduct] = useState([])

    const fetchData = async () => {
        await axios.get('https://api.xentice.com/api/postadSelect')
            .then((res) => setproduct(res.data))
    }
    console.log("datas", product)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container>
        <div className='cards   '>
            {
                product ?
                    product.map((item) => (
                        <div className=''>
                                <Cards product={item}  title={'Industrial Land'} />
                        </div>
                    ))
                    : null
            }
 
        </div>
        </Container>
    )
}

export default Home
