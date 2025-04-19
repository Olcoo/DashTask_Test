import { ProductStock } from "../store/slices/productsStock/type";

export const productsStock: ProductStock[] = [
    {
        id: "1",
        name: "Apple Watch Series 4",
        category: "Digital Product",
        price: 690,
        piece: 63,
        image: "/images/test-stock-prod-img.png",
        colors: ["#000000", "#9F9F9F", "#E98F8F"],
      },
      {
        id: "2",
        name: "Microsoft Headsquare",
        category: "Digital Product",
        price: 190,
        piece: 13,
        image: "/images/test-stock-prod-img.png",
        colors: ["#000000", "#F57C7C", "#4D88EF"],
      },
      {
        id: "3",
        name: "Women's Dress",
        category: "Fashion",
        price: 640,
        piece: 635,
        image: "/images/test-stock-prod-img.png",
        colors: ["#882853", "#7CB7F5", "#12163C", "#4343EE"],
      },
    {
        id: "4",
        name: "Samsung A50",
        category: "Mobile",
        price: 400,
        piece: 67,
        image: "/images/test-stock-prod-img.png",
        colors: ["#283988", "#000000", "#A32147"],
      },
      {
        id: "5",
        name: "Camera",
        category: "Electronic",
        price: 420,
        piece: 52,
        image: "/images/test-stock-prod-img.png",
        colors: ["#283988", "#000000", "#A32147"],
      },
];