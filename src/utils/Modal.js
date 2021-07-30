import React, { Fragment } from 'react';

const modal_styles = {
    position: "fixed",
    top : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex:1000,
    
}
const overlay_styles = {
    position: "fixed",
    top: 0,
    left: 0,
    right:0,
    bottom:0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000
}
const button_styles ={
    borderRadius: "5px",
    padding:"10px 34px",
    backgroundColor:"red",
    color:"white",
    border:"none"
}
const display_styles ={
    display: "flex",
    justifyContent: "center"
}
const children_div ={
    display:"flex",
    justifyContent:"space-between",
}

const Modal = (props) => {
    return (
        <Fragment>
            <div style={overlay_styles}></div>
        <div style={modal_styles}>
            <div style={children_div}>
            {props.children}
            </div>
            <div style={display_styles}>
            <button onClick={props.onClose} style={button_styles}>Close </button>
            </div>
        </div>
        </Fragment>
    )
}
export default Modal;