import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import CardProduct from "../components/CardProduct";

let component;
let db = [];
let setElementCart = jest.fn();
describe("Test CardProduct", () => {
  test("Render content if db = []", () => {    
    component = render(<CardProduct db={db} />)
    expect(component).toBeDefined();
    expect(screen.queryByText(/Inconvenientes técnicos/)).toBeNull();  
  });
  test("Render content if db have one object", async () => {
    
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
    component = render(<CardProduct elementCart={db} setElementCart={setElementCart} />)
    expect(component).toBeDefined();
    
  });
  test("Click add button", async () => {
    
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

    component = render(<CardProduct elementCart={db} setElementCart={setElementCart} />)
    expect(component).toBeDefined();

    await (await screen.findAllByTestId("btn-addCart")).map(btn => fireEvent.click(btn))
    
  });
  test("Click delete button", async () => {
    
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

    component = render(<CardProduct elementCart={db} setElementCart={setElementCart} />)
    expect(component).toBeDefined();

    await (await screen.findAllByTestId("btn-delCart")).map(btn => fireEvent.click(btn))
    
  });
  test('Render error component', async () => {
    component = render(<CardProduct />)

    expect(await screen.findByText(/Inconvenientes técnicos/)).toBeInTheDocument();
    expect(await screen.findByAltText(/Logo/)).toBeInTheDocument();
  });
});