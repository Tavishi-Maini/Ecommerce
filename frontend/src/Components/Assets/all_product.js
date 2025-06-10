import holo1 from "./holo1.jpeg"
import holo2 from "./holo2.jpeg"
import holo3 from "./holo3.PNG"
import holo4 from "./holo4.PNG"
import holo5 from "./holo5.PNG"
import holo6 from "./holo6.PNG"
import flow1 from "./flow1.JPG"
import flow2 from "./flow2.PNG"
import flow3 from "./flow3.PNG"
import flow4 from "./flow4.PNG"
import flow5 from "./flow5.PNG"
import flow6 from "./flow6.jpeg"
import ice1 from "./ice1.jpeg"
import ice2 from "./ice2.JPG"
import ice3 from "./ice3.JPG"
import ice4 from "./ice4.JPG"
import ice5 from "./ice5.JPG"
import ice6 from "./ice6.JPG"
import jou1 from "./jou1.jpeg"
import jou2 from "./jou2.jpeg"
import jou3 from "./jou3.jpeg"
import jou4 from "./jou4.JPG"
import jou5 from "./jou5.JPG"
import jou6 from "./jou6.JPG"
import two1 from "./two1.jpeg"
import two2 from "./two2.JPG"
import two3 from "./two3.JPG"
import two4 from "./two4.JPG"
import two5 from "./two5.JPG"   
import two6 from "./two6.JPG"
import three1 from "./three1.jpeg"
import three2 from "./three2.JPG"
import three3 from "./three3.JPG"
import three4 from "./three4.JPG"
import three5 from "./three5.JPG"   
import three6 from "./three6.JPG"

let all_product=[
    {
        id: 1,
        name: "Pink-Purple Holographic Journal",
        category: "Holo",
        image: holo1,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 2,
        name: "Colourful Mermaid Scales Notebook",
        category: "Holo",
        image: holo2,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 3,
        name: "Holographic Flowers & Leaves Journal",
        category: "Holo",
        image: holo3,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 4,
        name: "Glittery Rainbow Galaxy Notebook",
        category: "Holo",
        image: holo4,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 5,
        name: "Holographic Mermaid Scales Journal",
        category:"Holo",
        image: holo5,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 6,
        name: "Rainbow Cloud Journal",
        category: "Holo",
        image: holo6,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 7,
        name: "White Flower Purple Journal",
        category: "Patt",
        image: flow1,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 8,
        name: "Golen and White Circles Baby Pink Journal",
        category: "Patt",
        image: flow2,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 9,
        name: "Colourful Polygon Notebook",
        category: "Patt",
        image: flow3,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 10,
        name: "Pink Purple Blue Clouds Journal",
        category: "Patt",
        image: flow4,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 11,
        name: "Creame Waves Journal",
        category: "Patt",
        image: flow5,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 12,
        name: "Mermaid Scales Pink Journal",
        category: "Patt",
        image: flow6,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 13,
        name: "Black T-shirt",
        category: "Patt",
        image: ice1,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 14,
        name: "Black T-shirt",
        category: "Patt",
        image: ice2,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 15,
        name: "Black T-shirt",
        category: "Patt",
        image: ice3,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 16,
        name: "Black T-shirt",
        category: "Std",
        image: ice4,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 17,
        name: "Black T-shirt",
        category: "Std",
        image: ice5,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 18,
        name: "Black T-shirt",
        category: "Std",
        image: ice6,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 19,
        name: "Black T-shirt",
        category: "Std",
        image: jou1,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 20,
        name: "Black T-shirt",
        category: "Std",
        image: jou2,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 21,
        name: "Black T-shirt",
        category: "Std",
        image: jou3,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 22,
        name: "Black T-shirt",
        category: "Std",
        image: jou4,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 23,
        name: "Black T-shirt",
        category: "Std",
        image: jou5,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 24,
        name: "Black T-shirt",
        category: "Std",
        image: jou6,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 25,
        name: "Black T-shirt",
        category: "Com2",
        image: two1,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 26,
        name: "Black T-shirt",
        category: "Com2",
        image: two2,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 27,
        name: "Black T-shirt",
        category: "Com2",
        image: two3,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 28,
        name: "Black T-shirt",
        category: "Com2",
        image: two4,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 29,
        name: "Black T-shirt",
        category: "Com2",
        image: two5,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 30,
        name: "Black T-shirt",
        category: "Com2",
        image: two6,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 31,
        name: "Black T-shirt",
        category: "Com3",
        image: three1,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 32,
        name: "Black T-shirt",
        category: "Com3",
        image: three2,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 33,
        name: "Black T-shirt",
        category: "Com3",
        image: three3,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 34,
        name: "Black T-shirt",
        category: "Com3",
        image: three4,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 35,
        name: "Black T-shirt",
        category: "Com3",
        image: three5,
        new_price: 20.99,
        old_price: 25.99,
    },
    {
        id: 36,
        name: "Black T-shirt",
        category: "Com3",
        image: three6,
        new_price: 20.99,
        old_price: 25.99,
    },
];

export default all_product;