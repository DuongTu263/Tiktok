import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "src/components/Icons";
import SuggestedAccounts from "src/components/SuggestedAccounts";
import config from "src/config";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="Dành cho bạn"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Đang Follow"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Khám phá"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestedAccounts label="Tài khoản đề xuất" />
      {/* <SuggestedAccounts label="Các tài khoản đang follow" /> */}
    </aside>
  );
}
export default Sidebar;
