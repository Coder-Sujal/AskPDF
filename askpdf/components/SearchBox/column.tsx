"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Message = {
    id: string,
    title: string,
    subtitle: string,
    date : Date
}

export const columns : ColumnDef<Message>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "date",
        header: "Date"
    }
]