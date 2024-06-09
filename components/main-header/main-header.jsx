import Link from "next/link"
import Image from "next/image"

import logo from "@/assets/logo.png"
import styles from "./main-header.module.css"
import HeaderBackground from "@/components/main-header/main-header-background/header-header"
import NavLink from "@/components/nav-link/nav-link"

const MainHeader = () => {
    return (
        <>
            <HeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    {/*normal img element  <img src={logo.src} alt="Web app logo"/> */}
                    <Image src={logo} alt="Web app logo" priority/>
                    Nextlevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">
                                Meals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    ) 
}

export default MainHeader