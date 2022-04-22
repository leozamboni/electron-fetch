import OS from 'components/os/os';

const Arch = () => {
  return (
    <OS
      baseColor={'purple'}
      hostname={'leonardo@arch'}
      os={'Arch Linux'}
      kernel={'5.15.34-1-lts'}
      pkgs={'638'}
      memory={'5GB / 40GB'}
      logo={
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Archlinux-icon-crystal-64.svg'
      }
    />
  );
};

export default Arch;
