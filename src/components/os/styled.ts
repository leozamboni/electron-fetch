import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  width: 93vw;
  height: 90vh;
  border-radius: 10px;
  background-color: #0d0d0d;
  position: absolute;
  z-index: 2;
  font-family: monospace, Helvetica, sans-serif;
`;

export const Infos = styled.div`
  margin: 20px;
  color: white;
`;

export const Logo = styled.img`
  width: 300px;
  height: 300px;
  float: left;
  padding: 10px;
`;

export const InfoSpan = styled.span`
  color: ${(props) => props.color};
`;

export const InfosP = styled.p``;
