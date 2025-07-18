import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../components/Home';
import ArtistPage from '../components/ArtistPage';
import ManagePage from '../components/ManagePage';
import NotFound from '../components/handlers/NotFound';
import Error from '../components/handlers/Error';
import Redirect from '../components/handlers/Redirect';

export const routes = [
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Redirect />
          },
          {
            path: "feed",
            element: <Home />
          },
          {
            path: "popular",
            element: <Home />
          },
          {
            path: "explore",
            element: <Home />
          },
          {
            path: "*",
            element: <Redirect />
          },
        ]
      },
      {
        path: "/artists/:artistId",
        element: <ArtistPage />
      },
      {
        path: "/manage-tours",
        element: <ManagePage />,
      },
      {
        path: "/manage-merch",
        element: <ManagePage />,
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ],
  },
];

export const router = createBrowserRouter(routes);
