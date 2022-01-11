import React from "react";
import styled, { keyframes } from "styled-components";

const CheckBox = ({ value, checked, onChange, name, id, label, disabled }) => {
  // Create a custom checkbox component
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <CheckboxCont
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      ></CheckboxCont>
      <Indicator />
    </Label>
  );
};

const CheckboxCont = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Label = styled.label`
  position: relative;
  display: block;
  width: fit-content;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 10px 20px;
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 1px solid #757575;
  border-radius: 0.2em;

  ${CheckboxCont}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${CheckboxCont}:checked + &::after {
    display: block;
    top: -0.05em;
    left: 0.25em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`;

export default CheckBox;
