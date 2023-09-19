import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./AccountPreview.module.scss";
import Button from "src/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview(params) {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1664308201958401.jpeg?x-expires=1695286800&x-signature=a%2FVW%2BJ3xKJ0NQMaxFjS6dSbJWyY%3D"
          alt=""
        />
        <div>
          <Button className={cx("follow-btn")} pink small>
            Follow
          </Button>
        </div>
      </header>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>anhtu263</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Duong Anh Tu</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {};

export default AccountPreview;
