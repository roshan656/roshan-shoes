import OrderFilds from "../Components/Common/OrderFilds";
import SinglePageProduct from "../Components/Common/SinglePageProduct";
import About from "../Page/About";
import ApiDataFatch from "../Page/ApiDataFatch";
import APIDataFatchPrectice from "../Page/APIDataFatchPrectice";
import Contect from "../Page/Contect";
import Dashboard from "../Page/Dashboard";
import Login from "../Page/Login";
import Menu from "../Page/Menu";
import Products from "../Page/Products";
import Recipe from "../Page/Recipe";
import Registers from "../Page/Registers";
import Woman from "../Page/Woman";
import AdminDashboard from "../Page/AdminDashboard";


export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Registers />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/man",
    element: <Products />,
  },
  {
    path: "/apiFatchData",
    element: <ApiDataFatch />,
  },
  {
    path: "/apiFatchDataPrectice",
    element: <APIDataFatchPrectice />,
  },
  { path: "/recipe", element: <Recipe /> },
  {
    path: "/order",
    element: <OrderFilds />,
  },
  {
    path: "/contact",
    element: <Contect />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  { path: "singlepage", element: <SinglePageProduct /> },
  {
    path: "woman",
    element: <Woman />,
  },
  {
    path: "adminDashboard",
    element: <AdminDashboard />,
  },
];
