import * as React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import StorageIcon from "@mui/icons-material/Storage";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./navbar.css";

function Navbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
            className="logo"
            src="https://i.ibb.co/WxgK00c/eylg-removebg-preview.png"
            alt="Logo"
          />
          <div className="topbarIconsContainer leftIconsNav">
            <EngineeringIcon className="uiIcon" /> Maintenance
          </div>
          <div
            className="topbarIconsContainer leftIconsNav"
            id="climatContainer"
          >
            <AcUnitIcon className="uiIcon" /> Climat
          </div>
          <div className="topbarIconsContainer leftIconsNav adminStock">
            <StorageIcon className="uiIcon" /> Stock
          </div>
          <div className="topbarIconsContainer leftIconsNav">
            <DirectionsCarFilledIcon className="uiIcon" /> Parking
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer rightIcons">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer rightIcons">
            <Language />
          </div>
          <div className="topbarIconsContainer rightIcons">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
