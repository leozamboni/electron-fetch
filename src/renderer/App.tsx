import Arch from 'oss/arch';
import Matrix from 'backgrounds/matrix';
import './App.css';

const ElectronFetch = () => {
  return (
    <Matrix>
      <Arch />
    </Matrix>
  );
};

export default function App() {
  return <ElectronFetch />;
}
