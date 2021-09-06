import React from "react";
import { useState, useEffect } from "react";
import "./stylecounter.scss";

const NewComp = () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        document.title = `число ${count}`;
    }, []);
    return (
        <div className="counter">
            <div className="counter__form">
                <button onClick={() => setCount(count => count - 1)}>Back</button>
                <a> число {count} </a>
                <button onClick={() => setCount(count => count + 1)} >Next</button>
            </div>
        </div >
    )
}

export default NewComp;