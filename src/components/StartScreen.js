import React from "react";
import mmLogo from "../assets/mm_logo.png";

const handleClick = () => {
  if (window.ethereum) {
    window.location.href = "/wallet";
  } else {
    window.location.href = "/noinstall";
  }
};

const StartScreen = () => {
  return (
    <div>
      <div className="master-container-ss">
        <div className="wrapper-ss">
          <div className="content-container-ss">
            <img src={mmLogo} height={85} width={85}></img>
            <h3 className="h3-title-ss">
              Please Install MetaMask before using this app
            </h3>
          </div>
          <div className="btn-container-ss">
            <button className="confirmBtn-ss" onClick={handleClick}>
              MetaMask is Installed
            </button>
          </div>
          <a
            className="link-ss"
            href="https://metamask.io/download/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Begin Installation
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
