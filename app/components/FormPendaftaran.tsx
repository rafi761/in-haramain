"use client"

import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const FormPendaftaran = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <form method="POST" action="https://whatsapp-sender-oagaov4pgq-uc.a.run.app/" className="w-full flex flex-col gap-y-8">
            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
                <Input size="md" type="hidden" name="phoneNumber" value="6285292984909" className="hidden" />
                <div className="flex items-end">
                    <Select
                        label="Program Keberangkatan"
                        size="sm"
                        className="text-black rounded-full"
                        name="Program Keberangkatan"
                    >
                        <SelectItem key="Reguler 9 Hari" value="Reguler 9 Hari" className="text-black">
                            Reguler 9 Hari
                        </SelectItem>
                        <SelectItem key="Reguler 12 Hari" value="Reguler 12 Hari" className="text-black">
                            Reguler 12 Hari
                        </SelectItem>
                    </Select>
                </div>
                <div className="flex items-end">
                    <Select
                        label="Periode Keberangkatan"
                        size="sm"
                        className="text-black rounded-full"
                        name="Periode Keberangkatan"
                    >
                        <SelectItem key="Agustus - September 2024" value="Agustus - September 2024" className="text-black">
                            Agustus - September 2024
                        </SelectItem>
                    </Select>
                </div>
                <Input size="lg" type="text" name="Nama Lengkap" label="Nama Lengkap" labelPlacement="outside" />
                <div className="flex items-end">
                    <Select
                        label="Jenis Kelamin"
                        size="sm"
                        className="text-black rounded-full"
                        name="Jenis Kelamin"
                    >
                        <SelectItem key="Laki-laki" value="Laki-laki" className="text-black">
                            Laki-laki
                        </SelectItem>
                        <SelectItem key="Perempuan" value="Perempuan" className="text-black">
                            Perempuan
                        </SelectItem>
                    </Select>
                </div>
                <Input size="lg" type="number" name="NIK" label="Nomor NIK" labelPlacement="outside" />
                <Input size="lg" type="text" name="Tempat Lahir" label="Tempat Lahir" labelPlacement="outside" />
                <Input size="lg" type="date" name="Tanggal Lahir" label="Tanggal Lahir" labelPlacement="outside" placeholder="Tanggal Lahir" className="text-black" />
                <Input size="lg" type="number" name="Pasport" label="Nomor Pasport" labelPlacement="outside" />
                <Input size="lg" type="date" name="Tanggal Keluar Pasport" label="Tanggal Di Keluarkan Pasport" labelPlacement="outside" placeholder="Tanggal Keluar Pasport" className="text-black" />
                <Input size="lg" type="text" name="Tempat Keluar Pasport" label="Tempat Di Keluarkan Pasport" labelPlacement="outside" />
                <Input size="lg" type="number" name="No Telp / HP" label="No Telp / HP" labelPlacement="outside" />
                <Input size="lg" type="text" name="Pekerjaan" label="Pekerjaan" labelPlacement="outside" />
                <Input size="lg" type="text" name="Alamat" label="Alamat" labelPlacement="outside" />
                <Input size="lg" type="text" name="Info" label="Darimana dapat informasi tentang In-Haramain Tour ini ?" labelPlacement="outside" />
            </div>

            <Input
                isReadOnly
                type="text"
                name="KELUARGA YANG DAPAT DIHUBUNGI"
                className="max-w-xs hidden "
            />
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