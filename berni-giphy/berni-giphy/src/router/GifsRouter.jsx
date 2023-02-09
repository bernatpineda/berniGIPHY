import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { LoginButton } from "../Login";
import Home from "../pages/Home";

const GifsRouter = () => {
 return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<LoginButton/>}/>
        </Routes>
    </Router>
    </>
 );
}
export default GifsRouter;