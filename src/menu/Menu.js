import React from "react";
import {data } from "../data.js";
import './Menu.css';
import MenuItem from "./MenuItem";
class Menu extends React.Component{
	constructor(props){
     super(props);
     const l=[];
data.map((data,key) => 
                	(l.push({[data.pic]:null})));
this.state={l,price:0};
}
clickHandler=(pic,price)=>{
	const list=this.state.l;
	const cost=this.state.price;
	if(list[pic]==null){
		list[pic]=1;
	}else{
		list[pic]++;
	}
	const newcost=price+cost;
	this.setState({list,price:newcost});
	//console.log(newcost+" "+list[pic]);
}
	render(){
		const items=0;
		

          return (
                <div className="menu">
                {data.map((data,key) => 
                	(<MenuItem key={key} data={data} click={this.clickHandler} />))}
                </div>
         );
     }
}

export default Menu;