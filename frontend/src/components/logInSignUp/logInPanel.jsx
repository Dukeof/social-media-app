import React, { useState } from 'react';

import lock from '../../assets/lock.svg';
import user from '../../assets/user.svg'
import { Box, Button, Form, FormField, Grommet, Text, TextInput } from 'grommet';
import { Hide, View } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { logInAction } from '../../store/actions';


const InputWrapper = {
    width: '21em',
    height: '3.75em',
    marginTop: '5em',
    marginBottom: '7.5em',
    display: 'flex',
    'alignContent': 'center',
    'justifyContent': 'center',
    'borderBottom': 'solid rgba(149,149,149,0.21) 0.125em'
};

const signUpButtonStyle = {
    size: 'large', 
    fontSize: '12px', 
    'fontWeight': 'bold',
}

const signInButtonStyle = {
    border: 'none',
    'borderRadius': '1.75em',
    background: 'linear-gradient(110deg, rgba(196,104,255,0.76), rgba(110,145,246,0.78))',
    fontWeight: 'bold',
    color: 'white',
    width: '16em',
    height: '3.75em',
    fontSize: '0.75',
}

const LogInPanel = (props) => {
    const dispatch = useDispatch();

    const [loginValues, setLoginValues] = useState({email: '', password: ''});
    const [reveal, setReveal] = useState(false);
    const loginHandler = async (value) => {
        // event.preventDefault();
        console.log({props})
        dispatch(logInAction, value);

        // const response = await /* logInAction(loginValues) */ console.log(loginValues);
        // if (response.status === 200) navigate('/feed');
    };

    return (
        <Grommet>
            <Box 
                flex
                direction='row'
                height='15%'
                align='start'
                justify='end'
                pad='1em'
            >
                <Text
                    font='Roboto, sans-serif'
                    size='0.8em'
                    fontWeight='500'
                    margin='0.5em'
                >Don't have an account?</Text>
                <Button style={signUpButtonStyle} label="SIGN UP" href="/signup/" />
            </Box>
            <Box height='85%'>
                <Form 
                    value={ loginValues } 
                    onChange={ nextValue => setLoginValues(nextValue) }
                    onSubmit={ ({value}) => loginHandler(value) }
                >
                    <Box 
                        flex
                        direction='column'
                        justify='end'
                        align='center'
                        height='75%'
                        // marginBottom='5em'
                    >
                        <Text
                            font='Roboto, sans-serif'
                            size='2.5em'
                            fontWeight='300'
                            margin={{top: '2.5em'}} 
                            >Sign In</Text>
                        <Box style={InputWrapper}>
                            <Box
                                width="medium"
                                direction="row"
                                align="center"
                                marginBottom='0.25em'
                                justify='center'
                            >
                                <FormField name="email" htmlFor="email">
                                <TextInput
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    icon={<img src={user} alt='userlogo' style={{marginBottom: '-0.05em'}}/>}
                                    revese
                                    plain
                                    type='text'
                                />
                                </FormField>
                            </Box>
                            <Box
                                width="medium"
                                direction="row"
                                margin="2.5em"
                                align="center"
                            >
                                <FormField name="password" htmlFor="password">
                                    <TextInput
                                        id='password'
                                        name='password'
                                        placeholder='Password'
                                        icon={<img src={lock} alt='locklogo' style={{marginBottom: '-0.05em'}}/>}
                                        revese
                                        plain
                                        type={reveal ? 'text' : 'password'}
                                        margin='0.25em'
                                    />
                                </FormField>
                                    <Button
                                        icon={reveal ? <View plain size="medium"/> : <Hide plain size="medium"/>}
                                        onClick={() => setReveal(!reveal)}
                                    />
                            </Box>
                        </Box>

                    </Box>
                    <Box 
                        flex
                        justify='center'
                        align='center'
                        height='25%'
                        marginTop='-2.5em'
                    >
                        <Button style={signInButtonStyle} label="SIGN IN" type="submit" />
                    </Box>
                </Form>
            </Box>
        </Grommet>
    );
};

export default LogInPanel;