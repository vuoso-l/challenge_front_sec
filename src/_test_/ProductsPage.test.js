import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import ProductsPage from "../pages/ProductsPage";

let component;
describe("Test CardProduct", () => {
  test("Render content if db = []", () => {    
    component = render(<ProductsPage />)
    expect(component).toBeDefined();
    expect(screen.queryByText(/Inconvenientes técnicos/)).toBeNull();  
  });
});