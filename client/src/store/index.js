import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './logo-transp.png',
  fullDecal: './logo-transp.png'
});

export default state;


