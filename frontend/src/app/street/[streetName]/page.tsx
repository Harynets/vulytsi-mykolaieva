import axios from "axios";
import React from "react";

async function StreetPage({ params }: { params: Promise<{ streetName: string }> }) {
    const { streetName } = await params;

    let streetData: any = null;
    try {
        streetData = await axios.get(`http://127.0.0.1:8000/street/${streetName.replace(/_/g, " ")}?format=json`);
        streetData = streetData.data;
    } catch (error) {
        console.error("Error:", error);
    }

    return (
        <div>
            <p className="text-3xl font-bold">{streetData?.name}</p>
            <p>{streetData?.description}</p>
        </div>
    );
}

export default StreetPage;
