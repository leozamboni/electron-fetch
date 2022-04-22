export interface Informations {
  hostname?: string;
  os?: string;
  host?: string;
  kernel?: string;
  uptime?: string;
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

export const fetchInfos: Informations = {
  hostname: 'pc@arch',
  os: 'arch',
  kernel: '5.15.34-1-lts',
  shell: 'zsh',
  wm: 'i3',
  terminal: 'st',
  memory: '40GB',
};
