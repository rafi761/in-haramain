"use client"

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import { AiOutlineDelete } from "react-icons/ai";
import { deletePaket } from "@/lib/actions/action";
import Image from "next/image";

interface IPaketData {
    id: string;
    harga: string;
    periode_program: string;
    judul_program: string;
    durasi_program: string;
    gambar: string;
    list_benefit: string[]
}

interface IPaketDataProps {
    listPaketData: IPaketData[]
}

export default function TableData({ listPaketData }: IPaketDataProps) {
    return (
        <Table aria-label="Example static collection table" className="max-md:overflow-x-scroll">
            <TableHeader>
                <TableColumn>Judul_Program</TableColumn>
                <TableColumn>Periode Program</TableColumn>
                <TableColumn>Durasi_Program</TableColumn>
                <TableColumn>List Benefit</TableColumn>
                <TableColumn>Harga</TableColumn>
                <TableColumn>Gambar</TableColumn>
                <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
                {listPaketData.map((item, index) => (
                    <TableRow key={index + 1} className="text-black">
                        <TableCell>{item.judul_program}</TableCell>
                        <TableCell>{item.periode_program}</TableCell>
                        <TableCell>{item.durasi_program}</TableCell>
                        <TableCell>{item.list_benefit.toString()}</TableCell>
                        <TableCell>{item.harga}</TableCell>
                        <TableCell>
                            <Image
                                src={item.gambar}
                                alt="Gambar Paket"
                                width={30}
                                height={30}
                                className="object-contain rounded-xl"
                            />
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-x-2">
                                {/* <ModalButtonUpdate id={item.id} hargaPaket={item.harga} periode_program={item.periode_program} judul_program={item.judul_program} durasi_program={item.durasi_program} gambarPaket={item.gambar} list_benefit={item.list_benefit} /> */}
                                <AiOutlineDelete size={20} onClick={() => deletePaket(item.id)} className="cursor-pointer" />
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
