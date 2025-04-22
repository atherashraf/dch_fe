// DCHHomePage.tsx
import {Box, Button, Container, Grid, Typography, Link, useTheme} from "@mui/material";
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

const sections = [
    {
        title: "LAYERS",
        description: "Click to search for geospatial data published by other users, organizations and public sources. Download data in standard formats.",
        icon: <CropSquareRoundedIcon sx={{fontSize: 80, transform: "rotate(45deg)"}}/>,
        buttonLabel: "Add Layers »",
        link: "/layers/",
        buttonLink: "/layers/upload/shp/",
    },
    {
        title: "MAPS",
        description: "Data is available for browsing, aggregating and styling to generate maps which can be shared publicly or restricted to specific users only.",
        icon: <LocationOnRoundedIcon sx={{fontSize: 80}}/>,
        buttonLabel: "Create Maps »",
        link: "/maps/",
        buttonLink: "/maps/create_map/",
    },
    {
        title: "DOCUMENTS",
        description: "Click to search for documents published by other users, organizations and public sources. Download data in standard formats like pdf, word, and/or excel.",
        icon: <MenuBookRoundedIcon sx={{fontSize: 80}}/>,
        buttonLabel: "Upload Document »",
        link: "/documents/",
        buttonLink: "/documents/doc_upload/",
    },
];

const DCHHomePage = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Container
            maxWidth="xl"
            sx={{
                pt: 10,
                pb: 6,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? '#f5f5f5' : theme.palette.background.default, // 👈 adaptive
                borderRadius: 2,
            }}
        >
            {/* Banner Section */}
            <Grid container spacing={4} alignItems="center" mb={8}>
                <Grid size={{xs: 12, md: 8}}>
                    <Box textAlign="center">
                        {/* Image */}
                        <img
                            src="/img/dch_banner.png"
                            alt="Data clearinghouse"
                            style={{width: '100%', height: 'auto', display: 'block', margin: 0}}
                        />

                        {/* Color Draping Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                width: '100%',
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                                pointerEvents: 'none', // 👈 allow clicks through overlay
                                borderRadius: 2,
                            }}
                        />
                    </Box>


                </Grid>


                <Grid size={{xs: 12, md: 4}}>
                    <Typography variant="body1" sx={{color: 'text.primary', fontSize: '18px', lineHeight: 1.6}}>
                        A "one stop" access to all registered geographical information. It will provide an online
                        access service of spatial and socio economic data related to flood within the Punjab province.
                    </Typography>
                </Grid>
            </Grid>

            {/* GEOSPATIAL SECTION */}
            <Box sx={{p: 4, backgroundColor: isDark ? 'grey.900' : 'grey.200', borderRadius: 2, mb: 8}}>
                <Grid container spacing={4}>
                    <Grid size={{xs: 12, md: 8}}>
                        <Typography variant="h4" sx={{fontWeight: 'bold', mb: 2}}>
                            GEOSPATIAL DATA & SERVICES
                        </Typography>
                        <Typography variant="body1" sx={{fontSize: '18px', lineHeight: 1.6}}>
                            Geo-Spatial Platform is a Planning and Development Department (P&DD) Govt. of Punjab
                            initiative
                            that provides and shares geospatial data, services, and applications.
                        </Typography>
                    </Grid>

                    <Grid size={{xs: 12, md: 4}}>
                        <Typography variant="h5" sx={{fontWeight: 'bold', mb: 2}}>
                            Goal
                        </Typography>
                        <Typography variant="body1" sx={{fontSize: '18px', lineHeight: 1.6}}>
                            "Goal of Clearinghouse is to provide access to digital spatial data and related online
                            services for
                            data access, visualization, or order."
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Title */}
            <Box textAlign="center" mb={6}>
                <Typography variant="h4" sx={{color: '#4e5a3d', fontFamily: 'Adobe Hebrew, Open Sans', mb: 2}}>
                    Information Sharing Platform
                </Typography>
                <Typography variant="h5" sx={{color: '#4e5a3d', fontFamily: 'Adobe Hebrew, Open Sans'}}>
                    in the form of
                </Typography>
            </Box>

            {/* Cards Section */}
            <Grid container spacing={4}>
                {sections.map((section, index) => (
                    <Grid key={index} size={{xs: 12, md: 4}}>
                        <Box
                            sx={{
                                p: 4,
                                height: '100%',
                                textAlign: 'center',
                                backgroundColor: isDark ? 'grey.800' : 'background.paper',
                                borderRadius: 2,
                                boxShadow: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: '0.3s',
                                '&:hover': {
                                    boxShadow: 6,
                                    transform: 'translateY(-5px)',
                                },
                            }}
                        >
                            <Box>
                                <Link href={section.link} underline="none" color="inherit">
                                    <Box color="text.primary" mb={2}>
                                        {section.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{fontWeight: 'bold', mb: 1}}>
                                        {section.title}
                                    </Typography>
                                </Link>
                                <Typography variant="body2" sx={{fontSize: '16px', color: 'text.secondary', mb: 3}}>
                                    {section.description}
                                </Typography>
                            </Box>
                            <Button
                                variant="outlined"
                                href={section.buttonLink}
                                color="inherit" // 👈 inherit text color properly from the theme (works in both light and dark)
                                sx={{
                                    borderColor: 'text.primary',  // 👈 border color from theme
                                    color: 'text.primary',         // 👈 text color from theme
                                    '&:hover': {
                                        backgroundColor: 'action.hover',  // 👈 nice hover effect according to light/dark mode
                                        borderColor: 'text.primary',
                                    },
                                }}
                            >
                                {section.buttonLabel}
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
};

export default DCHHomePage;
