import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Home from '../components/Home';
import ArtistPage from '../components/ArtistPage';
import ManagePage from '../components/ManagePage';
import MerchPage from '../components/MerchPage';

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
