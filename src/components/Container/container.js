import styled, { css } from 'styled-components';

const Container = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  overflow-y: ${props => props.overflowY || 'visible'};
  display: ${props => props.display || 'block'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  margin: ${props => props.margin || 0};
  display: ${props => props.display || 'block'};

  position: ${props => props.position || 'static'};
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  transform: ${props => props.transform || 'none'};
  
  ${props => props.justifyContent && css`
    justify-content: ${props => props.justifyContent || 'flex-start'};
  `}

  ${props => props.alignItems && css`
    align-items: ${props => props.alignItems || 'stretch'};
  `}

  ${props => props.flexDirection && css`
    flex-direction: ${props => props.flexDirection || 'row'};
  `}
`

export default Container;