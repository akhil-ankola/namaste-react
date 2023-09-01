import React, { useEffect, useState } from "react";
import RestCart from "./RestCart";
import Loading from "./Loading";
import Shimmer from "./Shimmer";
// import resList from "../utils/mokedata";

const Body = () => {

  const[showtoprated, setShowTopRated] = useState(false);
  const[pureveg, setPureVeg] = useState(false);
  const[listOfRestorant,setListOfRestorant]=useState([]);
  const[filteredRestoreant, setfilteredRestoreant] = useState([]);
  //search
  const[searchval, setsearchval]=useState();

  useEffect( () => {
    fetchdata();
  } , [] );

  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.341447&lng=73.176968&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    console.log(data.status)

    // setListOfRestorant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestorant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestoreant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  

  const toprated = () => {
    //btn color
    if( showtoprated === false ){
      setShowTopRated(true);
    }
    else{
      setShowTopRated(false);
    }
    //filtering
    // const filterList = resList.filter(
    //   (res) => res.info.avgRating > 4
    // );
    
    // setListOfRestorant(filterList);


    // console.log(showtoprated);
    if(showtoprated === true){
      const filterList = listOfRestorant.filter(
        (res) => res.info.avgRating > 4
      );
      setListOfRestorant(filterList);
    }
    else{
      const filterList = listOfRestorant
    }
  }

  const purevegs = () => {
    // if( pureveg === false ){
    //   setPureVeg(true);
    //   //filter
    //   const filterList = resList.filter(
    //     (res) => res.info.veg === true
    //   );
    //   setListOfRestorant(filterList);
    // }
    // else{
    //   setPureVeg(false);
    //   setListOfRestorant(resList);
    // }
  }

  // if(listOfRestorant.length === 0){
  //   return <Shimmer/>
  // }


  // const sortedlist = resList.sort( (a,b) => { return b.info.avgRating - a.info.avgRating} );
  // console.log(sortedlist);

    return listOfRestorant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
              <div className="search">
                
                {/* work only for single search because we direclty change on main array */}
                <input type="text" value={searchval} onChange={ (e)=>{setsearchval(e.target.value)} }></input>
                <button onClick={ () => {
                  const filterRestorant = listOfRestorant.filter( 
                    (res)=> res.info.name.toLowerCase().includes(searchval.toLowerCase()) )
                    setfilteredRestoreant(filterRestorant);
                  } }>Search</button>

              </div>
              <button 
                className="filter-btn" 
                onClick={toprated}
                style={ showtoprated === true ? { background:'#282c3f', color: 'white'} : {}}
                >Rated 4+</button>
              <button 
                className="filter-btn" 
                onClick={purevegs}
                style={ pureveg === true ? { background:'#282c3f', color: 'white'} : {}}
                >Pure Veg</button>
                
            </div>
            <div className="res_container">
                {
                  
                
                  filteredRestoreant.map((restorant)=>{
                  return(
                    <RestCart key={restorant.info.id} resData={restorant}/>
                  );
                })
                
                
                }
            </div>
        </div>
    );
}
export default Body;