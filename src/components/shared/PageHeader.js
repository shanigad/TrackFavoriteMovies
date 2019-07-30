
import React from "react";
import Navigation from "./Navigation";

const  PageHeader = ({title}) => (
    // const {movie} = props
    //
    <>
        <div style={{position:"fixed", width:"100%", backgroundColor:"black"}}>
            <h1 style={{color: "white", textAlign: "center"}}>{title}</h1>
            <Navigation/>
        </div>
    </>

);


export default PageHeader
