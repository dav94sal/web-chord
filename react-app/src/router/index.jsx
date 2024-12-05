import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Home from '../components/Home/Home';
import ArtistPage from '../components/ArtistPage/ArtistPage';
import ManagePage from '../components/ManagePage/ManagePage';
import MerchPage from '../components/ArtistPage/MerchPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "/artists/:artistId",
        children: [
          {
            index: true,
            element: <ArtistPage />
          },
          {
            path: "merch",
            element: <MerchPage />
          }
        ]
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
