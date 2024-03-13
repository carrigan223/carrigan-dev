"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isLoggedIn = false;
  const navString = isLoggedIn ? "Logout" : "Login";

  const menuItems = [
    "Home",
    "Projects",
    "About",
    "Contact Me",
    "Blog",
    navString,
  ];

  return (
    <Navbar
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
      }}
      maxWidth="full"
      position="sticky"
      isBordered={true}
      isBlurred={true}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=" sm:hidden"
        />

        <NavbarBrand className="text-2xl font-bold ">
          <Link
            href="#"
            style={{
              textShadow: "4px 4px 1px rgba(57, 203, 203, 0.71)",
              border: "2px solid rgba(57, 203, 203, 0.71)",
              boxShadow: "4px 4px 1px rgba(57, 203, 203, 0.71)",
            }}
            className="h-full p-2 font-bold bg-black"
          >
            AC
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="justify-around hidden w-full text-lg lg:gap-32 border-x-2 sm:flex sm:gap-4 md:gap-16"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            style={{
              border: "2px solid rgba(57, 203, 203, 0.71)",
              padding: "0.5rem 1rem",
            }}
            className="hover:bg-black hover:text-white"
            as={Link}
            color="default"
            href="#"
            variant="shadow"
          >
            {navString}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="border-t-2">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
