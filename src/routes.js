import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Results from "./pages/Results";


const routes = [
  {
    path: '/',
    Element: Home,
  },
  {
    path: '/register',
    Element: Register,
  },
  {
    path: '/login',
    Element: Login,
  },
  {
    path: '/results',
    Element: Results,
  },
  {
    path: '/',
    Element: ProtectedRoute,
    children: [
      {
        path: '/admin',
        Element: Admin,
      }
    ]
  }
];

export { routes };