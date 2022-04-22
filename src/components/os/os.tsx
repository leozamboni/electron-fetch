import { fetchInfos, Informations } from '../../../informations';
import { Container, Logo, Infos, InfoSpan, InfosP } from './styled';

interface Props {
  colorBase: string;
  logo: string;
}

const OS: React.FC<Props> = ({ colorBase, logo, ...props }) => {
  const infos: Informations = fetchInfos;
  return (
    <Container>
      <Logo src={logo} />
      <Infos>
        {infos.hostname ? <InfosP>{infos.hostname}</InfosP> : ''}
        {infos.os ? (
          <InfosP>
            <InfoSpan color={colorBase}>os </InfoSpan>
            {infos.os}
          </InfosP>
        ) : (
          ''
        )}
      </Infos>
    </Container>
  );
};

export default OS;
