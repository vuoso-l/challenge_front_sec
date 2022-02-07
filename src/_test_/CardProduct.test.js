import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardProduct from "../components/CardProduct";

let component;
describe("Test CardProduct", () => {
  test("Render content", () => {
    component = render(<CardProduct />);
    expect(component).toBeDefined();
    expect(screen.queryByText(/Inconvenientes técnicos/)).toBeNull();
  });
  test("Render error component", async () => {
    component = render(<CardProduct />);

    expect(
      await screen.findByText(/Inconvenientes técnicos/)
    ).toBeInTheDocument();
    expect(await screen.findByAltText(/Logo/)).toBeInTheDocument();
  });
});
