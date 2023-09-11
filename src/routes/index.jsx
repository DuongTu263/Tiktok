import routesConfig from "src/config/routes";

//Layouts
import { HeaderOnly } from "src/components/Layout";

//Pages
import Home from "src/pages/Home";
import Following from "src/pages/Following";
import Profile from "src/pages/Profile";
import Upload from "src/pages/Upload";
import Search from "src/pages/Search";
//Public routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
