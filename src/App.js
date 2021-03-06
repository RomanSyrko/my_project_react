import {Navigate, Route, Routes} from "react-router-dom";
import {useEffect} from "react";

import {HomePage, MovieInfoPage, UserPage} from "./Pages";
import {MainLayout} from "./Layouts";
import './App.css';

function App() {
    //Theme (MainLayouts)
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.body.classList.add("dark")
        }
    }, []);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'home/details'} element={<MovieInfoPage/>}/>
                <Route path={'user'} element={<UserPage/>}/>
            </Route>
        </Routes>
    );
}


export default App;
