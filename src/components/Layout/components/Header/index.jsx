import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisVertical,
  faLightbulb,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faCircleHalfStroke,
  faCoins,
  faUser,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import routesConfig from "src/config/routes";
import { ReactComponent as Logo } from "src/assets/images/logo.svg";
import Button from "src/components/Button";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Menu from "src/components/Popper/Menu";
import Image from "src/components/Image";
import { MessageIcon, MailBoxIcon, LaptopIcon } from "src/components/Icons";
import Search from "src/components/Layout/components/Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLightbulb} />,
    title: "Trung tâm nhà sáng tạo LIVE",
    to: "/live",
  },
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
    title: "Chế độ tối",
  },
];

const CustomButton = forwardRef(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
});

function Header() {
  const currentUser = true;

  //handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Xem hồ sơ",
      to: "/@minhh",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Cài đặt",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Đăng xuất",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <Link to={routesConfig.home} className={cx("logo-link")}>
            <Logo />
          </Link>
        </div>
        <Search />

        <div className={cx("actions")}>
          <Button light leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Tải lên
          </Button>
          <div className={cx("dowloadContainer")}>
            <LaptopIcon />
          </div>

          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Tin nhắn">
                <CustomButton className={cx("action-btn")}>
                  <MessageIcon />
                </CustomButton>
              </Tippy>
              <Tippy delay={[0, 50]} content="Hộp thư">
                <CustomButton className={cx("action-btn")}>
                  <MailBoxIcon />
                  <span className={cx("badge")}>12</span>
                </CustomButton>
              </Tippy>
            </>
          ) : (
            <>
              <Button light leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image className={cx("user-avatar")} src="a" alt="Duong Anh Tu" />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
