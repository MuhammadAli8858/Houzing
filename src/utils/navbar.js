import useId from "../hooks/useid";
import HomePage from "../pages/Home";
import Properties from "../pages/Properties";

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic Sing In</h1>,
    title: "Sing In",
    path: "/singin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic Sing Up</h1>,
    title: "Sing Up",
    path: "/singup",
    private: false,
    hidden: true,
  },
];
