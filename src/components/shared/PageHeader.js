
import React from "react";
import Navigation from "./Navigation";

const headerStyle = {
    color :'white',
    textAlign : 'center'
};
const  PageHeader = ({title}) => (
    <>
        <div>
            <h1 style={headerStyle} id="pageTtl">{title}</h1>
            <Navigation/>
        </div>
    </>

);


export default PageHeader
