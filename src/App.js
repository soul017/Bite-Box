import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestaurentMenu from "./components/ReatauraentMenu";
import Login from "./components/Login";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "../Redux/AppStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

// Main
const Applayout = () => {
  const [userName, setuserName] = useState();
  // dummy authentication
  useEffect(() => {
    // Make an api call and send user and password
    const data = {
      name: "Lokesh Sengar",
    };
    setuserName(data.name);
  }, []);
  return (
    <Provider store={AppStore}>
      {" "}
      <UserContext.Provider value={{ loggedInUser: userName, setuserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Routing
const applayout = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback="Loading....">
            <Grocery />{" "}
          </Suspense>
        ),
      },
      //This is dynamic route
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={applayout} />);
