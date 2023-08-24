import {STAR_URL, CDN_URL} from "../utils/constants";

const RestCart = (props) => {

    const { resData } = props;
    const {name, cloudinaryImageId, avgRating, areaName, locality, cuisines } = resData.info;

    return(
        <div className="res_card">
            <div>
                <img src={CDN_URL+ cloudinaryImageId }/>
                <div className="cardcontaint">
                    <h2>{name}</h2>
                    <h3>
                      <img src={STAR_URL} style={ avgRating < 4 ? { background:'#ff6f00', color: 'white'} : {}}/>
                      {avgRating}
                      </h3>
                    {/* <address>{areaName + ", " + locality}</address> */}
                    <h4>{cuisines.join(", ")}</h4>
                    
                </div>
            </div>
        </div>
    );
}
export default RestCart;