import React from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex justify-center shadow'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Inicio</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/product/register" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Cadastro de Produtos</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sobre nós</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contato</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
export default Navbar
