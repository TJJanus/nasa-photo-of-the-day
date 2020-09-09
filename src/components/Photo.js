import React from 'react';

const Photo = props => {
    console.log(props);

    return (
        <div>
            <div>
                {props.title}
                <img src={props.hdurl} alt = 'nasa pic of the day'/>
                <p>{props.explanation}</p>
            </div>
        </div>
    )
}

export default Photo;