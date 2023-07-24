import "./app.css";
import React, { useEffect, useState } from "react";
import Tittlebar2 from "./compnents/tittlebar2";
import Tittlebar from "./compnents/tittlebar";
import Category from "./compnents/category";
import Slid from "./compnents/slid";
import Slider from "./compnents/sliders";
import Product from "./compnents/product";
import  laptop from "./image/laptop.webp";
import  shoes from "./image/shoes.webp";
import  Chair from "./image/chair.webp";
import  m from "./image/m.webp";
import  camra from "./image/camra.webp";
import  softtoy from "./image/softtoy.webp";
import  fr from "./image/fr.webp";
import  mobile from "./image/mobile.webp";
import  dresss1 from "./image/./fashion/dresss1.webp";
import  watch from "./image/./fashion/watch-men.webp";
import  jeans from "./image/./fashion/jeans.webp";
import  headphone from "./image/headphone.webp";
import  mouse from "./image/mouse.webp";
import  greentee from "./image/greentee.webp";
import  mentshirt from "./image/./fashion/men-tshirt.webp";
import  table from "./image/table.webp";
import  jewalary from "./image/jewalary.webp";
import  bed from "./image/bed.webp";
import  wotshirt from "./image/./fashion/t-shirt.webp";
import  sandal from "./image/sandal.webp";
import phone1 from "./image/phone1.webp";
import phone2 from "./image/phone4.webp";
import phone3 from "./image/phoneoopo3.webp";

import  phone4 from "./image/./fashion/applephone.webp";
import  phone5 from "./image/./fashion/phonerealme.webp";
import  phone6 from "./image/./fashion/redmiphone.webp";
import { Routes, Route } from "react-router-dom";
function App() {
   
    let arr=[

        {
           title:"Todays Best Deal"
        },
        {
           neme:  "Laptop",
           image1:laptop,
           dis1:10
        }   
        ,
        {
            name2:"Chair",
            image2:Chair,
            dis2:10
        },
      
      
        {
            name3:"Camra",
            image3:camra,
            dis3:30
        },
        {
            name4:"Shoes",
            image4:shoes,
            dis4:40
        },
       
        {
            name5 : "Monitor",
            image5: m,
            dis5:50
        },
        {
            name10:"Soft-Toys",
            image10:softtoy,
            dis10:80
        },
        {
            name7:"Fridge",
            image7:fr,
            dis7:60
        },
       
        {
            name8:"Dresses",
            image8:dresss1,
            dis8:60
        },
        {
            name9:"Mobile",
            image9:mobile,
            dis9:20
        },
        {
            name6:"Mens-Watch",
            image6:watch,
            dis6:40
        }
       
    ]

    let arr2=[

        {
           title:"Best of Seassion"
        },
        {
           neme:  "Jeans-Women",
           image1:jeans,
           dis1:20
        }   
        ,
        {
            name2:"HeadPhones",
            image2:headphone,
            dis2:10
        },
      
      
        {
            name10:"Grocery",
            image10:greentee,
            dis10:30
        },
        {
            name4:"Mouse",
            image4:mouse,
            dis4:40
        },
       
        {
            name5 : "Men-Tshirt",
            image5: mentshirt,
            dis5:50
        },
        {
            name6:"Table",
            image6:table,
            dis6:80
        },
        {
            name7:"Jewalary",
            image7:jewalary,
            dis7:60
        },
       
        {
            name8:"Bed",
            image8:bed,
            dis8:60
        },
        {
            name9:"Women-Tshirt",
            image9:wotshirt,
            dis9:20
        },
        {
            name3:"Women-Sandals",
            image3:sandal,
            dis3:40
        }
       
    ]
    let moabile=[
        {title:"Mobile",
         brand1:"Realme",
         brand2:"Oppo",
         brand3:"Redmi",
         brand4:"Apple",
         brand5:"Samsung"
        },
        {
            imagem1:phone1,
            title1:"SAMSUNG Galaxy F13(Waterfall Blue,128 GB",
            price1:"11,999",
            pricecut1:"14,999",
            dis1:38,
            rating1:4.3,
            li11:"4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
            li12:"16.76 cm (6.6 inch) Full HD+ Display",
            li13:"50MP + 5MP + 2MP | 8MP Front Camera",
            li14:"6000 mAh Lithium Ion Battery",
            li15:"Exynos 850 Processor"
        }
        ,
        {
            imagem2:phone2,
            title2:"vivo T2x 5G (Aurora Gold, 128 GB)  (8 GB RAM)",
            price2:"15,999",
            pricecut2:"20,999",
            dis2:30,
            rating2:4.1,
            li21:"8 GB RAM  128 GB ROM ",
            li22:"16.71 cm (6.6 inch) Full HD+ Display",
            li23:"50MP + 5MP + 2MP | 8MP Front Camera",
            li24:"5000 mAh Lithium Ion Battery",
            li25:"Dimensity 6020 Processor"
        }
        ,
        {
            imagem3:phone3,
            title3:"OPPO Reno8T 5G (Sunrise Gold, 128 GB)  (8 GB RAM)",
            price3:"29,999",
            pricecut3:"38,999",
            dis3:23,
            rating3:4.4,
            li31:"8 GB RAM  128 GB ROM ",
            li32:"17.02 cm (6.7 inch) Full HD+ Display",
            li33:"108MP + 2MP + 2MP | 32MP Front Camera",
            li34:"4800 mAh Lithium Ion Battery",
            li35:"Qualcomm Snapdragon 695 Processor"
        },
        {
            imagem4:phone4,
            title4:"APPLE iPhone 13 (Pink, 128 GB)",
            price4:"60,999",
            pricecut4:"69,999",
            dis4:12,
            rating4:4.7,
            li41:"8 GB ROM ",
            li42:"15.49 cm (6.1 inch) Super Retina XDR Display",
            li43:"12MP + 12MP | 12MP Front Camera",
            li44:"4800 mAh Lithium Ion Battery",
            li45:"A15 Bionic Chip Processor"
        },
        {
            imagem5:phone5,
            title5:"realme C30 (Denim Black, 32 GB)  (2 GB RAM)",
            price5:"5,999",
            pricecut5:"8,999",
            dis5:29,
            rating5:3.2,
            li51:"2 GB RAM | 32 GB ROM | Expandable Upto 1 TB ",
            li52:"16.51 cm (6.5 inch) HD+ Display",
            li53:"8MP Rear Camera | 5MP Front Camera",
            li54:"5000 mAh Lithium Ion Battery",
            li55:"Unisoc T612 Processor"
        },
        {
            imagem6:phone6,
            title6:"REDMI Note 10 Pro Max (Dark Nebula, 128 GB)  (6 GB RAM)",
            price6:"19,999",
            pricecut6:"22,999",
            dis6:13,
            rating6:3.8,
            li61:"6 GB RAM | 32 GB ROM | Expandable Upto 1 TB ",
            li62:"16.94 cm (6.5 inch) HD+ Display",
            li63:"108MP Rear Camera | 16MP Front Camera",
            li64:"5020 mAh Lithium Ion Battery",
            li65:"Qualcomm Snapdragon 732G Processo"
        }
    ]
    var [windowwidth,setwindowwidth]=useState(window.innerWidth);
     const fun=()=>{
        setwindowwidth(window.innerWidth);
     }
    useEffect(() => {
        // function handleResize() {
        //   setwindowwidth(windowwidth);
        // }
        
        window.addEventListener('resize', fun);
        return () => window.removeEventListener('resize', fun);
      }, []);
    return (   <div>
        {windowwidth>576?<Tittlebar/>:<Tittlebar2/>}
        <Routes>
            <Route path="/" element={<><Category>   
        </Category>
        <Slid  ></Slid>
        <Slider   {...arr[0]} {...arr[1]}  {...arr[2]} {...arr[3]}  {...arr[4]}  {...arr[5]}  {...arr[6]}  {...arr[7]}  {...arr[8]}  {...arr[9]}  {...arr[10]}
        ></Slider>
        <Slider {...arr2[0]} {...arr2[1]}  {...arr2[2]} {...arr2[3]}
        {...arr2[4]}
        {...arr2[5]}
        {...arr2[6]}  {...arr2[7]}  {...arr2[8]}  {...arr2[9]}  {...arr2[10]}></Slider>
          <Slider {...arr2[0]} {...arr2[1]}  {...arr2[2]} {...arr2[3]}
        {...arr2[4]}
        {...arr2[5]}
        {...arr2[6]}  {...arr2[7]}  {...arr2[8]}  {...arr2[9]}  {...arr2[10]}></Slider></>}/>

        <Route path="/about" element={<><Product{...moabile[0]} {...moabile[1]} {...moabile[2]} {...moabile[3]} {...moabile[4]} {...moabile[5]} {...moabile[6]}></Product></>} ></Route>
        <Route path="/laptop" element={<><h1>gvghvhhvh</h1></>} ></Route>
        <Route  path="/about/:name" element={<><product {...moabile[1]} {...moabile[2]} {...moabile[3]} {...moabile[4]} {...moabile[5]} {...moabile[6]} ></product></>}></Route>
        </Routes>
        
    </div>);
}
export default App;