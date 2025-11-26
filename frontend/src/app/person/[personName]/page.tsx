import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import React from "react";

async function StreetPage({ params }: { params: Promise<{ personName: string }> }) {
    const { personName } = await params;

    let personData: any = null;
    try {
        personData = await axios.get(`http://127.0.0.1:8000/person/${personName.replace(/_/g, " ")}?format=json`);
        personData = personData.data;
    } catch (error) {
        console.error("Error:", error);
    }

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="flex w-2/5 flex-col">
                    <p className="text-4xl mt-4 font-bold">
                        {personData.name} {new Date(personData.date_of_birth).getFullYear()} –{" "}
                        {new Date(personData.date_of_death).getFullYear()}
                    </p>
                    <img className="rounded my-4" src={`${personData.photo}`} alt={`${personData.name}`} />
                    <p className="text-2xl font-semibold my-2">Біографічна довідка</p>
                    {personData.short_biography.split("\n").map((elem: string, index: number) => {
                        return (
                            <p className="text-gray-800 indent-8 text-justify max-w-2xl" key={index}>
                                {elem}
                            </p>
                        );
                    })}
                    <div className="my-7 flex flex-col">
                        <q className="text-4xl font-bold my-2">{personData.quote}</q>
                        <div className="flex justify-end">
                            <p className="text-[#777777] my-2">{personData.name}</p>
                        </div>
                    </div>
                    <p className="text-2xl font-semibold mb-2">Розгорнута біографія</p>
                    {personData.biography.split("\n").map((elem: string, index: number) => {
                        return (
                            <p className="text-gray-800 indent-8 text-justify" key={index}>
                                {elem}
                            </p>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StreetPage;
