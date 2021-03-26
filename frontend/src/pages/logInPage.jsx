import React from 'react';

import MotionPanel from '../components/logInSignUp/motionPanel';
import LogInPanel from '../components/logInSignUp/logInPanel';

import { Box } from 'grommet';
import { Redirect } from 'react-router';

// import { useSelector } from "react-redux";


const LogInPage = () => {
    
    const token = localStorage.getItem('token');

    
    if (!token) {
        return (
            <>
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
                        <LogInPanel/>
                    </Box>
                </Box>
            </>
        )
    } else {

        return <Redirect to='/feed/'/>
    };
};

export default LogInPage;
