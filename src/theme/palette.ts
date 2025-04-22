import { PaletteMode } from '@mui/material';

const lightPalette = {
    primary: { main: '#212121' }, // Blackish navbar
    secondary: { main: '#4e5a3d' }, // Green strip
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#212121', secondary: '#757575' },
};

const darkPalette = {
    primary: { main: '#212121' }, // Blackish navbar
    secondary: { main: '#4e5a3d' }, // Green strip
    background: { default: '#121212', paper: '#1d1d1d' },
    text: { primary: '#ffffff', secondary: '#b0bec5' },
};

export const getPalette = (mode: PaletteMode) => ({
    ...(mode === 'light' ? lightPalette : darkPalette),
});
