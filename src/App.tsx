import "./App.css";
import React from "react";
import { Inicio } from "./components/Inicio";
import { Login } from "./components/Login";
import { ToDo } from "./components/ToDo.jsx";
import { Productos } from "./components/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProveedorCarrito, OperacionesProvider } from "./components/SessionContext.js";
import { DetalleProducto } from "./components/DetalleProducto.jsx";
import { VistaSinPermiso } from "./components/VistaSinPermiso.jsx";
import { VistaCarrito } from "./components/VistaCarrito.js";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (

    <React.StrictMode>
    <OperacionesProvider>
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
   </OperacionesProvider>
  </React.StrictMode>
  );
}

export default App;