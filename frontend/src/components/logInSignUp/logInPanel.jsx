import React, { useState } from 'react';

import lock from '../../assets/lock.svg';
import user from '../../assets/user.svg'
import { Box, Button, Form, FormField, Grommet, Text, TextInput } from 'grommet';
import { Hide, View } from 'grommet-icons';
import { logInAction } from '../../store/actions';
import { baseUrl, headers } from '../../store/fetch';
import { useHistory } from 'react-router';
import { SIGNINButtonStyle, SIGNUPButtonStyle } from '../../styles/styledButtons';
import { InputWrapper } from '../../styles/styledWrappers';



const LogInPanel = (props) => {
    let history = useHistory();

    const [loginValues, setLoginValues] = useState({email: '', password: ''});
    const [reveal, setReveal] = useState(false);
    const [ showMismatchingPassowrdOrUsername, setShowMismatchingPassowrdOrUsername ] = useState(false);
    const message = 'Mismatching email or password';

    const loginHandler = async ({ value }) => {
        console.log({props})
        
        // console.log(value)
        const config = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ email: value.email, password: value.password })
        }
        const response = await fetch(`${baseUrl}token/`, config)
        const data = response.json()
        .then(data => {
            console.log(data.access)
            if (data.access) {
                const token = data.access;
                logInAction(token);
                localStorage.setItem('token', token);
                history.push('/feed');
            } else 
                return setShowMismatchingPassowrdOrUsername(!showMismatchingPassowrdOrUsername);
        })
    };

    return (
        <Grommet>
            <Box flex direction='row' height='15%' align='start' justify='end' pad='1em'>
                <Text font='Roboto, sans-serif' size='0.8em' fontWeight='500' margin='0.5em'>
                    Don't have an account?
                </Text>
                <Button style={ SIGNUPButtonStyle } label="SIGN UP" href="/signup/" />
            </Box>
            <Box height='85%'>
                <Form value={ loginValues } onChange={ nextValue => setLoginValues(nextValue) } onSubmit={ value => loginHandler(value) }>
                    <Box flex direction='column' justify='end' align='center' height='75%'>
                        <Text font='Roboto, sans-serif' size='2.5em' fontWeight='300' margin={{top: '2.5em'}}>Sign In</Text>
                        <Box style={InputWrapper}>
                            <Box width="medium" direction="row" align="center" marginBottom='0.25em' justify='center'>
                                <FormField name="email" htmlFor="email">
                                    <TextInput id='email' name='email' placeholder='Email' revese plain type='text'
                                        icon={<img src={user} alt='userlogo' style={{marginBottom: '-0.05em'}}/>} 
                                    />
                                </FormField>
                            </Box>
                            <Box width="medium" direction="row" margin="2.5em" align="center">
                                <FormField name="password" htmlFor="password">
                                    <TextInput id='password' name='password' placeholder='Password' revese plain type={reveal ? 'text' : 'password'} margin='0.25em'
                                        icon={<img src={lock} alt='locklogo' style={{marginBottom: '-0.05em'}}/>}
                                        />
                                </FormField>
                                <Button icon={reveal ? <View size="medium"/> : <Hide size="medium"/>} onClick={() => setReveal(!reveal)}/>
                            </Box>
                                {
                                    showMismatchingPassowrdOrUsername ? (
                                    <Box align='end' pad={{ horizontal: 'small' }}>
                                    <Text color="status-error">{message}</Text>
                                    </Box>
                                    ) : ''
                                }
                        </Box>
                    </Box>
                    <Box flex justify='center' align='center' height='25%' marginTop='-2.5em'>
                        <Button style={SIGNINButtonStyle} label="SIGN IN" type="submit" />
                    </Box>
                </Form>
            </Box>
        </Grommet>
    );
};

export default LogInPanel;