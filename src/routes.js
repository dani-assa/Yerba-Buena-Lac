import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
// import DetailGame from "./views/DetailGame";

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