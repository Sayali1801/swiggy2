import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Error from './component/Error';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      errorElement: <Error/>
    },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
  ])
  return (
    <div className="App">
          <Header/>
    <RouterProvider router={router}/>
          <Outlet/>
    </div>
  );
}

export default App;
