import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Cart from '../features/cart/Cart'

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    console.log(navigation);
    
  return (   
    <>
     {isLoading && <div className='loader'></div>}
    <header >
        Fast Pizza Co
    </header>
    <main>
        <Outlet />
    </main>
    <Cart />
    <footer>
        Copyright 2024 Pradipkumar Hinge
    </footer>
    </>
  )
}

export default AppLayout