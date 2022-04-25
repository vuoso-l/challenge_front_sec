import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Header from "../components/Header";

let product = [];

describe("Test Header", () => {
  test("Render content if elementCart = []", () => {
    expect(render(<Header elementCart={product} />)).toBeDefined();
  });
  test("Render content if elementCart have one object", () => {
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
    expect(render(<Header elementCart={product} />)).toBeDefined();
  });
  test("Render content if elementCart have more than one object", () => {
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
      {
        product_id: "4854058647597",
        variant_id: "33619204177965",
        total_price: "806.40",
        price_per_unit: "806.4",
        list_price_id: "7",
        sku: "Combo Patagonia Latas 473",
        categories: ["cervezas"],
        units_per_pack: 1,
        image_url:
          "https://cdn.shopify.com/s/files/1/0257/2242/1293/products/Combo_Patagonia_Latas.jpg?v=1585767274",
        handle:
          "copy-of-patagonia-710ml-hoppy-lager-ipa-24-7-bohemian-pilsener-1",
        compare_at_price: "2016.00",
        allowed_packs: [1, 2, 3],
        name: "Incluye un 6pack por variedad de: IPA 24.7; Amber Lager; Weisse. Total 18 Latas",
        description: "",
        discount_percentage: 60,
        size: 1000,
        price_per_litre: "201",
      },
    ];
    expect(render(<Header elementCart={product} />)).toBeDefined();
  });
  test("Render image", () => {
    const src =
      "//cdn.shopify.com/s/files/1/0254/2947/5433/t/12/assets/new_logo-black.svg?v=15514233714370248417?nocache=0.4027801373597353";

    render(<Header elementCart={product} src={src} />);

    const logo = screen.getByRole("img");

    expect(logo).toHaveAttribute("src", src);
    expect(logo).toHaveAttribute("alt", "Logo");
  });
});
