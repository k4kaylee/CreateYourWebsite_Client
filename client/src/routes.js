import Admin from "./pages/Admin";
import { ADMIN_ROUTE, BASKET_ROUTE, COURSE_ROUTE /*, LOGIN_ROUTE, REGISTRATION_ROUTE*/, MAIN_PAGE, SHOP_ROUTE, LOADINGROUTE } from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import CoursePage from "./pages/CoursePage";
import Loading from "./pages/Loading";
import LoginForm from "./components/LoginForm";
import MainPage from "./pages/MainPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
]

export const publicRoutes = [

  // {
  //   path: LOGIN_ROUTE,
  //   Component: Auth
  // },
  // {
  //   path: REGISTRATION_ROUTE,
  //   Component: Auth
  // },

  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: COURSE_ROUTE + '/:id',
    Component: CoursePage
  },
  {
    path: MAIN_PAGE,
    Component: MainPage
  },

]