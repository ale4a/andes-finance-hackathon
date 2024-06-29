import React, { RefObject } from 'react';
import Image from 'next/image';
import LanguageSwitcher from '../Global/LanguageSwitcher';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

interface ScrollComponentProps {
  scrollToSection: (index: number) => void;
  activeSection: number;
}

const HeaderHome: React.FC<ScrollComponentProps> = ({ scrollToSection, activeSection }) => {
  const { t } = useTranslation();
  return (
    // <header className="bg-white p-4 shadow-md">
    //   <div className="container mx-auto flex items-center justify-between">
    //     <div className="flex items-center">
    //       <Image src="/images/logo.svg" alt="Logo" width={300} height={300} />
    //     </div>
    //     <nav className="flex space-x-8 font-medium text-gray-700">
    //       <Link href="/">
    //         <p className="hover:text-gray-900">Inicio</p>
    //       </Link>
    //       <Link href="/how-it-works">
    //         <p className="hover:text-gray-900">¿Cómo funddciona?</p>
    //       </Link>
    //       <Link href="/learn">
    //         <p className="hover:text-gray-900">Aprende</p>
    //       </Link>
    //     </nav>
    //     <div className="flex space-x-4">
    //       <button className="border-primary-normal text-primary-normal rounded border-2 px-4 py-2 font-bold">
    //         INICIA SESIÓN
    //       </button>
    //       <button className="bg-primary-normal hover:bg-primary-hover rounded px-4 py-2 font-bold text-white">
    //         REGÍSTRATE
    //       </button>
    //       <LanguageSwitcher />
    //     </div>
    //   </div>
    // </header>

    <Navbar className="bg-background-1 p-4" maxWidth={'2xl'}>
      <NavbarContent justify="end">
        <NavbarBrand>
          <Link color={activeSection === 0 ? undefined : 'foreground'}>
            <Image src="/images/logo.svg" alt="Logo" width={300} height={300} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="w-1/2 gap-20" justify="center">
        <NavbarItem>
          <Link
            color={activeSection === 0 ? undefined : 'foreground'}
            onPress={() => scrollToSection(0)}
          >
            {t('navbar.home')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={activeSection === 1 ? undefined : 'foreground'}
            onPress={() => scrollToSection(1)}
          >
            {t('navbar.howWorks')}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color={activeSection === 2 ? undefined : 'foreground'}
            onPress={() => scrollToSection(2)}
          >
            {t('navbar.learning')}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="primary"
            href="#"
            size="lg"
            radius="full"
            variant="bordered"
            className="text-black "
          >
            {t('navbar.logIn')}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="solid"
            size="lg"
            radius="full"
            className="text-black "
          >
            {t('navbar.signUp')}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderHome;
