"use client";

import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Link from "next/link";

const PAGES = [
    { label: "Мапа", link: "/map" },
    { label: "Біографії", link: "/biographies" },
    { label: "Вулиці", link: "#" },
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: "white", color: "black", borderBottom: "1px solid oklch(92.8% 0.006 264.531)" }}
        >
            <Container maxWidth="xl" disableGutters>
                <Toolbar>
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <img style={{ height: "56px" }} src={"/logo.png"} alt="logo"></img>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            keepMounted
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {[...PAGES, { label: "Підтримати", link: "#" }].map((page) => (
                                <Link key={page.label} href={page.link}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: "center" }}>{page.label}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: "flex", md: "none" },
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <img style={{ minWidth: "215px", height: "54px" }} src={"/logo.png"} alt="logo"></img>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                        {PAGES.map((page) => (
                            <Button
                                key={page.label}
                                onClick={handleCloseNavMenu}
                                href={page.link}
                                sx={{ my: 2, mx: 1.5, color: "#676767", display: "block" }}
                            >
                                <Typography>{page.label}</Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                        <Button href="#" variant="contained" color="success" endIcon={<VolunteerActivismIcon />}>
                            Підтримати
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
