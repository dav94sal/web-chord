import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from '../components/Home';
import ArtistPage from '../components/ArtistPage';
import ManagePage from '../components/ManagePage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "explore",
            element: <Home />
          },
          {
            path: "newest-posts",
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
      }
    ],
  },
]);
