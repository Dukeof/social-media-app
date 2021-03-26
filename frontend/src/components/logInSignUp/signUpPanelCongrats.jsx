import React from 'react';
import { Box, Button, Grommet, Image, Text } from 'grommet';

import { signInColorfulButtonStyle } from  '../../styles/styledButtons';
import check from '../../assets/check.jpg';
import dotFull from '../../assets/dot_full.png';
import dotEmpty from '../../assets/dot_empty.png';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';



const SignUpPanelCongrats = () => {


    return (

        <Grommet>
             <Box margin={{top: '7.5em'}}>
       
                    <Box flex justify='center' direction='column'
                        align='center' height='75%' margin={{bottom: '7.5em'}}
                    >
                        <Text font='Roboto, sans-serif' size='2.5em'
                        >Congratulations!</Text>
                        <Box width='xsmall' height='xsmall' margin={{top: '2.5em', bottom: '2.5em'}}>
                        <Image src={check} />
                        </Box>
                        <Text>We've sent a confirmation code to you email</Text>
                        <Text>some@email.com</Text>
                    </Box>
                    <Box 
                        flex
                        justify='center'
                        align='center'
                        margin='2.5em'
                    >
                        <Link to='/signup/register'>
                        <Button style={signInColorfulButtonStyle} label="CONTINUE" />
                        </Link>
                    </Box>
          
                <Box flex direction='row' justify='center' >
                <img src={dotEmpty} alt=''/>
                <img src={dotFull} style={{marginLeft: '0.5em', marginRight: '0.5em'}} alt=''/>
                <img src={dotEmpty} alt=''/>
                </Box>
            </Box>
        </Grommet>

    )
};

export default SignUpPanelCongrats;