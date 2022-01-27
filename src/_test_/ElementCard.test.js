import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import ElementCard from "../components/ElementCard";

let component;
let db = [];
let categorySelected = ["gaseosas"];
const addHandleCart = jest.fn();
const deleteHandleCart = jest.fn();
let isOpen = false;
const setIsOpen = jest.fn();
const closeCard = jest.fn();

describe("Test ElementCard", () => {
  test("Render content if db = []", () => {
    component = render(<ElementCard db={db} />);
    expect(component).toBeDefined();
    expect(screen.queryByText(/Inconvenientes técnicos/)).toBeNull();
  });
  test("Render content if db have one object", () => {
    db = [
      {
        product_id: "4854058319917",
        variant_id: "33619202211885",
        total_price: "283.50",
        price_per_unit: "283.5",
        list_price_id: "7",
        sku: "Combo Gaseosas Latas 354",
        categories: ["gaseosas"],
        units_per_pack: 1,
        image_url:
          "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Gaseosa_Latas.jpg?v=1585767272",
        handle:
          "7up-light-paso-de-los-toros-pomelo-pepsi-black-6pack-354ml-por-variedad",
        compare_at_price: "630.00",
        allowed_packs: [1, 2, 3],
        name: "7up Light & Paso de los toros Pomelo & Pepsi Black. (6pack 354ml por variedad)",
        description: "",
        discount_percentage: 55.00000000000001,
        size: 1000,
        price_per_litre: "201",
      },
    ];
    component = render(
      <ElementCard
        db={db}
        categorySelected={categorySelected}
        addHandleCart={addHandleCart}
        deleteHandleCart={deleteHandleCart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeCard={closeCard}
      />
    );
    expect(component).toBeDefined();
  });
  test("Render error component", async () => {
    component = render(<ElementCard db={db} />);

    expect(
      await screen.findByText(/Inconvenientes técnicos/)
    ).toBeInTheDocument();
    expect(await screen.findByAltText(/Logo/)).toBeInTheDocument();
  });
  test("Open image to see recommended products", async () => {
    db = [
      {
        product_id: "4854058319917",
        variant_id: "33619202211885",
        total_price: "283.50",
        price_per_unit: "283.5",
        list_price_id: "7",
        sku: "Combo Gaseosas Latas 354",
        categories: ["gaseosas"],
        units_per_pack: 1,
        image_url:
          "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Gaseosa_Latas.jpg?v=1585767272",
        handle:
          "7up-light-paso-de-los-toros-pomelo-pepsi-black-6pack-354ml-por-variedad",
        compare_at_price: "630.00",
        allowed_packs: [1, 2, 3],
        name: "7up Light & Paso de los toros Pomelo & Pepsi Black. (6pack 354ml por variedad)",
        description: "",
        discount_percentage: 55.00000000000001,
        size: 1000,
        price_per_litre: "201",
      },
    ];
    component = render(
      <ElementCard
        db={db}
        addHandleCart={addHandleCart}
        deleteHandleCart={deleteHandleCart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );

    fireEvent.click(await screen.findByTestId("img-openCard"));
  });
  test("Click to add a product in the cart", async () => {
    db = [
      {
        product_id: "4854058319917",
        variant_id: "33619202211885",
        total_price: "283.50",
        price_per_unit: "283.5",
        list_price_id: "7",
        sku: "Combo Gaseosas Latas 354",
        categories: ["gaseosas"],
        units_per_pack: 1,
        image_url:
          "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Gaseosa_Latas.jpg?v=1585767272",
        handle:
          "7up-light-paso-de-los-toros-pomelo-pepsi-black-6pack-354ml-por-variedad",
        compare_at_price: "630.00",
        allowed_packs: [1, 2, 3],
        name: "7up Light & Paso de los toros Pomelo & Pepsi Black. (6pack 354ml por variedad)",
        description: "",
        discount_percentage: 55.00000000000001,
        size: 1000,
        price_per_litre: "201",
      },
    ];
    component = render(
      <ElementCard
        db={db}
        isOpen={isOpen}
        closeCard={closeCard}
        addHandleCart={addHandleCart}
      />
    );

    fireEvent.click(await screen.findByTestId("btn-addCart"));
  });
  test("Click to delete a product from the cart", async () => {
    db = [
      {
        product_id: "4854058319917",
        variant_id: "33619202211885",
        total_price: "283.50",
        price_per_unit: "283.5",
        list_price_id: "7",
        sku: "Combo Gaseosas Latas 354",
        categories: ["gaseosas"],
        units_per_pack: 1,
        image_url:
          "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Gaseosa_Latas.jpg?v=1585767272",
        handle:
          "7up-light-paso-de-los-toros-pomelo-pepsi-black-6pack-354ml-por-variedad",
        compare_at_price: "630.00",
        allowed_packs: [1, 2, 3],
        name: "7up Light & Paso de los toros Pomelo & Pepsi Black. (6pack 354ml por variedad)",
        description: "",
        discount_percentage: 55.00000000000001,
        size: 1000,
        price_per_litre: "201",
      },
    ];
    const deleteHandleCart = jest.fn();
    component = render(
      <ElementCard db={db} deleteHandleCart={deleteHandleCart} />
    );

    fireEvent.click(await screen.findByTestId("btn-delCart"));
  });
});
