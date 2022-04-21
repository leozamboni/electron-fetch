import Arch from 'apps/arch/arch';
import Matrix from 'backgrounds/matrix';
import './App.css';

const Distro: React.FC = () => {
  return <Arch />;
};

const Background: React.FC = () => {
  return <Matrix />;
};

const ElectronFetch = () => {
  return (
    <Background>
      <Distro />
    </Background>
  );
};

export default function App() {
  return <ElectronFetch />;
}
