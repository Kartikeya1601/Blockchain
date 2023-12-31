import "./App.css";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import {useNavigate} from "react-router-dom";
import StateContext from "./StateContext";
import MetaMaskSDK from '@metamask/sdk';

function App() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const {account,setAccount, isWalletConnected,setWalletConnected}=useContext(StateContext)
  const navigate=useNavigate();
  async function connectToWallet() {
    const { ethereum } = window.ethereum;
    if (!ethereum) {
      alert("please install metamask first to use our website");
    } else {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      alert("Successfully connected to wallet")
      setWalletConnected(true)
      console.log("account: "+accounts[0])
      navigate("/sendMessage")
    }
  }
 
  {
    /* <button class="button-64" role="button">
  <span class="text">Button 64</span>
</button>; */
  }
  return (
    <div id="ConnectionPage">
          <div id="introMsg">
            Want to Exchange Message Securely?
            <br />
            Then Start by clicking connect below
          </div>
          <button class="button-64" role="button" onClick={connectToWallet}>
            <span class="text">Connect</span>
          </button>
    </div>
  );
}

export default App;
