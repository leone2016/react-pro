import {BrowserRouter, NavLink, Routes, Route, Navigate} from "react-router-dom";
import logo from '../logo.svg'
import {LazyPage1, LazyPage2, LazyPage3} from "../01-lazyload/pages";

export const Navigation = () => {

    const isActiveClass = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '';

    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo test"/>
                    <ul>
                        <li><NavLink to="/lazy1" className={isActiveClass}>Lazy 1</NavLink></li>
                        <li><NavLink to="/lazy2" className={isActiveClass}>Lazy 2</NavLink></li>
                        <li><NavLink to="/lazy3" className={isActiveClass}>Lazy 3</NavLink></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/lazy1" element={<LazyPage1/>}/>
                    <Route path="/lazy2" element={<LazyPage2/>}/>
                    <Route path="lazy3" element={<LazyPage3/>}/>
                    {/*replace: parametro que indica que no puede regresar*/}
                    <Route path="/*" element={<Navigate to={'lazy1'} replace/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
