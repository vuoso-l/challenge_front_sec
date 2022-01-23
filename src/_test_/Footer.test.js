import React from 'react';
import "@testing-library/jest-dom/extend-expect"
import {render} from "@testing-library/react"
import Footer from "../components/Footer";

describe("Test Footer", () => {
  test("Render content", () => {
    expect(render(<Footer />)).toBeDefined();    
  });
});
