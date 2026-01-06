"use client";

import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import MapIcon from "@mui/icons-material/Map";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

function MapDrawer() {
    const [open, setOpen] = useState(false);

    const DrawerList = (
        <Box sx={{ width: 260 }}>
            <Box sx={{ display: "flex", padding: "6px" }}>
                <Box component="a" href="/" sx={{ width: "100%" }}>
                    <img style={{ height: "46px" }} src={"/logo.png"} alt="logo"></img>
                </Box>
                <Box>
                    <IconButton
                        aria-label="Закрити"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon
                            sx={{
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "rotate(90deg)",
                                },
                            }}
                        />
                    </IconButton>
                </Box>
            </Box>
            <Divider />
            <List>
                {[
                    { text: "Біографії", url: "/biographies", icon: <PersonIcon /> },
                    { text: "Вулиці", url: "#", icon: <MapIcon /> },
                    { text: "Підтримати", url: "#", icon: <VolunteerActivismIcon /> },
                ].map((option) => (
                    <ListItem key={option.text} disablePadding>
                        <ListItemButton component="a" href={option.url}>
                            <ListItemIcon>{option.icon}</ListItemIcon>
                            <ListItemText primary={option.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box
            sx={{
                display: { xs: "none", sm: "inherit" },
                position: "fixed",
                zIndex: 500,
                height: "100vh",
                backgroundColor: "white",
                width: "65px",
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "center", py: "20px" }}>
                <IconButton
                    aria-label="Меню"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    <MenuIcon
                        sx={{
                            color: "black",
                        }}
                    />
                </IconButton>
                <Drawer
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                >
                    {DrawerList}
                </Drawer>
            </Box>
        </Box>
    );
}

export default MapDrawer;
