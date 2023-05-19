import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./templates/signin";
import MoodPage from "./templates/moodpage";
import MoodRating from "./templates/moodrating";
import MoodReason from "./templates/moodreason";
import MoodOptions from "./templates/moodoptions";
import Navbar from "./templates/navbar";
import Linegraph from "./templates/linegraph";
import App1 from './templates/connectpage';
// import Graphpage from "./templates/graphpage";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<SignInPage title="Sutherland" />} />
        <Route
          path="/moodpage"
          element={<MoodPage/>}
        />
        <Route
          path="/moodoptions"
          element={<MoodOptions />}
        />
        <Route
          path="/moodrating"
          element={
              <MoodRating/>
          }
        />
        <Route
          path="/moodreason"
          element={
            <MoodReason/>
          }
          />
          <Route
          path="/linegraph"
          element={
            <Linegraph/>
          }
        />
        <Route
          path="/connectpage"
          element={
            <App1/>
          }
        />
      </Routes>
    </>
  );
}

export default App;
