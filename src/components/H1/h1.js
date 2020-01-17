import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => props.fontSize || '2.4rem'};
  font-weight: ${props => props.fontWeight || 400};
  color: ${props => props.color || 'black'};
  text-transform: ${props => props.textTransform || 'none'};
  letter-spacing: ${props => props.letterSpacing || 'normal'}
`

export default H1;