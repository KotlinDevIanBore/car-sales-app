const CARS = [
  {
    id:"1",
    name: "LandRover Discovery",
    image: [
      {URL: require("./car-pictures/discovery-front.jpg")},
      {URL: require("./car-pictures/discovery-fronty.jpg")},
      {URL:require("./car-pictures/discovery3.jpg")},
      {URL:require("./car-pictures/discovery4.jpg")},
      {URL:require("./car-pictures/discovery5.jpg")},
      {URL:require("./car-pictures/discovery6.jpg")},
      {URL:require("./car-pictures/discovery7.jpg")},
      {URL:require("./car-pictures/discovery8.jpg")},
      {URL:require("./car-pictures/discovery9.jpg")},
      {URL:require("./car-pictures/discovery10.jpg")},
    ],
    price: "ksh 5000000",
  },
  { 
    id:"2",

    name: "Toyota crown",
    image: [
      {URL: require("./car-pictures/Toyota-Crown.jpg")},
      {URL: require("./car-pictures/crown2.jpg")},
      {URL: require("./car-pictures/crown3.jpg")},
      {URL: require("./car-pictures/crown4.jpg")},
      {URL: require("./car-pictures/crown5.jpg")},
      {URL: require("./car-pictures/crown6.jpg")},
      {URL: require("./car-pictures/crown7.jpg")},
      {URL: require("./car-pictures/crown8.jpg")},
      {URL: require("./car-pictures/crown9.jpg")},
      {URL: require("./car-pictures/crown10.jpg")},
    ],
    price: "ksh 1999999",
  },
  {
    id:"3",

    name: "Audi q7",
    image: [
      { URL: require("./car-pictures/q7-image.jpeg") },
      { URL: require("./car-pictures/audi2.jpeg") },
      { URL: require("./car-pictures/audi3.jpeg") },
      { URL: require("./car-pictures/audi4.jpeg") },
      { URL: require("./car-pictures/audi5.jpeg") },
      { URL: require("./car-pictures/audi6.jpeg") },
      { URL: require("./car-pictures/audi7.jpeg") },
      { URL: require("./car-pictures/audi8.jpeg") },
      { URL: require("./car-pictures/audi9.jpeg") },
      { URL: require("./car-pictures/audi10.jpeg") },
    ],
    price: "ksh 5000000",
  },

  {
    id:"4",

    name: "LandCruiser Prado",
    image: [
      { URL: require("./car-pictures/prado-image.jpg") },
      { URL: require("./car-pictures/prado2.jpg") },
      { URL: require("./car-pictures/prado3.jpg") },
      { URL: require("./car-pictures/prado4.jpg") },
      { URL: require("./car-pictures/prado5.jpg") },
      { URL: require("./car-pictures/prado6.jpg") },
      { URL: require("./car-pictures/prado7.jpg") },
      { URL: require("./car-pictures/prado8.jpg") },
      { URL: require("./car-pictures/prado9.jpg") },
      { URL: require("./car-pictures/prado10.jpg") },
    ],
    price: "ksh 5000000",
  },

  {
    id:"5",

    name: "Lexus RX 450h",
    image: [
      { URL: require("./car-pictures/rx-image.jpeg") },
      { URL: require("./car-pictures/RX2.jpeg") },
      { URL: require("./car-pictures/RX3.jpeg") },
      { URL: require("./car-pictures/RX4.jpeg") },
      { URL: require("./car-pictures/RX5.jpeg") },
      { URL: require("./car-pictures/RX6.jpeg") },
      { URL: require("./car-pictures/RX7.jpeg") },
      { URL: require("./car-pictures/RX8.jpeg") },
      { URL: require("./car-pictures/RX9.jpeg") },
      { URL: require("./car-pictures/RX10.jpeg") },
    ],
    price: "ksh 5000000",
  },
  {
    id:"6",

    name: "Range rover Evoque",
    image: [
      { URL: require("./car-pictures/evoque-image.jpg") },
      { URL: require("./car-pictures/evoque2.jpg") },
      { URL: require("./car-pictures/evoque3.jpg") },
      { URL: require("./car-pictures/evoque4.jpg") },
      { URL: require("./car-pictures/evoque5.jpg") },
      { URL: require("./car-pictures/evoque6.jpg") },
      { URL: require("./car-pictures/evoque7.jpg") },
      { URL: require("./car-pictures/evoque8.jpg") },
      { URL: require("./car-pictures/evoque9.jpg") },
      { URL: require("./car-pictures/evoque10.jpg") },
    ],
    price: "ksh 5000000",
  },
  {
    id:"7",

    name: "Mercedes E350",
    image: [
      { URL: require("./car-pictures/e350-image.jpg") },
      { URL: require("./car-pictures/e3502.jpg") },
      { URL: require("./car-pictures/e3503.jpg") },
      { URL: require("./car-pictures/e3504.jpg") },
      { URL: require("./car-pictures/e3505.jpg") },
      { URL: require("./car-pictures/e3506.jpg") },
      { URL: require("./car-pictures/e3507.jpg") },
      { URL: require("./car-pictures/e3508.jpg") },
      { URL: require("./car-pictures/e3509.jpg") },
      { URL: require("./car-pictures/e35010.jpg") },
    ],
    price: "ksh 5000000",
  },
  {
    id:"8",

    name: "Axela",
    image: [
      { URL: require("./car-pictures/axela-image.jpg") },
      { URL: require("./car-pictures/axela2.jpg") },
      { URL: require("./car-pictures/axela3.jpg") },
      { URL: require("./car-pictures/axela4.jpg") },
      { URL: require("./car-pictures/axela5.jpg") },
      { URL: require("./car-pictures/axela6.jpg") },
      { URL: require("./car-pictures/axela7.jpg") },
      { URL: require("./car-pictures/axela8.jpg") },
      { URL: require("./car-pictures/axela9.jpg") },
      { URL: require("./car-pictures/axela10.jpg") },
    ],
    price: "ksh 5000000",
  },
  {
    id:"9",

    name: "Forester",
    image: [
      { URL: require("./car-pictures/forester.jpg") },
      { URL: require("./car-pictures/forester2.jpg") },
      { URL: require("./car-pictures/forester3.jpg") },
      { URL: require("./car-pictures/forester4.jpg") },
      { URL: require("./car-pictures/forester5.jpg") },
      { URL: require("./car-pictures/forester6.jpg") },
      { URL: require("./car-pictures/forester7.jpg") },
      { URL: require("./car-pictures/forester8.jpg") },
      { URL: require("./car-pictures/forester9.jpg") },
      { URL: require("./car-pictures/forester10.jpg") },
    ],
    price: "ksh 1999999",
  },
  
];

export default CARS;
