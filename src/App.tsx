import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAppSelector } from '@/store/hooks';
import { createAppTheme } from '@/theme';
import AppRoutes from '@/routes/AppRoutes';
import AppGlobalStyles from "@/theme/globalStyles.tsx";

function App() {
    const mode = useAppSelector((state) => state.theme.mode);
    const theme = createAppTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppGlobalStyles />
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;
