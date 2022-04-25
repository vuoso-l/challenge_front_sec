import React from "react";
import { FooterStyle } from "../styledComponent/FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <ul>
          <li>Links útiles</li>
          <li>Productos</li>
          <li>Legales</li>
          <li>Contacto y ayuda</li>
          <li>Menciones</li>
          <li>Zona de entregas</li>
          <li>Redes sociales</li>
          <li>Compra segura</li>
        </ul>
      </div>
      <p>
        © Siempre en Casa 2022 - BEBER CON MODERACIÓN. ESTÁ PROHIBIDA LA VENTA
        DE BEBIDAS ALCOHÓLICAS A MENORES DE 18 AÑOS.
      </p>
    </FooterStyle>
  );
};

export default Footer;
