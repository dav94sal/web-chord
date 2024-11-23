import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import ArtistPage from '../components/ArtistPage/ArtistPage';
import Layout from './Layout';
import Home from '../components/Home/Home';

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
        path: "/artists",
        children: [
          {
            path: ":artistId",
            element: <ArtistPage />
          }
        ]
      }
    ],
  },
]);
