import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/ancc-website",
    element: <Home />,
  },
  {
    name: "Information about Islam",
    path: "/",
    // element: <Profile />,
  },
  {
    name: "Resources",
    path: "/",
    // element: <SignIn />,
  },
  {
    name: "Donate",
    path: "/",
    // element: <SignUp />,
  },

];

export default routes;
