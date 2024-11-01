import React from "react";
import RekamMedis from "../../../../components/RekamMedisCard";
import HistoryCard from "../../../../components/HistoryCard";

export default function Records() {
    return (
        <div className="flex flex-row gap-4 px-8 min-h-screen w-full">
            <div className="w-3/5">
                <h1 className="text-xl font-bold mt-5 leading-tight tracking-tight text-gray-900 dark:text-white">
                    Rekam Medis dan Resep Obat
                </h1>
                <RekamMedis />
            </div>
            <div className="w-3/5">
                <h1 className="text-xl font-bold mt-5 leading-tight tracking-tight text-gray-900 dark:text-white">
                    History
                </h1>
                <HistoryCard />
            </div>
        </div>
    );
}
