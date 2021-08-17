import React from "react";
import "./css/Test.css";
import logo from "./images/logo.svg";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Test = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MessengerCustomerChat
        pageId="104623278386310"
        appId="3142755355947250"
      />
    </div>
  );
};

export default Test;
