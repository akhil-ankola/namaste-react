import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const Restorants = () => {

  const[resdata, setresdata] = useState(null);
  const {resId} = useParams();
  console.log(resId);
  console.log(MENU_API+resId);

  useEffect( () => {
    fetchmenu();
  }, [] );

  const fetchmenu = async() => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresdata(json);
    // console.log(resdata);
  }

  if (resdata === null) return <Shimmer/>
  // console.log(resdata);
  const {name} = resdata?.data?.cards[0]?.card?.card?.info || {};
  const {itemCards} = resdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
  console.log(itemCards);

  return (
    <div className='restorant_menu'>
        <h2>{name}</h2>
        <h3 className='normalInfo'>Main items</h3>
        <address className='normalInfo'>Neew road, new country</address>
        <div className='border'></div>
        <h3>Menu</h3>
        <ul>
            { itemCards.map( item =>  <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100} </li>  ) }
        </ul>
        <address>New Road, New city-000000</address>
    </div>
  )
}

export default Restorants;
