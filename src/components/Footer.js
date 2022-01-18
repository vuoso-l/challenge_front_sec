import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="ulContainer">
        <ul>
          <li>Links útiles</li>
          <li>Productos</li>
          <li>Legales</li>
          <li>Contacto y ayuda</li>
          <li>Menciones</li>
          <li>Zona de entregas</li>
        </ul>
        <ul>
          <li>Redes sociales</li>
          <li>Compra segura</li>
        </ul>
      </div>
      <p>
        © Siempre en Casa 2022 - BEBER CON MODERACIÓN. ESTÁ PROHIBIDA LA VENTA
        DE BEBIDAS ALCOHÓLICAS A MENORES DE 18 AÑOS.
      </p>
    </footer>
  );
};

export default Footer;
