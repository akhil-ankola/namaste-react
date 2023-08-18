import React, { useState } from "react";
import RestCart from "./RestCart";
import resList from "../utils/mokedata";

const Body = () => {

  const[showtoprated, setShowTopRated] = useState(false);
  const toprated = () => {
    if( showtoprated === false ){
      setShowTopRated(true);
    }
    else
    setShowTopRated(false);
  }

    return(
        <div className="body">
            <div className="filter">
              <button 
                className="filter-btn" 
                onClick={toprated}
                style={ showtoprated === true ? { background:'#282c3f', color: 'white'} : {}}
                >Rated 4+</button>
            </div>
            <div className="res_container">
                {resList.map((restorant)=>{
                  return(
                    <RestCart key={restorant.info.id} resData={restorant}/>
                  );
                })}

            </div>
        </div>
    );
}
export default Body;