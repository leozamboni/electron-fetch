import { settings } from '../../../settings';
import { Container, Logo, Infos, InfoSpan, InfosP } from './styled';

interface Props {
  color: string;
  logo: string;
}

const OS: React.FC<Props> = ({ color, logo }) => {
  const increase_brightness = (hex: any, percent: any) => {
    hex = hex.replace(/^\s*#|\s*$/g, '');

    if (hex.length == 3) {
      hex = hex.replace(/(.)/g, '$1$1');
    }

    const r = parseInt(hex.substr(0, 2), 16),
      g = parseInt(hex.substr(2, 2), 16),
      b = parseInt(hex.substr(4, 2), 16);

    return (
      '#' +
      (0 | ((1 << 8) + r + ((256 - r) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + g + ((256 - g) * percent) / 100))
        .toString(16)
        .substr(1) +
      (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1)
    );
  };

  return (
    <Container>
      <Logo src={logo} />
      <Infos>
        {settings.hostname ? (
          <InfosP>
            <InfoSpan color={increase_brightness(color, 50)}>
              {settings.hostname}
            </InfoSpan>
          </InfosP>
        ) : (
          ''
        )}
        {settings.os ? (
          <InfosP>
            <InfoSpan color={color}>os </InfoSpan>
            {settings.os}
          </InfosP>
        ) : (
          ''
        )}
        {settings.host ? (
          <InfosP>
            <InfoSpan color={color}>host </InfoSpan>
            {settings.host}
          </InfosP>
        ) : (
          ''
        )}
        {settings.kernel ? (
          <InfosP>
            <InfoSpan color={color}>kernel </InfoSpan>
            {settings.kernel}
          </InfosP>
        ) : (
          ''
        )}
        {settings.uptime ? (
          <InfosP>
            <InfoSpan color={color}>uptime </InfoSpan>
            {settings.uptime}
          </InfosP>
        ) : (
          ''
        )}
        {settings.packages ? (
          <InfosP>
            <InfoSpan color={color}>packages </InfoSpan>
            {settings.packages}
          </InfosP>
        ) : (
          ''
        )}
        {settings.shell ? (
          <InfosP>
            <InfoSpan color={color}>shell </InfoSpan>
            {settings.shell}
          </InfosP>
        ) : (
          ''
        )}
        {settings.resolution ? (
          <InfosP>
            <InfoSpan color={color}>resolution </InfoSpan>
            {settings.resolution}
          </InfosP>
        ) : (
          ''
        )}
        {settings.wm ? (
          <InfosP>
            <InfoSpan color={color}>wm </InfoSpan>
            {settings.wm}
          </InfosP>
        ) : (
          ''
        )}
        {settings.theme ? (
          <InfosP>
            <InfoSpan color={color}>theme </InfoSpan>
            {settings.theme}
          </InfosP>
        ) : (
          ''
        )}
        {settings.icons ? (
          <InfosP>
            <InfoSpan color={color}>icons </InfoSpan>
            {settings.icons}
          </InfosP>
        ) : (
          ''
        )}
        {settings.terminal ? (
          <InfosP>
            <InfoSpan color={color}>terminal </InfoSpan>
            {settings.terminal}
          </InfosP>
        ) : (
          ''
        )}
        {settings.cpu ? (
          <InfosP>
            <InfoSpan color={color}>cpu </InfoSpan>
            {settings.cpu}
          </InfosP>
        ) : (
          ''
        )}
        {settings.gpu ? (
          <InfosP>
            <InfoSpan color={color}>gpu </InfoSpan>
            {settings.gpu}
          </InfosP>
        ) : (
          ''
        )}
        {settings.memory ? (
          <InfosP>
            <InfoSpan color={color}>memory </InfoSpan>
            {settings.memory}
          </InfosP>
        ) : (
          ''
        )}
      </Infos>
    </Container>
  );
};

export default OS;
