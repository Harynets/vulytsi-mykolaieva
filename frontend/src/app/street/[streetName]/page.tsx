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
    console.log(streetData?.person);
    return (
        <div className="flex justify-center items-center">
            <div className="flex w-2/5 flex-col">
                <p className="text-4xl mt-4 font-bold">
                    {streetData?.person.name} {new Date(streetData?.person.date_of_birth).getFullYear()} –{" "}
                    {new Date(streetData?.person.date_of_death).getFullYear()}
                </p>
                <img className="rounded my-4" src={`${streetData?.person.photo}`} alt={`${streetData?.person.name}`} />
                <p className="text-2xl font-semibold my-2">Біографічна довідка</p>
                {streetData?.person.short_biography.split("\n").map((elem: string, index: number) => {
                    return (
                        <p className="text-gray-800 indent-8 text-justify max-w-2xl" key={index}>
                            {elem}
                        </p>
                    );
                })}
                <div className="my-7 flex flex-col">
                    <q className="text-4xl font-bold my-2">{streetData?.person.quote}</q>
                    <div className="flex justify-end">
                        <p className="text-[#777777] my-2">{streetData?.person.name}</p>
                    </div>
                </div>
                <p className="text-2xl font-semibold mb-2">Розгорнута біографія</p>
                {streetData?.person.biography.split("\n").map((elem: string, index: number) => {
                    return (
                        <p className="text-gray-800 indent-8 text-justify" key={index}>
                            {elem}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default StreetPage;
