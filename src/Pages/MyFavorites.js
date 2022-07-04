import { useEffect, useState } from 'react';
import CharacterCard from '../Components/CharacterCard';
import { fetchData } from '../Utils/fetchData';


function MyFavorites() {
  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    console.log(favorites);
    favorites.map(id => {
      const { data } = fetchData({ id });
      return console.log(data);
    })
  }, []);


  return (
    <div>MyFavorites</div>

  )
}

export default MyFavorites