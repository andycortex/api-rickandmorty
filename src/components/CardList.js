import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import PaginationData from "./PaginationData";

const baseURL = 'https://rickandmortyapi.com/api/character';
export const CardList = () => {
    const [datos, setDatos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [datosPerPage] = useState(10);

    async function fetchData() {
        const response = await axios.get(baseURL);
        setDatos(response.data.results);
    }

    useEffect(() => {
      try {
          fetchData();
      }catch (err) {
          console.log(err);
      }
    }, [])

    // Get current records
  const indexOfLastDatos = currentPage * datosPerPage;
  const indexOfFirstDatos = indexOfLastDatos - datosPerPage;
  const currentDatos = datos.slice(indexOfFirstDatos, indexOfLastDatos);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
    <h1> Lista de Rickandmorty </h1>
        <div className='container'>
            <div className='row'>
                { currentDatos.map(dato => 
                <div className='col' key={dato.id}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant='top' src={dato.image} />
                        <Card.Body>
                            <Card.Title>{dato.name}</Card.Title>
                            <Link to={`/details/${dato.id}`} className='btn btn-primary'>Detalles</Link>
                        </Card.Body>
                    </Card>
                </div>
            )}
            </div>
        </div>
        <PaginationData
        className='mx-auto mb-2 mb-lg-0'
        datosPerPage={datosPerPage}
        totalDatos={datos.length}
        paginate={paginate}
      />
    </>
  )
}
