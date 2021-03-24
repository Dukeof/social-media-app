import styled from "styled-components";


export const TopRightWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 15%;
    padding-right: 1.75em;
`;

export const MiddleRightWrapper = styled.div`
    height: 55%;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BottomRightWrapper = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormWrapper = styled.form`
  height: 80%;
  width: 100%;
`;

export const NavTabWrapper = styled.div`
    width: 5.25em;
    height: 100%;
    padding: 0 0.1875em 0 0.1875em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor:pointer;
    margin-right: 7%;
`;

export const SearchTabWrapper = styled.div`
    width: 3.125em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    font-size: 1em;
    color: grey;
`;

export const ActiveSearchTabWrapper = styled(SearchTabWrapper)`
    border-bottom: 0.0625em black solid;
`;

export const GradientCircleContainer = styled.div`
      border-radius: 50%;
      background: ${props => props.theme.LinearGradientHover};
      color: white;
      width: 1.25em;
      height: 1.25em;
      font-size: 0.625em;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-weight: lighter;
`;

export const GenericCard = styled.div`
    box-shadow: 0 0.1875em 1875em rgba(229,229,229,0.73);
    border: 0.0375em rgba(221,221,221,0.75) solid;
    border-radius: 0.3125em;
    overflow: hidden;
    position: relative; /* don't change, needed for absolute element positioning */
    transition: box-shadow 0.3s;

    &:hover, &.active, &.focus {
        box-shadow: 0 0.1875em 1875em rgba(229,229,229,0.73), 0 0.625em 0.625em 0 rgba(0,0,0,0.14), 0 0.125em 0.625em -0.625em rgba(0,0,0,0.12), 0 0.625em 0.1875em 0 rgba(0,0,0,0.20);
    }
`;