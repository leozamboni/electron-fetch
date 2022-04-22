import { Container, Logo, InfoSpan, Infos } from './styled';

interface Props {
  hostname?: string;
  os?: string;
  host?: string;
  kernel?: string;
  pkgs?: string;
  memory?: string;
  logo: string;
  baseColor: string;
}

const OS: React.FC<Props> = ({
  hostname,
  os,
  host,
  kernel,
  pkgs,
  memory,
  logo,
  baseColor,
  ...props
}) => {
  return (
    <Container>
      <Logo src={logo} />
      <Infos>
        <p style={{ color: baseColor }}>{hostname}</p>
        <p>
          <InfoSpan>os</InfoSpan> {os}
        </p>
        {host ? (
          <p>
            <InfoSpan>host</InfoSpan> {host}
          </p>
        ) : (
          ''
        )}
        {kernel ? (
          <p>
            <InfoSpan>kernel</InfoSpan> {kernel}
          </p>
        ) : (
          ''
        )}
        {pkgs ? (
          <p>
            <InfoSpan>pkgs</InfoSpan> {pkgs}
          </p>
        ) : (
          ''
        )}
        <p>
          <InfoSpan>shell</InfoSpan> bash
        </p>
        <p>
          <InfoSpan>wm</InfoSpan> dwm
        </p>
        <p>
          <InfoSpan>terminal</InfoSpan> st
        </p>
        {memory ? (
          <p>
            <InfoSpan>memory</InfoSpan> {memory}
          </p>
        ) : (
          ''
        )}
        <p>
          <InfoSpan>uptime</InfoSpan> 9 hours
        </p>
        {props.children}
      </Infos>
    </Container>
  );
};

export default OS;
