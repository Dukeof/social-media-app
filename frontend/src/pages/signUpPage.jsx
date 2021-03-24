import React from 'react';
import { Box, Grommet } from 'grommet';
import MotionPanel from '../components/logInSignUp/motionPanel';
import SignUpPanel from '../components/logInSignUp/signUpPanel';
import { Redirect } from 'react-router';



const SignUpPage = () => {
    
    
    const token = localStorage.getItem('token');
    
    
    if (!token) {
        return (
            <Grommet>
                <Box
                    flex
                    width='97.5wv'
                    direction='row'
                >
                    <Box width='40%'>
                        <MotionPanel />
                    </Box>
                    <Box
                        flex
                        width='60%'
                        direction='column'
                    >
                        <SignUpPanel />
                    </Box>
                </Box>
                    
            </Grommet>
        );
    } else {
        return <Redirect to='/newsfeed/'/>
    };
};

export default SignUpPage;