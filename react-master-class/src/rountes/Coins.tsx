import styled from 'styled-components';

const Title = styled.h1`
  colors: ${(props) => props.theme.accentColor};
`;
function Coins() {
  return <Title>Coins</Title>;
}

export default Coins;
