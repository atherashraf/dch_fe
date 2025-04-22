// src/theme/globalStyles.ts

import {GlobalStyles} from '@mui/material';

const AppGlobalStyles = () => (
    <GlobalStyles
        styles={(theme) => ({
            '::-webkit-scrollbar': {
                width: '8px',
                height: '8px',
            },
            '::-webkit-scrollbar-track': {
                background: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
                backgroundColor:
                    theme.palette.mode === 'light'
                        ? 'rgba(0,0,0,0.4)'
                        : 'rgba(255,255,255,0.4)',
                borderRadius: '10px',
                border: '2px solid transparent',
                backgroundClip: 'content-box',
            },
            '::-webkit-scrollbar-thumb:hover': {
                backgroundColor:
                    theme.palette.mode === 'light'
                        ? 'rgba(0,0,0,0.6)'
                        : 'rgba(255,255,255,0.6)',
            },
            '*': {
                scrollbarWidth: 'thin',
                scrollbarColor:
                    theme.palette.mode === 'light'
                        ? 'rgba(0,0,0,0.4) transparent'
                        : 'rgba(175,148,45,0.4) transparent',
            },
        })}
    />
);

export default AppGlobalStyles;
