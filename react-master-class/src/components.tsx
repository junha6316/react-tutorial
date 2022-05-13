import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 10px;
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinsList = styled.ul``;
export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  transition: color 0.2s ease-in;
  &:hover {
    a {
      display: flex;
      padding: 20px;
      color: ${(props) => props.theme.accentColor};
      display: block;
    }
  }
`;

export const Loader = styled.span`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
