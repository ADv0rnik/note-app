import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATHS} from "./constants.js";
import Notes from "./pages/Notes/Notes.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

export default function App() {

  return (
    <>
        <Header/>
        <h3>My Notes</h3>
        <Routes>
            <Route exaxt path={`${PATHS.NOTES}`} element={<Notes />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}


