import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import ErrorPage from "./ui/ErrorPage"
import Menu from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import Order from "./features/order/Order"
import Home from "./ui/Home"
import { loader as menuloader } from "./features/menu/Menu";
import { Suspense } from "react"
const browserRouter = createBrowserRouter([
  {
    element:<AppLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/menu",
        element: <Menu />,
        loader:menuloader,
        errorElement:<ErrorPage />
      },
      {
        path:"/cart",
        element:<Cart />,
        errorElement:<ErrorPage />
      },
      {
        path:"/order",
        element: <Suspense fallback="<div> Loading...</div>"><Order /></Suspense>,
        errorElement:<ErrorPage />
      },
      {
        path:"/order/:orderID",
        element:<Order />,
        errorElement:<ErrorPage />
      },
      {
        path:"/",
        element:<Home />,
        errorElement:<ErrorPage />
      }

    ]

  }
])
function App() {
  
  return (
    <RouterProvider router={browserRouter}> </RouterProvider>
  )
}

export default App
