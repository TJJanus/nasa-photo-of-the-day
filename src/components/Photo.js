import React from 'react';

const Photo = props => {
    console.log(props);

    return (
        <div>
            <h1>Nasa Picture of the Day</h1>
            <div>
               <h2> {props.title} </h2>
                <img src={props.hdurl} alt = 'nasa pic of the day'/>
                    <div>
                        <p> Copyright: {props.copyright}</p>
                        <p>Explanation: {props.explanation}</p>
                    </div>
            </div>
        </div>
    )
}

export default Photo;