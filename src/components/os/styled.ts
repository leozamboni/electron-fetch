import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  width: 93vw;
  height: 90vh;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.72);
  position: absolute;
  z-index: 2;
  font-family: monospace, Helvetica, sans-serif;
`;

export const Infos = styled.div`
  margin: 20px;
  float: right;
  color: white;
`;

export const Logo = styled.img`
  width: 300px;
  height: 300px;
  float: left;
`;

export const InfoSpan = styled.span`
  color: blue;
`;
