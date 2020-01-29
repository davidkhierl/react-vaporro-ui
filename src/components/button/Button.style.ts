import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button)`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 3px;
  background-color: #fff;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 6px;
  }
  transition: all 0.25s ease-in-out;
`;

export default StyledButton;
