import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || '1.6rem'};
  font-weight: ${props => props.fontWeight || 400};
  margin: ${props => props.margin || 0};

  ${props => props.centered && css`
    width: 100%;
    text-align: center;
  `}
`

export default Paragraph;