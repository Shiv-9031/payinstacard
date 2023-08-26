import React, { useEffect } from "react";

import "./Home.css";

import { Layout } from "../../component/Layout";

export const Home = () => {
  return (
    <Layout>
      <span>
        <h1>
          Github Link for this project :
          <a
            href="https://github.com/Shiv-9031/payinstacard/tree/master"
            target="_blank"
            rel="noreferrer"
          >
            click here
          </a>{" "}
        </h1>
      </span>
    </Layout>
  );
};
