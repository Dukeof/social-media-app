import React, { useState } from 'react';


import { Box, Button, Form, FormField, Grommet, Text, TextInput } from 'grommet';
import { Mail } from 'grommet-icons';

import dotFull from '../../assets/dot_full.png';
import dotEmpty from '../../assets/dot_empty.png';


// =========================== fetch requests ===========================
import { baseUrl, headers } from '../../store/fetch';
import { useHistory } from 'react-router';
import { signUpInputWrapper } from '../../styles/styledWrappers';
import { signInButtonStyle, signInColorfulButtonStyle } from  '../../styles/styledButtons';


const SignUpPanel = () => {
    let history = useHistory();


    const [signUpValues, setSignUpValues] = useState({ email: '' });

    const signUpHandler = ({value}) => {
        // console.log(value)
        const config = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ email: value.email })
        }
        fetch(`${baseUrl}auth/registration/`, config)
        .then((response) => {
            // console.log(response.status)
          if (response.status === 201) history.push('/signup/congrats');
        });
    };

    return (
        <Grommet>
            <Box flex direction='row' height='15%'  align='start'
                justify='end' pad='1em'
            >
                <Text font='Roboto, sans-serif'
                    size='0.8em' fontWeight='500' margin='0.5em'
                >Already have an account?</Text>
                <Button style={signInButtonStyle} label="SIGN IN" href="/" />
            </Box>
            <Box height='85%'>
                <Form value={ signUpValues } 
                    onChange={ nextValue => setSignUpValues(nextValue) }
                    onSubmit={ (value ) => signUpHandler(value) }
                >
                    <Box flex justify='end' direction='column'
                        align='center' height='75%' gap='6.5em'
                    >
                        <Text font='Roboto, sans-serif'
                            size='2.5em' fontWeight='300' margin={{top: '2.5em'}}                            
                        >Sign Up</Text>
                        <Box style={signUpInputWrapper}>
                            <Box width="medium" direction="row" margin="large" align="center" marginBottom='0.25em'>
                                
                                <FormField name="email" htmlFor="email">
                                <TextInput id='email' name='email' placeholder='Email'
                                    icon={<Mail color='purple' style={{marginBottom: '-0.05em'}}/>}
                                    revese plain type='text' margin='0.25em'
                                /></FormField>
                           
                            </Box>
                        </Box>

                    </Box>
                    <Box 
                        flex
                        justify='center'
                        align='center'
                        height='25%'
                        margin='2.5em'
                    >
                        <Button style={signInColorfulButtonStyle} label="CONTINUE" type="submit" />
                    </Box>
                </Form>
                <Box flex direction='row' justify='center' >
                <img src={dotFull} alt=''/>
                <img src={dotEmpty} style={{marginLeft: '0.5em', marginRight: '0.5em'}} alt=''/>
                <img src={dotEmpty} alt=''/>
                </Box>
            </Box>
        </Grommet>
    );
};


export default SignUpPanel;