import React from "react";
import Counter from '../container/CountContainer'
import "../App.css"

export default class Groupcounter extends React.Component{

    constructor(props) {
        super(props);
        this.num = this.props.num;
    }

    render() {
        let array=[]
        for(let i=0;i<this.num;i++){
            array.push(<Counter
                index={i}
                key={i} />)
        }
        return (
            <div>
                    {array}
            </div>
        );
    }














}