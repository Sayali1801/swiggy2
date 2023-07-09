import MenuCard from "./MenuCard";
import { useState, useEffect } from "react";
import "../styles/Menus.css";
import Shimar from "./Shimar";
// import loading from "../assets/loading.gif";
function Menus() {
  const [restoList, setRestoList] = useState([]);
  const [inputText, setInputText]=useState('');
  const [restoFilterData,setRestoFilterData]=useState([]);
  useEffect(() => {
    fetchedData()
  }, []);
const fetchedData=()=>{
  fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING`)
      .then((response) => response.json())
      .then((apiData) => {
        // console.log(apiData)
        setRestoList(apiData?.data?.cards[2]?.data?.data?.cards);
        setRestoFilterData(apiData?.data?.cards[2]?.data?.data?.cards)
        // console.log(apiData.data.cards[2].data.data.cards)
      });
}
if(restoList.length===0){
  return(
      <Shimar/>
      )
  }
  const filterData=()=>{
    const filterdData=restoList.filter((res)=>res.data.name.toLowerCase().includes(inputText.toLowerCase()))
    // setRestoList(filterdData);
    setRestoFilterData(filterdData)

  }
  return (
    <>        
      <div className="home-main">  
        <input type="search" 
        placeholder="Type  Here"
        value={inputText}
        onChange={((e)=>{
          // console.log(e.target.value)
          setInputText(e.target.value)
        }        
        )}
        />
        <button onClick={filterData}>Search</button>
        </div>
      <div className="menus">
              {restoFilterData.map((item)=>{
                return(
               <section>
              <MenuCard
                imageId={item.data.cloudinaryImageId}
                name={item.data.name}
                address={item.data.address}
                rating={item.data.avgRating}
                costForTwo={item.data.costForTwoString}
                delivery={item.data.deliveryTime}
              />
            </section> 
                )
              })}
      </div>
    </>
  );
}
export default Menus;
