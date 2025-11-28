import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { PersonInterface } from "@/app/types/PersonInterface";
import PersonQuote from "./components/PersonQuote";
import PersonHeader from "./components/PersonHeader";
import PersonBiography from "./components/PersonBiography";

async function PersonPage({ params }: { params: Promise<{ personName: string }> }) {
    const { personName } = await params;

    let personData: PersonInterface | null = null;
    try {
        personData = (await axios.get(`http://127.0.0.1:8000/person/${personName.replace(/_/g, " ")}?format=json`)).data;
    } catch (error) {
        console.error("Error:", error);
    }

    if (!personData) return <Typography>Error</Typography>;

    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: { xs: "90%", lg: "65%", xl: "54%" }, display: "flex", flexDirection: "column" }}>
                    <PersonHeader
                        name={personData.name}
                        photo={personData.photo}
                        date_of_birth={personData.date_of_birth}
                        date_of_death={personData.date_of_death}
                        short_biography={personData.short_biography}
                        category={personData.category}
                    />

                    {personData.quote ? <PersonQuote quote={personData.quote} name={personData.name} /> : null}

                    <PersonBiography biography={personData.biography} />
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default PersonPage;
