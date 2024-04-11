import React from 'react'
import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';

function Menu() {
   const menu = useLoaderData()
    const menuUI = ()=>{
        
     return ( 
        <ul>{menu.map(item=> <li key={item.id}>
            {item.name}
        </li>)}</ul>
    )
    }
    return(menuUI())
  
}

export async function loader(){
    const menu = await getMenu();
    return menu;
}
export default Menu