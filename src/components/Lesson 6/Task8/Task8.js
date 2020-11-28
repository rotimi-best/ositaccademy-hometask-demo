import React, {Component} from "react";
import Header from "./Header/Header";
import Main from './Main/Main';
import Footer from "./Footer/Footer";

export default class Task8 extends Component {
    render() {
        return (
            <div style={{padding:'20px 0'}}>
                <div className='container'>
                <Header/>
                <Main/>
                <Footer/>
                </div>
            </div>
        );
    }
}
