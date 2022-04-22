export interface Settings {
  hostname?: string;
  os?: string;
  host?: string;
  kernel?: string;
  uptime?: string;
  packages?: string;
  shell?: string;
  resolution?: string;
  wm?: string;
  theme?: string;
  icons?: string;
  terminal?: string;
  cpu?: string;
  gpu?: string;
  memory?: string;
}

export const settings: Settings = {
  hostname: 'pc@arch',
  os: 'arch',
  host: 'MS-7A59 1.0',
  kernel: '5.15.34-1-lts',
  uptime: '30 mins',
  packages: '69 (pacman)',
  shell: 'zsh',
  resolution: '1366x768',
  wm: 'i3',
  theme: 'Adwaita [GTK2/3]',
  icons: 'Adwaita [GTK2/3]',
  terminal: 'st',
  cpu: 'Intel i7-7700 (8) @ 4.200GHz',
  gpu: 'NVIDIA GeForce GTX 1060 6gb',
  memory: '4GB / 40GB',
};
