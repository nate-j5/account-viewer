import React from "react";
import mmLogo from "../assets/mm_logo.png";
import { Link } from "react-router-dom";

const NoInstall = () => {
  return (
    <div>
      <div className="master-container-ni">
        <div className="wrapper-ni">
          <div className="content-container-ni">
            <img src={mmLogo} height={85} width={85}></img>
            <h3 className="h3-title-ni">MetaMask is not Detected</h3>
          </div>
          <div className="btn-container-ni">
            <Link className="link-ni" to="/">
              <button className="returnBtn-ni">Return Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoInstall;
