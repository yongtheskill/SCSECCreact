import React from 'react'

import Button from '@material-ui/core/Button';

export default function NextPage(props) {

    const nextPage = () => {
        window.scrollTo({
            top: ~~((window.scrollY + window.innerHeight) / window.innerHeight) * window.innerHeight,
            behavior: 'smooth'     
        })
    }

    if(props.colour != null){
        var style={
            color: props.colour,
        }
    }
    else {
        var style={
            color: "#888",
        }
    }

    if(props.text != null){
    return (
        <div>
            <Button onClick={nextPage} style={style}>{props.text}</Button>
        </div>
    )}
    else {
    return (
        <div>
            <Button onClick={nextPage} style={style}>Next</Button>
        </div>
    )}
}
