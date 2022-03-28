import React, { useContext, useEffect } from 'react'
import { MyContext, TextContext } from './TextContext';

const Test = () => {
    let { data, setData } = useContext(MyContext);
    useEffect(() => {
        setData("change")
       
    }, []);
    return (
        <div>Test asdfasdf</div>
    )
}

export default Test;