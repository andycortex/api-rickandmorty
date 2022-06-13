
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import NavComponent from './NavComponent';

const baseURL = 'https://rickandmortyapi.com/api/character';

const SearchList = () => {
  const [search, setNewSearch] = useState("");
  const [datos, setDatos] = useState([]);

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
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  }; 
  const filtered = !search
    ? datos
    : datos.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <>
    <NavComponent/>
    <h1>Buscador para mortyandmorphy</h1>
    <div className="mb-3">
      <label  className="form-label">Buscador de Imagenes</label>
        <input type="text" placeholder="ingrese el nombre a buscar" name='seach' className="form-control" value={search} onChange={handleSearchChange} />
    </div>
      <div className='container'>
            <div className='row'>
            {filtered.map((item) => {
              return (
                <div className='col' key={item.id}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant='top' src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Link to={`/details/${item.id}`} className='btn btn-primary'>Detalles</Link>
                        </Card.Body>
                    </Card>
                </div>
              );
            })}
            </div>
        </div>
    </>
  )
}

export default SearchList
