
import "./App.css";

//Importing necessary components amd functions from the react-router-dom library for routing.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Main from "./Components/Home/Main";

function App() {
//mananges the routing configuration for the application.
const router = createBrowserRouter(
// creates routes from the elements passed to it.
createRoutesFromElements(
//defines a Route component that matches all paths "/" and renders the Main component.
//exact properties ensure that the route matches exactly what u gave in path
<Route path="/" element={<Main />} exact></Route>
)
);
return (
<div className="App">
{/* This ensures that the rounting functionallity is available throughout the application */}
<RouterProvider router={router} />
</div>
);
}

export default App;
