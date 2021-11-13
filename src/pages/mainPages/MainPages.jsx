import "../mainPages/MainPages.style.css";
import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import HeaderComponents from "../../Components/Header.component/Header.component";
export default class MainPages extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <HeaderComponents/>
            </>
        )
    }
}
