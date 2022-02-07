import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import DetailsProduct from "../components/DetailsProduct";

let component;
let product = [];
let recImage = [];

describe("Test DetailProduct", () => {
  test("Render content if recommendedImage and product = []", () => {
    component = render(<DetailsProduct recommendedImage={recImage} product={product} />)
    expect(component).toBeDefined();
  });
  test("Render content if recommendedImage and product have one object", () => {
    product = [
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
    recImage = [
      {
        product_id: "4854058319917",
        recommendations: ["4854059663405", "4854059991085", "4854060384301"],
      },
    ];
    render(<DetailsProduct recommendedImage={recImage} product={product} />);
  });
  test("Click to add a product in the cart", async () => {
    product = [
      {
        product_id: "4854059663405",
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
    recImage = ["4854059663405"];

    render(<DetailsProduct recommendedImage={recImage} product={product} />);
    const btn = await screen.findByTestId("btn-addCart");
    UserEvent.click(btn);
  });
});
