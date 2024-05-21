"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ChevronDown } from "./Icons";
import Image from "next/image";
import Link from "next/link";

export default function AppBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState("Open Menu")

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Toggle state
    };

    return (
        <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-[#EEEDEB]">
            <NavbarContent className="lg:mr-14">
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
                            className="object-contain max-xs:w-[50px] max-xs:h-[50px]"
                        />
                        <p className="font-bold text-black text-xs xs:text-base">IN-HARAMAIN TOUR</p>
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
                            <Link href="/paket1">Umroh Reguler</Link>
                        </DropdownItem>
                        {/* <DropdownItem
                            key="umrohreguler12hari"
                            className="text-black"
                        >
                            <Link href="/paket2">Umroh Reguler 12 Hari</Link>
                        </DropdownItem> */}
                        <DropdownItem
                            key="umrohpromo"
                            className="text-black"
                        >
                            <Link href="/paket3">Umroh Promo</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohsuperpromo"
                            className="text-black"
                        >
                            <Link href="/paket2">Umroh Super Promo</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="/about">
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
                    <Link href="/signin" className="px-3 py-2 rounded-2xl bg-[#EAC100] text-white text-sm sm:text-base sm:px-3 sm:py-2">Admin</Link>
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
                            <Link href="/paket1" onClick={() => toggleMenu()}>Umroh Reguler</Link>
                        </DropdownItem>
                        {/* <DropdownItem
                            key="umrohreguler12hari"
                            className="text-black"
                        >
                            <Link href="/paket2" onClick={() => toggleMenu()}>Umroh Reguler 12 Hari</Link>
                        </DropdownItem> */}
                        <DropdownItem
                            key="umrohpromo"
                            className="text-black"
                        >
                            <Link href="/paket3" onClick={() => toggleMenu()}>Umroh Promo</Link>
                        </DropdownItem>
                        <DropdownItem
                            key="umrohpromo"
                            className="text-black"
                        >
                            <Link href="/paket2" onClick={() => toggleMenu()}>Umroh Super Promo</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link className="text-black font-semibold" href="/about" onClick={() => toggleMenu()}>
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
                    <Link className="text-black font-semibold" href="/contact" onClick={() => toggleMenu()}>
                        HUBUNGI KAMI
                    </Link>
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}
