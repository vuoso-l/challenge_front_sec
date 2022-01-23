import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SelectFilter from "../components/SelectFilter";

describe("Test SelectFilter", () => {
  test("Render content", () => {    
    expect(render(<SelectFilter />)).toBeDefined();
  });
});
