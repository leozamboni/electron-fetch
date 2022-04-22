import Arch from 'oss/arch';
import RainCode from 'backgrounds/raincode';
import './App.css';
import { background, distro } from '../../settings';
import { BackgroundEnum } from 'enums/backgrounds';
import { DistroEnum } from 'enums/distro';
import Background from 'components/background';
import Debian from 'oss/debian';

const ElectronFetch = () => {
  let color = 'white';

  const getDistro = () => {
    switch (distro) {
      case DistroEnum.Arch:
        color = '#426fb3';
        return <Arch />;
      case DistroEnum.Debian:
        color = '#b82837';
        return <Debian />;
    }
  };

  const getBg = () => {
    switch (background) {
      case BackgroundEnum.Solid:
        return <Background style={{ backgroundColor: color }}></Background>;
      case BackgroundEnum.RainCode:
        return <RainCode color={color}></RainCode>;
    }
  };

  return (
    <>
      {getDistro()}
      {getBg()}
    </>
  );
};

export default function App() {
  return <ElectronFetch />;
}
