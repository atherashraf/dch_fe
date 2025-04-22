import { AppBar, Toolbar, Typography, Box, Button, IconButton, Container } from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/slices/themeSlice';
import { useTheme } from '@mui/material/styles';

const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Layers', path: '/layers' },
    { label: 'Maps', path: '/maps' },
    { label: 'Data Marts', path: '/datamarts' },
    { label: 'Documents', path: '/documents' },
    { label: 'Projects ▼', path: '#' },
    { label: 'Applications ▼', path: '#' },
];

const DCHLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.theme.mode);
    const theme = useTheme();

    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.background.default,
            }}
        >
            {/* Fixed Header */}
            <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1300 }}>
                <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, height: 64 }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/img/gop_logo.png" alt="Logo" height="40" style={{ marginRight: '20px' }} />
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    color="inherit"
                                    onClick={() => item.path !== '#' && navigate(item.path)}
                                    sx={{
                                        mx: 0.5,
                                        bgcolor: isActive(item.path) ? theme.palette.secondary.main : 'transparent',
                                        fontWeight: isActive(item.path) ? 'bold' : 'normal',
                                        color: isActive(item.path) ? '#fff' : 'rgba(255,255,255,0.7)',
                                        '&:hover': {
                                            bgcolor: theme.palette.secondary.main,
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>

                        {/* Theme Toggle + Sign In */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleTheme())} color="inherit">
                                {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                            </IconButton>
                            <Button color="inherit" sx={{ ml: 2 }}>Sign in</Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Green Strip */}
                <Box sx={{ backgroundColor: theme.palette.secondary.main, height: '40px' }} />
            </Box>

            {/* Main Content: Scrollable between Header and Footer */}
            <Box sx={{ flexGrow: 1, mt: 13, px: 2, overflowY: 'auto' }}>
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
            </Box>

            {/* Footer */}
            <Box
                textAlign="center"
                p={2}
                sx={{
                    width: '100vw',
                    bgcolor: (theme) => theme.palette.background.paper,
                    color: (theme) => theme.palette.text.secondary,
                }}
            >
                <Typography variant="body2">
                    © 2024 Government of Punjab - Data Clearing House
                </Typography>
            </Box>
        </Box>
    );
};

export default DCHLayout;
