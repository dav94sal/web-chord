import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../components/Home';
import ArtistPage from '../components/ArtistPage';
import ManagePage from '../components/ManagePage';
import NotFound from '../components/NotFound/';
import Error from '../components/Error/';

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
            element: <Home />
          },
          {
            path: "newest-posts",
            element: <Home />
          },
          {
            path: "explore",
            element: <Home />
          },
          {
            path: "all-posts",
            element: <Home />
          }
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
