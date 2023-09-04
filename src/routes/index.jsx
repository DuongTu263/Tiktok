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
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/:nickname", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
