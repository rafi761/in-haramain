"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ChevronDown } from "./Icons";
import Image from "next/image";
import Link from "next/link";

export default function AppBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Paket Umrah",
        "Tentang Kami",
        "Hubungi Kami"
    ];

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
    };

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#D7E4C0]">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden text-black"
                />
                <Link href="/">
                    <NavbarBrand>
                        <Image
                            src="/images/logo.png"
                            alt="In-haramain"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                        <p className="font-bold text-black">IN-HARAMAIN</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 text-black font-semibold text-base bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                PAKET UMRAH
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh VVIP
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh VIP
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh Reguler
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh Promo
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh Super Promo
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="#">
                        TENTANG KAMI
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 text-black font-semibold text-base bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                KONTEN
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="artikel"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            ARTIKEL
                        </DropdownItem>
                        <DropdownItem
                            key="video"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            VIDEO
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="#">
                        HUBUNGI KAMI
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex">
                    <Link href="#" className="px-3 py-2 rounded-2xl bg-[#EAC100] text-white">Daftar Sekarang</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 text-black font-semibold text-base bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                PAKET UMRAH
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh VVIP
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh VIP
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh Reguler
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh Promo
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvvip"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            Umroh Super Promo
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="#">
                        TENTANG KAMI
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 text-black font-semibold text-base bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                KONTEN
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="artikel"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            ARTIKEL
                        </DropdownItem>
                        <DropdownItem
                            key="video"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            className="text-black"
                        >
                            VIDEO
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="#">
                        HUBUNGI KAMI
                    </Link>
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}
