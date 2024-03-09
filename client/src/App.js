import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element:<div>Root Router</div>
  },
  {
    path: '/register',
    element:<div>Register Route</div>
  }
])

function App() {
  return (
   <main>
    <RouterProvider router={router}></RouterProvider>
   </main>
  );
}

export default App;
