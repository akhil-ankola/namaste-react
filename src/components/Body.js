import React, { useState } from "react";
import RestCart from "./RestCart";
import resList from "../utils/mokedata";

const Body = () => {

  const[showtoprated, setShowTopRated] = useState(false);
  const[pureveg, setPureVeg] = useState(false);
  const[listOfRestorant,setListOfRestorant]=useState(resList);

  const toprated = () => {
    //btn color
    if( showtoprated === false ){
      setShowTopRated(true);
    }
    else{
      setShowTopRated(false);
    }
    //filtering
    const filterList = resList.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestorant(filterList);
    // console.log(showtoprated);
    // if(showtoprated === true){
    //   const filterList = resList.filter(
    //     (res) => res.info.avgRating > 4
    //   );
    //   setListOfRestorant(filterList);
    // }
    // else{
    //   const filterList = resList
    // }
  }

  const purevegs = () => {
    if( pureveg === false ){
      setPureVeg(true);
      //filter
      const filterList = resList.filter(
        (res) => res.info.veg === true
      );
      setListOfRestorant(filterList);
    }
    else{
      setPureVeg(false);
      setListOfRestorant(resList);
    }
  }




  // const sortedlist = resList.sort( (a,b) => { return b.info.avgRating - a.info.avgRating} );
  // console.log(sortedlist);
  

    return(
        <div className="body">
            <div className="filter">
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
                  
                
                  listOfRestorant.map((restorant)=>{
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