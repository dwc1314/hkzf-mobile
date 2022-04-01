import React from "react";
import { Route, Routes, } from "react-router-dom";
import News from "../News";
export default class Home extends React.Component {
  render() {
    return (
    //   <div>
        <Routes>
          <Route path="/home/news" element={<News />} />
        </Routes>
    //   </div>
    );
  }
}
