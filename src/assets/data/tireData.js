// Import all images from the assets/images directory (assuming they represent tire models)
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const tireData = [
  {
    id: 1,
    name: "Cooper",
    model: "Performance Tire",
    price: 0.0,
    sizes: [    
      "215/50R17",
      "225/65R16",
      "245/55R19",
      "255/55R18",
      "255/65R18",
      "265/65R18",
      "265/70R18",
      "275/55R20",
      "275/60R20",
      "LT 235/85R16",
      "LT 275/65R17",
      "LT 275/65R18",
      "LT 275/70R18",
      "LT 315/70R17"],
    imgUrl: img01,
  },

  {
    id: 2,
    name: "Dunloop ",
    model: "Touring Tire",
    price: 0.00,
    sizes: ["225/95R16 C"],
    imgUrl: img02,
  },

  {
    id: 3,
    name: "Falken",
    model: "All-Season Tire",
    price: 0.00,
    sizes: ["275/65R17"],
    imgUrl: img03,
  },

  {
    id: 4,
    name: "General",
    model: "Ultra High Performance Tire",
    price: 0.00,
    sizes: [
      "205/60R15",
      "225/45R17",
      "225/45ZR18",
      "225/50R17",
      "235/35R19",
      "245/45R17",
      "245/45R18",
      "245/45R20",
      "255R18",
      "255/35R20",
      "255/40R19",
      "255/60R19",
      "255/70R15",
      "265/50R19",
      "265/65R18",
      "265/70R16",
      "275/45R19",
      "275/45ZR19",
      "285/45R19",
      "285/45R22",
      "LT 295/70R17",
      "P245/70R70",
      "P265/70R17"
    ],
    imgUrl: img04,
  },

  {
    id: 5,
    name: "Good Year",
    model: "Performance Tire",
    price: 0.00,
    sizes: [
      "205/60R16",
      "255/50R21",
      "255/60R20",
    ],
    imgUrl: img05,
  },

  {
    id: 6,
    name: "Hankook",
    model: "Ultra High Performance Tire",
    price: 0.00,
    sizes: [
    "6.50*R16C",
    "55/50R19",
    "205/45R17",
    "205/65R16C",
    "215/45ZR17",
    "215/65R15",
    "215/35ZR19",
    "225/45R19",
    "225/50R16",
    "225/55R17",
    "225/60R17",
    "225/75R16",
    "235/45ZR20",
    "235/50R19",
    "235/55R19",
    "235/75R15",
    "245/40ZR18",
    "245/45CR17",
    "245/45R19",
    "245/50R18",
    "255/35ZR20",
    "255/40ZR19",
    "255/50R19",
    "255/70R15",
    "265/40R18",
    "265/40ZR18",
    "265/50R20",
    "265/55ZR18",
    "265/70R15",
    "275/30ZR19",
    "275/35R18",
    "275/40R20",
    "275/45ZR19",
    "275/45R20",
    "275/50CR20",
    "275/50R20",
    "275/55R20",
    "275/60R16",
    "285/35CR19",
    "285/35ZR19",
    "285/45R22",
    "285/60R18",
    "285/65R17",
    "295/30CR22",
    "295/30ZR20",
    "295/40CR19",
    "295/40R20",
    "LT 215/85R16",
    "LT 285/75R16",
    "P225/75R16",
    "P235/55R19"
    ],
    imgUrl: img06,
  },

  {
    id: 7,
    name: "Laufenn",
    model: "Track & Competition Tire",
    price: 0.00,
    sizes: [
      "235/55R17",
      "245/45R19",
      "245/45ZR19",
      "275/65R18"
    ],
    imgUrl: img07,
  },

  {
    id: 8,
    name: "Michelin",
    model: "Ultra High Performance Tire",
    price: 0.00,
    sizes: [
      "55/50CR19",
      "235/35ZR19",

    ],
    imgUrl: img08,
  },
  {
    id: 9,
    name: "Vredestein",
    model: "Ultra High Performance Tire",
    price: 0.00,
    sizes: [
      "55/50CR19",
      "235/35ZR19",
      "245/35CR19",
      "245/35ZR20",
      "245/45ZR20",
      "255/45ZR19",
      "255/50CR19",
      "255/50ZR19",
      "255/50ZR20"
    ],
    imgUrl: img08,
  },  
];

export default tireData;
