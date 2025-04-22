import { createTheme } from '@mui/material/styles';
import { getPalette } from './palette';
import typography from './typography';
import { PaletteMode } from '@mui/material';

export const createAppTheme = (mode: PaletteMode) => {
    return createTheme({
        palette: {
            mode,
            ...getPalette(mode),
        },
        typography,
    });
};
