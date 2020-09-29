import React from "react";
import './Menu.css';
function MenuItem(props){
	
          return (
                <div className="menu-item">
                <center><img src={require(".././images/"+props.data.pic+".png")} /></center>
                <b className="name">{props.data.name}</b><p className="price">Rs.{props.data.price}</p>
                <p className="des">{props.data.des}</p>
                <input type="button" value="ADD" className="add" onClick={()=>(props.click(props.data.pic,props.data.price))}/>
                </div>
         );
}
export default MenuItem;