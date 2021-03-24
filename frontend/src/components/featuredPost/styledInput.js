import styled from "styled-components";



export const Input = styled.input`
  height: 2.25em;
  font-family: Roboto, sans-serif;
  color: black;
  font-size: 0.9em;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;

export const InputTextArea = styled.textarea`
  height: 2.25em;
  font-family: Roboto, sans-serif;
  color: black;
  font-size: 0.9em;
  border: none;
  &:focus {
    outline: none;
  }
`;