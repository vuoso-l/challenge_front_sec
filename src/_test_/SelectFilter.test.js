import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SelectFilter from "../components/SelectFilter";

let component;

describe("Test SelectFilter", () => {
  test("Render content", () => {
    component = render(<SelectFilter />);
    expect(component).toBeDefined();
    expect(screen.queryByText(/Inconvenientes técnicos/)).toBeNull();
  });
  test("Render error component", async () => {
    component = render(<SelectFilter />);

    expect(
      await screen.findByText(/Inconvenientes técnicos/)
    ).toBeInTheDocument();
    expect(await screen.findByAltText(/Logo/)).toBeInTheDocument();
  });
});
