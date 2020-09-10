import React from 'react';
import styled from 'styled-components'


const StyledH1 = styled.h1`
    color: ${pr => pr.theme.white};
    font-family: ${pr => pr.theme.headingFont};
    text-decoration: underline;
    letter-spacing: 2px;
    
`

const StyledImg = styled.img`
    width: 70%;
    border: 3px solid ${pr => pr.theme.borderColor};
`
const StyledDiv = styled.div`
    width: 50%;
    align-items: center;
    margin: 0 auto;
    background-color: ${pr => pr.theme.secondaryColor};
    padding: 3%;

    h2 {
        color: ${pr => pr.theme.white};
        font-family: ${pr => pr.theme.headingFont};  
    }

    p {
        color: ${pr => pr.theme.white};
        font-family: 'Arial, Helvetica, sans-serif';
        font-size: 20px;
        width: 70%;
        margin-left: 15%;
        letter-spacing: 1px;
    }
    
    .cr {
        color: ${pr => pr.theme.white};
        font-family: 'Arial, Helvetica, sans-serif';
        font-size: 15px;
    }


`



const Photo = props => {
    console.log(props);

    return (
        <StyledDiv>
            <StyledH1>Nasa Picture of the Day</StyledH1>
            <div>
               <h2> {props.title} </h2>
                <StyledImg src={props.hdurl} alt = 'nasa pic of the day'/>
                    <div>
                        
                        <p>{props.explanation}</p>
                        <br></br>
                        <p className='cr'> Copyright: {props.copyright}</p>
                        
                    </div>
            </div>
        </StyledDiv>
    )
}

export default Photo;