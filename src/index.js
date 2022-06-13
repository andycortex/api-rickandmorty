import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SearchList from './components/SearchList';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddCard from './components/AddCard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/search" element={<SearchList />}/>
      <Route path="/add" element={<AddCard />}/>
      <Route path="details/:rmId" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

