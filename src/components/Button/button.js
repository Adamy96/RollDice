import styled from 'styled-components';

const Button = styled.button`
  outline: ${props => props.outline || 'none'};
  border: ${props => props.button || 'none'};
  padding: ${props => props.padding || 0};
  color: ${props => props.color || 'black'};
  background-color: ${props => props.backgroundColor || 'white'};
  font-size: ${props => props.fontSize || '1.6rem'};
  font-weight: ${props => props.fontWeight || '400'};
  border-radius: ${props => props.borderRadius || 0};

  &:hover {
    cursor: pointer;
  }
`

export default Button;