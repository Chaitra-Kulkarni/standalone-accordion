import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Accordion from "./pages/Accordion";
import LoadMore from "./pages/LoadMore";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Root from "./components/Root";
import Posts from "./pages/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/accordion",
        element: <Accordion />
      },
      {
        path: "/load-more",
        element: <LoadMore />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/posts",
        element: <Posts />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
