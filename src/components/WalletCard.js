import React, { useState, useRef, useEffect } from "react";
import { ethers } from "ethers";
import mmLogo from "../assets/mm_logo.png";
import ethLogo from "../assets/eth_logo.png";
import rIcon from "../assets/r_icon.png";
import rink from "../assets/rink_logo.png";
import goerli from "../assets/goerli.png";
import kovan from "../assets/kovan.png";

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [networkName, setNetworkName] = useState("");
  const [reminder, setReminder] = useState("");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
      alert(errorMessage);
    }
    window.ethereum.request({ method: "net_version" }).then((chainID) => {
      chainID === "1"
        ? setNetworkName("Ethereum Main Network")
        : chainID === "3"
        ? setNetworkName("Ropsten Test Network")
        : chainID === "4"
        ? setNetworkName("Rinkeby Test Network")
        : chainID === "5"
        ? setNetworkName("Goerli Test Network")
        : chainID === "42"
        ? setNetworkName("Kovan Test Network")
        : setNetworkName("Network not found");
    });
  };

  setTimeout(() => {
    setReminder(
      "If unable to connect from button, please login thru the browser"
    );
  }, "4500");

  //  Account Change from Connected Wallet
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  // Get Account Balance
  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const disconnectWallet = () => {
    window.location.reload();
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  //  Listen for account change and disconnect
  window.ethereum.on("accountsChanged", chainChangedHandler);

  // Listen for chain change and disconnect
  window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <div className="master-container">
      <div className="card-container">
        <div className="image-container">
          <img
            className="img"
            src={
              networkName === "Ethereum Main Network" && defaultAccount
                ? ethLogo
                : networkName === "Ropsten Test Network" && defaultAccount
                ? rIcon
                : networkName === "Rinkeby Test Network" && defaultAccount
                ? rink
                : networkName === "Goerli Test Network" && defaultAccount
                ? goerli
                : networkName === "Kovan Test Network" && defaultAccount
                ? kovan
                : mmLogo
            }
            height={100}
            width={100}
          ></img>
        </div>

        <div className="card-text-container">
          <h1 className="card-title">
            {" "}
            {defaultAccount ? `${networkName}` : "MetaMask Wallet Connector"}
          </h1>

          <h2 className="card-text-balance">
            {userBalance ? `Balance: ${userBalance} ETH` : ""}
          </h2>

          <h4 className="card-text-address">
            {defaultAccount ? `Address: ${defaultAccount}` : ""}
          </h4>

          <p className="card-subtext">
            {defaultAccount
              ? `You are connected to the ${networkName}`
              : "Connect to view account details"}{" "}
          </p>

          <div className="btn-container">
            {defaultAccount ? (
              ""
            ) : (
              <button className="btn-connect" onClick={connectWalletHandler}>
                Connect Wallet
              </button>
            )}

            {defaultAccount ? (
              <button className="btn-disconnect" onClick={disconnectWallet}>
                Disconnect Wallet
              </button>
            ) : (
              ""
            )}
          </div>
          {defaultAccount ? "" : <p className="reminder-text">{reminder}</p>}
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
