import { Component, useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

import '../css/Home.css';
import '../css/styles.css';
import homeBg from '../../img/frame2.png';

const Home = () => {

    const [XPosition, setXPosition] = useState(0);
    const [YPosition, setYPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        function handleMouseMove(e) {
            const speed = 3;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerWidth - e.pageY * speed) / 100;
            setXPosition(x);
            setYPosition(y);
        }
    }, [])

    return(
        <div className="home-bg">
            <img className="home-img" src={homeBg} id="homeBg"
                style={{
                    transform: `translateX(${XPosition}px) translateY(${YPosition}px)`,
                }}
            ></img>
            <div className="content">
                <h1 className="title">
                Виртуальные лабораторные работы<br/>
                по физике
                </h1>
                <NavLink className="sign sign-in"
                to="/authorization/">
                    <div className="btn sign-in-btn">
                        <span>Войти</span>
                    </div>
                </NavLink>
                <NavLink className="sign sign-up"
                to="/new_user_registration/">
                    <div className="btn sign-up-btn">
                        <span>Зарегистрироваться</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Home;