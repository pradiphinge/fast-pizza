import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError();
  return (
    <>    
    <div>Something went Wrong!</div>
    <div>{error.data || error.message}</div>
    <button onClick={()=>navigate(-1)}>Click here to go back </button>
    </>
  )
}

export default ErrorPage