import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setStateProgress] = useState(0)

  const setProgress = (progress) => {
    setStateProgress(progress);
  };

    return (
      <>
        <Router>
          <LoadingBar color="#f11946" height={3} progress={progress} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                  apiKey = {apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                  apiKey = {apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                  apiKey = {apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                  apiKey = {apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                  apiKey = {apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                  apiKey = {apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                  apiKey = {apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }

export default App;
