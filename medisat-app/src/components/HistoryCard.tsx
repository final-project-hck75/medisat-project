import React from "react";

import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>


export default function HistoryCard({ className, ...props }: CardProps) {
    return (
        <div className="w-full bg-white rounded-lg my-5 shadow border p-6 dark:bg-gray-800 border-emerald-500 overflow-y-scroll max-h-96">
            <div className="space-y-4 mt-4">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded shadow dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                        <Card className={cn("w-[380px]", className)} {...props}>

                            <CardHeader>
                                <CardTitle className="w-full">
                                    <div className="flex flex-row">
                                        <div className="mr-2">
                                            <CheckIcon />
                                        </div>
                                        <div>
                                            Fani
                                        </div>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>

                                <div>
                                    <div
                                        key={index}
                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                Penyakit
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Asam Urat
                                            </p>

                                        </div>
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <div className="space-y-1">

                                            <p className="text-sm font-medium leading-none">
                                                Resep Obat
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                Asam Mefenamat,
                                                Paracetamol
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    );
}
