import styled from 'styled-components'

export const Button = styled.button`
    border-radius: 1.875em;
    border: 0.05em rgba(0,0,0,0.2) solid;
    width: 7.5em;
    height:  2.5em;
    background: none;
    cursor: pointer;
    font-weight: bold;
    letter-spacing:0.05em;
    font-size: 0.5em;

     /* for nested <Link> tabs of react-router-dom */
    a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
        height: 100%;
        width: 100%;
        display: block;
        line-height:  2.5em; /* needs to be the same as height of button */
    }
`;


export const signInButtonStyle = {
    size: 'large',  
    fontSize: '12px',
    fontWeight: 'bold',
};

export const ContinueButtonStyle = {
    border: 'none',
    borderRadius: '1.75em',
    background: 'linear-gradient(110deg, rgba(196,104,255,0.76), rgba(110,145,246,0.78))',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    width: '16em',
    height: '3.75em',
};









export const GradientButton = styled.button`
    border: none;
    border-radius: 2em;
    background: linear-gradient(110deg, rgba(196,104,255,0.76), rgba(110,145,246,0.78));
    color: white;
    width: 16em;
    height: 3.75;
    font-size: 0.75;
    letter-spacing:0.5em;
    cursor: pointer;

         /* for nested <Link> tabs of react-router-dom */
         a {
        font-size: inherit;
        color: inherit;
        text-decoration: none;
        height: 100%;
        width: 100%;
        /* background-color: red; */
        display: block;
        line-height:  3.75em; /* needs to be the same as height of button */
    }
    
`;


export const signUpButtonStyle = {
    size: 'large',  
    'font-weight': 'bold',
}

export const signInColorfulButtonStyle = {
    border: 'none',
    borderRadius: '1.75em',
    background: 'linear-gradient(110deg, rgba(196,104,255,0.76), rgba(110,145,246,0.78))',
    color: 'white',
    width: '16em',
    height: '3.75em',
    size: 'large',  
    fontSize: '12px',
    fontWeight: 'bold',
}
