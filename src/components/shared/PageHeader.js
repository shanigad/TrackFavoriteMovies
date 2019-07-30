
import React from "react";
import Navigation from "./Navigation";
import '../../style/pageHeaderStyle.css';


const  PageHeader = ({title}) => (
    <>
        <div id="pageHdrMnDiv">
            <h1 id="pageTtl">{title}</h1>
            <Navigation/>
        </div>
    </>

);


export default PageHeader
