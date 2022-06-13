
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import NavComponent from './NavComponent';
import { useParams } from "react-router-dom";



const Details = () => {
  const { rmId } = useParams();
  const [datos, setDatos] = useState([]);
  const baseURL = `https://rickandmortyapi.com/api/character/${rmId}`;

  

  useEffect(() => {
    (async function () {
      let data = await fetch(baseURL).then((res) => res.json());
      setDatos(data);
    })();
  }, [baseURL]);

  console.log(datos);
  return (
    <>
    <NavComponent/>
    <h1> Detalle por Id - {datos.id} </h1>
      <div className='container'>
            <div className='row'>
                <div className='col' key={datos.id}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant='top' src={datos.image} />
                        <Card.Body>
                            <Card.Title>{datos.name}</Card.Title>
                            <Link to={`/details/${datos.id}`} className='btn btn-primary'>Detalles</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default Details
