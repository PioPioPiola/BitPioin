import "./App.css";
import React from "react";
import { Inicio } from "./components/Inicio";
import { Login } from "./components/Login";
import { ToDo } from "./components/ToDo";
import { Productos } from "./components/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProveedorCarrito } from "./components/CartContext";
import { DetalleProducto } from "./components/DetalleProducto";
import { VistaSinPermiso } from "./components/VistaSinPermiso";
import { VistaCarrito } from "./components/VistaCarrito";
import { Navbar } from "./components/Navbar";

function App() {
  return (

    <React.StrictMode>
    <ProveedorCarrito>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<VistaSinPermiso isLogged={true} vista={<Productos />} vistaVolver={<Inicio />}></VistaSinPermiso>} />
          <Route path="/Productos/:id" element={<VistaSinPermiso isLogged={true} vista={<DetalleProducto />} vistaVolver={<Productos />}></VistaSinPermiso>} />
          <Route path="/carrito" element={<VistaCarrito />} />
          <Route path="" element={<p>Pagina no encontrada</p>}/>
        </Routes>
      </BrowserRouter>
    </ProveedorCarrito>
  </React.StrictMode>
  );
}

export default App;