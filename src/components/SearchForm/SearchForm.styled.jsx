import styled from 'styled-components';

export const Layout = styled.form`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  height: 36px;
  width: 450px;
  padding: 1px 6px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 16px;
`;

export const FormButton = styled.button`
  width: 70px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 16px;

  transition: background-color 250ms linear, color 250ms linear;

  :hover {
    background-color: #ffa500;
    color: #fff;
  }
`;
