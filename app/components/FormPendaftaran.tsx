"use client"

import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

const FormPendaftaran = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <form method="POST" action="https://whatsapp-sender-oagaov4pgq-uc.a.run.app/" className="w-full flex flex-col gap-y-8">
            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
                <Input size="md" type="hidden" name="phoneNumber" value="6283838732975" className="hidden" />
                <Input size="md" type="text" name="Program Keberangkatan" label="Program Keberangkatan" labelPlacement="outside" />
                <Input size="md" type="text" name="Periode Keberangkatan" label="Periode Keberangkatan" labelPlacement="outside" />
                <Input size="md" type="text" name="Nama Lengkap" label="Nama Lengkap" labelPlacement="outside" />
                <Input size="md" type="text" name="Jenis Kelamin" label="Jenis Kelamin" labelPlacement="outside" />
                <Input size="md" type="number" name="NIK" label="Nomor NIK" labelPlacement="outside" />
                <Input size="md" type="text" name="TTL" label="Tempat Tanggal Lahir" labelPlacement="outside" />
                <Input size="md" type="number" name="Pasport" label="Nomor Pasport" labelPlacement="outside" />
                <Input size="md" type="text" name="Tanggal Keluar Pasport" label="Tanggal Di Keluarkan Pasport" labelPlacement="outside" />
                <Input size="md" type="text" name="Tempat Keluar Pasport" label="Tempat Di Keluarkan Pasport" labelPlacement="outside" />
                <Input size="md" type="number" name="No Telp / HP" label="No Telp / HP" labelPlacement="outside" />
                <Input size="md" type="text" name="Pekerjaan" label="Pekerjaan" labelPlacement="outside" />
                <Input size="md" type="text" name="Alamat" label="Alamat" labelPlacement="outside" />
            </div>

            <h1 className="text-2xl text-black mt-5">KELUARGA YANG DAPAT DI HUBUNGI</h1>

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
                <Input size="md" type="text" name="Nama" label="Nama" labelPlacement="outside" />
                <Input size="md" type="number" name="No HP" label="No HP" labelPlacement="outside" />
                <Input size="md" type="number" name="No NIK" label="No NIK" labelPlacement="outside" />
                <Input size="md" type="text" name="Hubungan" label="Hubungan" labelPlacement="outside" />
                <Input size="md" type="text" name="Alamat" label="Alamat" labelPlacement="outside" />
            </div>

            <Button className="bg-[#EAC100] text-white" type="submit">
                Daftar
            </Button>
        </form>
    )
}

export default FormPendaftaran