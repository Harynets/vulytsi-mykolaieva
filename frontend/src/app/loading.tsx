import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress size={60} />
            <Typography variant="h5" sx={{ margin: "16px" }}>
                Завантаження
            </Typography>
        </Box>
    );
}
