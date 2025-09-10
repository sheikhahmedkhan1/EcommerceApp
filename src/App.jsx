import "./assets/css/responsive.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Categories from "./Pages/Categories";
import Deals from "./Pages/Deals";
import Contact from "./Pages/Contact";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Detail from "./Pages/Detail";

import AppLayout from "./Components/AppLayout";


function App() {



  const query = new QueryClient();
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/shop", element: <Shop /> },
        { path: "/product/:id", element: <Detail /> },
        { path: "/categories", element: <Categories /> },
        { path: "/deals", element: <Deals /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
