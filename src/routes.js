import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
// import Register from "./views/Register";
// import DetailGame from "./views/DetailGame";

const routes = [
  {
    path: '/',
    Element: Home,
  },
  // {
  //   path: '/register',
  //   Element: Register,
  // },
  {
    path: '/admin',
    Element: Admin,
  },
  {
    path: '/login',
    Element: Login,
  },
  // {
  //   path: '/detailgame/:id',
  //   Element: DetailGame,
  // }
];

export { routes };