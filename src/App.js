import React from 'react';
import './App.css';
import Content from "./components/contents/Content";
import image1 from "./images/image1.png";
import image2 from "./images/logo2.avif";
import image3 from "./images/logo3.avif";
import image4 from "./images/logo4.avif";
let item1=[image1,"Web Developer","Lustre Tuff Glass","Kishan Bagh, Gwalior"
  ,"₹13,000 - ₹18,000 monthly","Any experience"
];
let item2=[image2,"Web Developer","Care Health Nurses Private Limited","Haibatpur, Ghaziabad","₹12,000 - ₹18,000 monthly",
  "Min.1Year"
];
let item3=[image3,"Web Developer","Darshan Home Nursing Service","Banashankari, Bengaluru/Bangalore","₹5,000 - ₹10,000 monthly",
  "Min. 3 Year"
];
let item4=[image4,"React Native Developer","Khelo T20","Mohali","₹40,000 - ₹70,000 monthly","Min. 3 Year"];
function App() {
  return (
    <div className="Box">
      <Content logo={item1[0]} title={item1[1]} title1={item1[2]} locate={item1[3]} price={item1[4]} exp={item1[5]}/>
      <Content logo={item2[0]} title={item2[1]} title1={item2[2]} locate={item2[3]} price={item2[4]} exp={item2[5]}/>
      <Content logo={item3[0]} title={item3[1]} title1={item3[2]} locate={item3[3]} price={item3[4]} exp={item3[5]}/>
      <Content logo={item4[0]} title={item4[1]} title1={item4[2]} locate={item4[3]} price={item4[4]} exp={item4[5]}/>
    </div>
  );
}

export default App;
