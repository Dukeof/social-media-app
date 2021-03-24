import React from 'react';

import motionLogo from '../../assets/motion_logo_white.png';
import googlePlay from '../../assets/google.svg';
import appleStore from '../../assets/apple.svg';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

import { Icon } from '../../styles/styledIcon';

import { MainContainer, Mantra, Motion, Signature, SocialButtonsContainer, StoresButtonsContainer, StoreButtonStyle } from '../../styles/motionPanelStyles';
import { Box, Button, Text } from 'grommet';


const MotionPanel = () => {


    return (
        <>
        <MainContainer>
            <Box
                flex
                direction='column'
                justify='end'
                align='center'
                height='60%'
                // margin= '0.75em 0 0.75em 0'
            >               
                <Icon src={motionLogo} />
                <Motion>Motion</Motion>
                <Mantra>Connect with friends and the world <br />around you with Motion.</Mantra>
                
                <StoresButtonsContainer>
                    <Button
                        style={StoreButtonStyle}
                        icon={<img src={ appleStore } alt='apple store logo' style={{  marginTop: '-0.375em'}}/>}

                    />
                    <Button
                        style={StoreButtonStyle}
                        icon={<img src={ googlePlay } alt='google store logo' style={{  marginTop: '-0.225em'}}/>}
                    />
                </StoresButtonsContainer>
            </Box>

            <Box>
                <SocialButtonsContainer>
                    <Button
                        icon={<img src={twitter} height='43px' width='43px' alt='twitter logo'/>}
                    />
                    <Button
                        icon={<img src={facebook} height='40px' width='40px' alt='facebook logo'/>}/>
                    <Button
                        icon={<img src={instagram} height='40px' width='40px' alt='instagram logo'/>}
                    />
                </SocialButtonsContainer>
                <Signature>© Modedotion 2021. All rights reserved.</Signature>
            </Box>

        </MainContainer>
        </>
    );
};

export default MotionPanel;