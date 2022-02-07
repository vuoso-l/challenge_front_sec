import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SelectFilter from "../components/SelectFilter";

let component;
let handleChange = jest.fn();

describe("Test SelectFilter", () => {
  test("Render content", () => {
    component = render(<SelectFilter handleChange={handleChange} />);
    expect(component).toBeDefined();
    expect(screen.queryByText(/Inconvenientes técnicos/)).toBeNull();
  });
  test("Render error component", async () => {
    component = render(<SelectFilter handleChange={handleChange} />);

    expect(
      await screen.findByText(/Inconvenientes técnicos/)
    ).toBeInTheDocument();
    expect(await screen.findByAltText(/Logo/)).toBeInTheDocument();
  });
});
