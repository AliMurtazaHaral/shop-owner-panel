import Dashboard from "layouts/dashboard";
import Tables from "layouts/addProducts";
import Billing from "layouts/viewProducts";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Reviews from "layouts/productSection/ReviewPage";
// @mui icons
import Icon from "@mui/material/Icon";
import ViewPendingOrders from "layouts/productSection/ViewPendingOrders";
import ViewUserReviews from "layouts/productSection/ViewUserReviews";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Add Product",
    key: "Add Product",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/addProduct",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "View Product",
    key: "View Product",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/viewProduct",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Pending Orders",
    key: "Pending Orders",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/pendingOrder",
    component: <ViewPendingOrders />,
  },
  {
    type: "collapse",
    name: "Reviews",
    key: "Reviews",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/reviews",
    component: <ViewUserReviews />,
  },

  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  { 
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  { 
    route: "/reviewPage",
    component: <Reviews />,
  },
];

export default routes;
