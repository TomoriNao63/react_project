import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import useAppSelector from "./store/userDataStore";
import { observer } from "mobx-react-lite";
function App() {
  return <div>{useAppSelector.auth}</div>;
}

export default observer(App);
