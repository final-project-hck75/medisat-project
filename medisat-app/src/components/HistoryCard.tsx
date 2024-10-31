import React from "react";

export default function HistoryCard() {
    return (
        <div className="w-full bg-white rounded-lg shadow border p-6 dark:bg-gray-800 border-gray-200 overflow-y-scroll max-h-96">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                History
            </h1>
            <div className="space-y-4 mt-4">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded shadow dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                        Data
                    </div>
                ))}
            </div>
        </div>
    );
}
