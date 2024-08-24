import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import BooksPage from './Components/Books/BooksPage';
import { Navigate } from 'react-router-dom'; 
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/books',
    element: isAuthenticated() ? <BooksPage /> : <Navigate to="/" />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
