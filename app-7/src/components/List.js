import React from 'react';
import ToDo from './ToDo';

export default function List (props){
    let display = props.tasks.map((val) =>{
        return (
        <ToDo task={val}/>
        )
    })
    
    return (
        <div>
            {display}
        </div>
    )
}