import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "src/components/Popper";

import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

const renderPreview = (props) => {
  return (
    <div tabIndex="-1" {...props}>
      <PopperWrapper>
        <AccountPreview />
      </PopperWrapper>
    </div>
  );
};

function AccountItem() {
  return (
    <div>
      <Tippy
        interactive
        offset={[40, 0]}
        delay={[800, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1664308201958401.jpeg?x-expires=1695286800&x-signature=a%2FVW%2BJ3xKJ0NQMaxFjS6dSbJWyY%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>anhtu263</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Duong Anh Tu</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
