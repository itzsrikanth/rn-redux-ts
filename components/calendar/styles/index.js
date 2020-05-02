import styled from 'styled-components';
import theme from '../../../theme.style';

export const Containers = styled.View`
  flex-flow: row nowrap;
`;

export const Tick = styled.View`
  width: 40px;
  height: 50px;
  border-radius: 5px;
  border-color: ${theme.PRIMARY_COLOR};
  border-width: 1px;
  border-style: solid;
  color: ${theme.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
`;

const TickCommon = styled.Text`
  color: ${theme.PRIMARY_COLOR};
  font-size: ${theme.FONT_SIZE_MEDIUM}px;
  text-transform: uppercase;
`;

export const TickNumber = styled(TickCommon)`
  font-weight: bold;
  margin-bottom: 3.5px;
`;

export const TickText = styled(TickCommon)`
  font-size: ${theme.FONT_SIZE_XS}px;
`;

export default TickCommon;
