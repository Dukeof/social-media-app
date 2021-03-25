import React, { useState } from 'react';

import { Box, Button, Form, FormField, Grommet, Text, TextInput } from 'grommet';

import dotFull from '../../assets/dot_full.png';
import dotEmpty from '../../assets/dot_empty.png';


// =========================== fetch requests ===========================
import { baseUrl, headers } from '../../store/fetch';
import { Redirect } from 'react-router';
import { signInColorfulButtonStyle } from  '../../styles/styledButtons';

const verifyStyle = {
    marginTop: '-5em',
    width: '90%',
    align: 'center',

}
const SignUpPanelRegister = () => {

    const [signUpValues, setSignUpValues] = useState({code: '', email: '', username: '', first_name: '', last_name: '', password: '', password_repeat: ''});
    const [ showMismatchingPassowrd, setShowMismatchingPassowrd ] = useState(false)
    const message = 'Mismatched password'

    const signUpHandler = async (value) => {
        if (signUpValues.password !== signUpValues.password_repeat) return setShowMismatchingPassowrd(!showMismatchingPassowrd)
        // event.preventDefault();
        console.log(value)
        const config = {
            method: 'POST',
            header: headers,
            body: JSON.stringify({value})
        }
        console.log(config.body);
        // fetch(`${baseUrl}auth/registration/validation`, config).then((res) => res.json())
        // .then((data) => {
        //   console.log(data);
        // });
        // // if (response.status === 201) <Redirect to='/signup/congrats'/>;
    };

    return (
        <Grommet>
            <Box height='85%'>
                <Form value={ signUpValues } 
                    onChange={ nextValue => setSignUpValues(nextValue) }
                    onSubmit={ ({value}) => signUpHandler(value) }
                >
                    <Box flex justify='end' direction='column'
                        align='center' height='75%' gap='6.5em'
                    >
                        <Text font='Roboto, sans-serif'
                            size='2.5em' margin={{top: '2.5em'}}                            
                        >Verification</Text>
                        <Box style={verifyStyle}>
                            <Box width="100%" direction="row" align="center" justify="center"
                            >
                                <FormField required name="code" htmlFor="code" width='large' margin={{left: '.075em'}}>
                                <TextInput id='code' name='code' placeholder='Validation code'
                                    plain type='text' margin='0.25em'/>
                                </FormField>
                            </Box>

                            <Box width="large" direction="row" gap='large' margin={{left: '.075em'}} alignSelf="center" marginBottom='0.25em'
                            >
                                <FormField required label='Email' name="email" htmlFor="email" width='medium'>
                                <TextInput id='email' name='email' placeholder='jennigersmith@gmail.com'
                                    plain type='text' margin='0.25em'/>
                                </FormField>
                                <FormField required label='Username' name="username" htmlFor="username" width='medium'>
                                <TextInput id='username' name='username' placeholder='johnsmith'
                                    plain type='text' margin='0.25em'
                                />
                                </FormField>
                            </Box>
                            <Box width="large" direction="row" gap='large' margin={{left: '.075em', top: '1em'}} alignSelf="center" marginBottom='0.25em'
                            >
                                <FormField required name="first_name" htmlFor="first_name" width='medium'>
                                <TextInput id='first_name' name='first_name' placeholder='First name'
                                    plain type='text' margin='0.25em'/>
                                </FormField>
                                <FormField required name="last_name" htmlFor="last_name" width='medium'>
                                <TextInput id='last_name' name='last_name' placeholder='Last name'
                                    plain type='text' margin='0.25em'
                                />
                                </FormField>
                            </Box>
                            <Box width="large" direction="row" gap='large' margin={{left: '.075em', top: '1em'}} alignSelf="center" marginBottom='0.25em'
                            >
                                <FormField required name="password" htmlFor="password" width='medium'>
                                <TextInput id='password' name='password' placeholder='Password'
                                    plain type='password' margin='0.25em'/>
                                </FormField>
                                <FormField required name="password_repeat" htmlFor="password_repeat" width='medium'>
                                <TextInput id='password_repeat' name='password_repeat' placeholder='Password repeat'
                                    plain type='password' margin='0.25em'
                                />
                                </FormField>
                            </Box>
                                {
                                    showMismatchingPassowrd ? (
                                    <Box align='end' pad={{ horizontal: 'small' }}>
                                    <Text color="status-error">{message}</Text>
                                    </Box>
                                    ) : ''
                                }
                        </Box>

                    </Box>
                    <Box 
                        flex
                        justify='center'
                        align='center'

                        margin='2.5em'
                    >
                        <Button style={signInColorfulButtonStyle} label="CONTINUE" type="submit" />
                    </Box>
                </Form>
                <Box flex direction='row' justify='center' >
                <img src={dotEmpty} alt=''/>
                <img src={dotEmpty} style={{marginLeft: '0.5em', marginRight: '0.5em'}} alt=''/>
                <img src={dotFull} alt=''/>
                </Box>
            </Box>
        </Grommet>
    );
};


export default SignUpPanelRegister;