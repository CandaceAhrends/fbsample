import React from "react";
import { AppCtx } from "../../../appContext";
import moment from "moment";
import "./header.scss";

const Header = () => {
  const { firstName } = React.useContext(AppCtx);
  const today = moment();
  return (
    <ul className="header">
      <li>
        <span>
          <h3>
            Good morning, {firstName} <i className="fas fa-info-circle"></i>
          </h3>
        </span>

        <span className="header-sub-text">
          {today.format("dddd, MMMM DD, YYYY")}
        </span>
      </li>
    </ul>
  );
};

export default Header;
