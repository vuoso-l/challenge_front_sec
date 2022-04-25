import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

import ShopCart from "../components/ShopCart";

let component;

describe("Test ShopCart", () => {
  test("Render content", () => {
    component = render(<ShopCart />);
    expect(component).toBeDefined();
  });
  test("Render delete button", () => {
    component = render(<ShopCart />);
    expect(component).toBeDefined();
    fireEvent.click(screen.getByTestId("button-del"));
  });
  test("Render counter", () => {
    component = render(<ShopCart />);
    expect(component).toBeDefined();

    expect(screen.getByTestId("counter-elementCart")).toHaveTextContent("1");
  });
});
