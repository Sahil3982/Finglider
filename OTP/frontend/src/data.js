const orders = [
  {
    id: crypto.randomUUID(),
    customerName: "John Doe",
    address: "123 Main St, Anytown, USA",
    items: [
      {
        sno: 1,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 2,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 3,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
    ],
    status: "inprogress",
    OrderID: "4636KJKJG348",
    TotalAmount: 3482,
    date: "31/3/2024 3:40 PM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "Jane Smith",
    address: "456 Elm St, Somewhereville, USA",
    items: [
      {
        sno: 1,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 2,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 3,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
    ],
    status: "Delivered",
    OrderID: "IOP628972348",
    TotalAmount: 2100,
    date: "29/2/2024 2:30 PM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "Alice Johnson",
    address: "789 Oak St, Nowheretown, USA",
    items: [
      {
        sno: 1,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 2,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 3,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
    ],
    status: "Processing",
    OrderID: "4BEF8972348",
    TotalAmount: 4000,
    date: "27/2/2024 4:30 PM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "Bob Brown",
    address: "101 Pine St, Anytown, USA",
    items: [
      {
        sno: 1,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 2,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 3,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
    ],
    status: "Processing",
    OrderID: "46EBRS972348",
    TotalAmount: 850,
    date: "19/2/2024 3:00 AM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "Devid warn",
    address: "111 Cedar St, Somewhereville, USA",
    items: [
      {
        sno: 1,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 2,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 3,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
    ],    status: "Delivered",
    OrderID: "XYZ28972348",
    TotalAmount: 2300,
    date: "6/4/2024 3:00 AM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "Emily Tison",
    address: "222 Maple St, Nowheretown, USA",
    items: [
      {
        sno: 1,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 2,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
      {
        sno: 3,
        dish: "Bhongi",
        price: 100,
        category: "A",
      },
    ],    status: "Delivered",
    OrderID: "4UY28972348",
    TotalAmount: 1300,
    date: "6/2/2024 3:00 AM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "John Wilson",
    address: "333 Oak St, Anytown, USA",
    items: "Product I",
    status: "Delivered",
    OrderID: "4636289HF48",
    TotalAmount: 2300,
    date: "8/2/2024 3:00 AM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "Sarah Lee",
    address: "444 Walnut St, Somewhereville, USA",
    items: "Product L",
    status: "Processing",
    OrderID: "463628XYZ",
    TotalAmount: 900,
    date: "2/2/2024 3:00 AM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "Michael Clark",
    address: "555 Birch St, Nowheretown, USA",
    items: "Product N",
    status: "Processing",
    OrderID: "463DSA972348",
    TotalAmount: 5100,
    date: "1/2/2024 3:00 AM",
  },
  {
    id: crypto.randomUUID(),
    customerName: "David Rodriguez",
    address: "666 Elm St, Anytown, USA",
    items: "Product R",
    status: "Processing",
    OrderID: "463GFDS72348",
    TotalAmount: 500,
    date: "15/3/2024",
  },
  {
    id: crypto.randomUUID(),
    customerName: "James Martinez",
    address: "777 Pine St, Somewhereville, USA",
    items: "Product V",
    status: "Processing",
    OrderID: "4FDSS72348",
    TotalAmount: 5450,
    date: "13/3/2024",
  },
];

export default orders;

// const orders = [
//   {
//     "_id": {
//       "$oid": "660c7da496ba42747e9de489"
//     },
//     "MenuList": [
//       {
//         "SectionName": "Soup",
//         "SectionOrder": 1,
//         "MenuItem": [
//           {
//             "MenuId": 1,
//             "Price": 100,
//             "Item": "Hot & Sour (Veg)",
//             "CategoryName": "",
//             "Type": "Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Hot & Sour (Veg).PNG",
//             "OfferHihglight": 0.2,
//             "OfferDescription": "20 % OFF",
//             "ContainerCharge": 10,
//             "Available": 10,
//             "isRecommendedItem": true,
//             "RecommendedImageUrl": "img/pics/Hot & Sour (Veg).PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a57"
//             }
//           },
//           {
//             "MenuId": 3,
//             "Price": 170,
//             "Item": "Hot & Sour (Mutton)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Hot & Sour (Mutton).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 0,
//             "isRecommendedItem": true,
//             "RecommendedImageUrl": "img/pics/Hot & Sour (Mutton).PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a58"
//             }
//           },
//           {
//             "MenuId": 4,
//             "Price": 110,
//             "Item": "Cream Of Tomato",
//             "CategoryName": "",
//             "Type": " Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Cream Of Tomato.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 0,
//             "isRecommendedItem": true,
//             "RecommendedImageUrl": "img/pics/Cream Of Tomato.PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a59"
//             }
//           },
//           {
//             "MenuId": 5,
//             "Price": 110,
//             "Item": "Cream Of Mushroom",
//             "CategoryName": "",
//             "Type": " Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Cream Of Mushroom.PNG",
//             "OfferHihglight": 0.5,
//             "OfferDescription": "50 % OFF",
//             "ContainerCharge": null,
//             "Available": 20,
//             "isRecommendedItem": true,
//             "RecommendedImageUrl": "img/pics/Cream Of Mushroom.PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a5a"
//             }
//           },
//           {
//             "MenuId": 6,
//             "Price": 110,
//             "Item": "Cream Of Veg",
//             "CategoryName": "",
//             "Type": " Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Cream Of Veg.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isRecommendedItem": true,
//             "RecommendedImageUrl": "img/pics/Cream Of Veg.PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a5b"
//             }
//           },
//           {
//             "MenuId": 7,
//             "Price": 120,
//             "Item": "Cream Of Chicken",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Cream Of Chicken.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isRecommendedItem": false,
//             "RecommendedImageUrl": "img/pics/Cream Of Chicken.PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a5c"
//             }
//           },
//           {
//             "MenuId": 8,
//             "Price": 100,
//             "Item": "Manchow (Veg)",
//             "CategoryName": "",
//             "Type": "Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Manchow (Veg).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isRecommendedItem": false,
//             "RecommendedImageUrl": "img/pics/Manchow (Veg).PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a5d"
//             }
//           },
//           {
//             "MenuId": 9,
//             "Price": 130,
//             "Item": "Manchow (Chicken)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Manchow (Chicken).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isRecommendedItem": false,
//             "RecommendedImageUrl": "String",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a5e"
//             }
//           },
//           {
//             "MenuId": 10,
//             "Price": 110,
//             "Item": "Clear (Veg)",
//             "CategoryName": "",
//             "Type": " Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Clear (Veg).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isRecommendedItem": false,
//             "RecommendedImageUrl": "String",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a5f"
//             }
//           },
//           {
//             "MenuId": 11,
//             "Price": 140,
//             "Item": "Clear (Chicken)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Clear (Chicken).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isRecommendedItem": true,
//             "RecommendedImageUrl": "img/pics/Clear (Chicken).PNG",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a60"
//             }
//           },
//           {
//             "MenuId": 12,
//             "Price": 160,
//             "Item": "Clear (Mutton)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Clear (Mutton).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isRecommendedItem": false,
//             "RecommendedImageUrl": "String",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a61"
//             }
//           },
//           {
//             "MenuId": 14,
//             "Price": 150,
//             "Item": "Lemon Coriander (Chicken)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Lemon Coriander (Chicken).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 0,
//             "isRecommendedItem": false,
//             "RecommendedImageUrl": "String",
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a62"
//             }
//           },
//           {
//             "MenuId": 16,
//             "Price": 120,
//             "Item": "Sweet Corn (Chicken)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Sweet Corn (Chicken).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a63"
//             }
//           }
//         ],
//         "_id": {
//           "$oid": "66164823bd4102f3b3461a56"
//         }
//       },
//       {
//         "SectionName": "Indian Veg Starter",
//         "SectionOrder": 3,
//         "MenuItem": [
//           {
//             "MenuId": 3,
//             "Price": 180,
//             "Item": "Gobi 65",
//             "CategoryName": "",
//             "Type": "Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Gobi 65.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a65"
//             }
//           },
//           {
//             "MenuId": 4,
//             "Price": 190,
//             "Item": "Paneer 65",
//             "CategoryName": "",
//             "Type": "Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Paneer 65.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a66"
//             }
//           },
//           {
//             "MenuId": 6,
//             "Price": 210,
//             "Item": "Paneer Tikka",
//             "CategoryName": "",
//             "Type": "Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Paneer Tikka.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a67"
//             }
//           },
//           {
//             "MenuId": 7,
//             "Price": 220,
//             "Item": "Achari Paneer Tikka",
//             "CategoryName": "",
//             "Type": "Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Achari Paneer Tikka.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a68"
//             }
//           }
//         ],
//         "_id": {
//           "$oid": "66164823bd4102f3b3461a64"
//         }
//       },
//       {
//         "SectionName": "Indian Non-Veg Starters",
//         "SectionOrder": 5,
//         "MenuItem": [
//           {
//             "MenuId": 1,
//             "Price": 250,
//             "Item": "Tandoori Chicken (Half)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Tandoori Chicken (Half).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a6a"
//             }
//           },
//           {
//             "MenuId": 5,
//             "Price": 260,
//             "Item": "Chicken Tikka",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Chicken Tikka.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a6b"
//             }
//           },
//           {
//             "MenuId": 7,
//             "Price": 270,
//             "Item": "Malai Kabab",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Malai Kabab.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a6c"
//             }
//           },
//           {
//             "MenuId": 11,
//             "Price": 140,
//             "Item": "Chicken 65 (Half)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Chicken 65 (Half).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a6d"
//             }
//           },
//           {
//             "MenuId": 12,
//             "Price": 250,
//             "Item": "Chicken 65 (Full)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Chicken 65 (Full).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a6e"
//             }
//           },
//           {
//             "MenuId": 13,
//             "Price": 240,
//             "Item": "Chicken Pepper Fry",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Chicken Pepper Fry.PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a6f"
//             }
//           }
//         ],
//         "_id": {
//           "$oid": "66164823bd4102f3b3461a69"
//         }
//       },
//       {
//         "SectionName": "Arabian Starter",
//         "SectionOrder": 6,
//         "MenuItem": [
//           {
//             "MenuId": 3,
//             "Price": 170,
//             "Item": "Alfaham Chicken (1 Pc)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Alfaham Chicken (1 Pc).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a71"
//             }
//           },
//           {
//             "MenuId": 6,
//             "Price": 170,
//             "Item": "Bbq Chicken (1 Pc)",
//             "CategoryName": "",
//             "Type": "Non Veg",
//             "Heighlightdescription": "",
//             "ImageUrl": "img/pics/Bbq Chicken (1 Pc).PNG",
//             "OfferHihglight": null,
//             "OfferDescription": "",
//             "ContainerCharge": null,
//             "Available": 10,
//             "isVisible": true,
//             "_id": {
//               "$oid": "66164823bd4102f3b3461a72"
//             }
//           }
//         ],
//         "_id": {
//           "$oid": "66164823bd4102f3b3461a70"
//         }
//       }
//     ],
//     "__v": 0
//   }
// ]
// export default orders;
