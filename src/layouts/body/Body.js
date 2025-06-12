import React from "react"
import styles from "./body.module.scss"

import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Scene from "./pages/scene/Scene";
import Homepage from "./pages/homepage/Homepage";
import Introduce from "./pages/introduce/Introduce";
import Productions from "./pages/productions/Productions";
import Login from "./pages/login/Login";
import DetailPlanet from "./pages/productions/detail/DetailPlanet";

function Body() {
    return (
        <div className={styles.container}>
            <Routes>
                <Route path="/homepage" element={<Scene />} />
                <Route path="/about" element={<Introduce />} />
                <Route path="/universe" element={<Scene/>}/>
                <Route path="/productions">
                    <Route index element={<Productions />} />
                    <Route path=":planet" element={<DetailPlanet />} />
                </Route>

                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Homepage />} />
                {/* <Route path="/user/manage" element={<RequireAuth children={<Info />} />} />
                <Route path="/user/manage/favourite" element={<RequireAuth children={<Favourite/>} />}/>
                <Route path="/user/manage/order" element={<RequireAuth children={<Order />} />} /> */}
            </Routes>
        </div>
    );
}

export default Body;



function RequireAuth({ children }) {

    const location = useLocation();
    const [change, setChange] = useState(false)

    return !localStorage.getItem("accessToken") ? (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    ) : (
        children
    );
}   