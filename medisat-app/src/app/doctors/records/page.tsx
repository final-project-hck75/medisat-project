import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"

import React from "react";
import RekamMedis from "../../../components/RekamMedisCard";
import HistoryCard from "../../../components/HistoryCard";

export default function Records() {
    return (
        <div className="flex flex-row gap-4 mt-20 px-8 bg-pageBackground min-h-screen">
            <div className="w-2/3">
                <RekamMedis />
            </div>
            <div className="w-1/3">
                <HistoryCard />
            </div>
        </div>
    );
}
