"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ChevronDown } from "./Icons";
import Image from "next/image";
import Link from "next/link";

export default function AppBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState("Open Menu")

    const menuItems = [
        "Paket Umrah",
        "Tentang Kami",
        "Hubungi Kami"
    ];

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Toggle state
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Close menu
    };

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-[#EEEDEB]">
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
                        <p className="font-bold text-black max-md:text-base">IN-HARAMAIN</p>
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
                            className="text-black"
                        >
                            <Link href="/">Umroh VVIP</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvip"
                            className="text-black"
                        >
                            <Link href="/">Umroh VIP</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohreguler9hari"
                            className="text-black"
                        >
                            <Link href="/paket1">Umroh Reguler 9 Hari</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohreguler12hari"
                            className="text-black"
                        >
                            <Link href="/paket2">Umroh Reguler 12 Hari</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohpromo"
                            className="text-black"
                        >
                            <Link href="/">Umroh Promo</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohsuperpromo"
                            className="text-black"
                        >
                            <Link href="/">Umroh Super Promo</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="#about">
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
                            className="text-black"
                        >
                            ARTIKEL
                        </DropdownItem>
                        <DropdownItem
                            key="video"
                            className="text-black"
                        >
                            VIDEO
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="/contact">
                        HUBUNGI KAMI
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex">
                    <Link href="/pendaftaran" className="px-3 py-2 rounded-2xl bg-[#EAC100] text-white">Daftar</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="w-fit">
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
                            className="text-black"
                        >
                            <Link href="/" onClick={() => toggleMenu()}>Umroh VVIP</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohvip"
                            className="text-black"
                        >
                            <Link href="/" onClick={() => toggleMenu()}>Umroh VIP</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohreguler9hari"
                            className="text-black"
                        >
                            <Link href="/paket1" onClick={() => toggleMenu()}>Umroh Reguler 9 Hari</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohreguler12hari"
                            className="text-black"
                        >
                            <Link href="/paket2" onClick={() => toggleMenu()}>Umroh Reguler 12 Hari</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohpromo"
                            className="text-black"
                        >
                            <Link href="/" onClick={() => toggleMenu()}>Umroh Promo</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohpromo"
                            className="text-black"
                        >
                            <Link href="/" onClick={() => toggleMenu()}>Umroh Super Promo</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="#about" onClick={() => toggleMenu()}>
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
                    <Link className="text-black font-semibold" href="/contact" onClick={() => toggleMenu()}>
                        HUBUNGI KAMI
                    </Link>
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}
