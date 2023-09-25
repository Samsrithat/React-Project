import Dress from "./Dress";
import DressList from "../utils/mockData";
import { useState, useEffect } from "react";
import { IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9 } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
   
 const [ListofDresses, setListofDresses] = useState(DressList);  

const [searchText, setsearchText] = useState("");

  
//  useEffect(() => {
//     fetchData();
//  }, [])

//  const fetchData = async () => {
//     const data = await fetch();
 
// const json = await data.json();
// };
 
 return DressList.length === 0 ? <Shimmer/> : (
        <div className = "body">
            <div className = "filter">
                <div className="search">
                    <input type = "text" className="search-box" value = {searchText}/>
                    <button className="search-btn" onClick={() => {
                        //filtering the restaurant cards and update the UI

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                   const CustChoiceList = ListofDresses.filter(
                        (dress) => dress.rating >= 4.5
                    );
                    setListofDresses(CustChoiceList);
                    console.log(CustChoiceList);
                }}
                >
                    Customer's Choice</button>
                <button className="filter-btn" onClick={() => {
                    const Christmas = ListofDresses.filter(
                        (dress) => dress.color == 'red'
                    );
                    setListofDresses(Christmas);
                    console.log(Christmas);
                }}
                >
                    Christmas Special</button>
                 <button className="filter-btn" onClick={() => {
                    const Lowest = ListofDresses.filter(
                        (dress) => dress.price <= 20
                    );
                    setListofDresses(Lowest);
                    console.log(Lowest);
                }}
                >
                    Lowest Price</button>
            </div>
            <div className = "dress">
               {DressList.map((dress) => (
                <Dress key={dress.id} DressData={dress} />
               ))}
            </div>

        </div>
    );
};

export default Body;