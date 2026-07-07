import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const mobileMenuClassName = isMenuOpen
        ? `${styles.mobileMenu} ${styles.mobileMenuOpen}`
        : styles.mobileMenu;
    const stickyHeaderClassName = isStickyVisible
        ? `${styles.stickyHeader} ${styles.stickyHeaderVisible}`
        : styles.stickyHeader;
    const navGroupRightClassName = `${styles.navGroup} ${styles.navGroupRight}`;

    useEffect(() => {
        document.body.classList.toggle("is-menu-open", isMenuOpen);

        return () => document.body.classList.remove("is-menu-open");
    }, [isMenuOpen]);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingUp = currentScrollY < previousScrollY;
            const isPastMainHeader = currentScrollY > 180;

            setIsStickyVisible(isScrollingUp && isPastMainHeader);
            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={styles.siteHeader}>
                <div className={styles.inner}>
                    <a
                        className={styles.logo}
                        href="#hero"
                        aria-label="White Frame"
                    >
                        <img src="/logo.svg" alt="" />
                    </a>

                    <div className={styles.navGroup}>
                        <a className={styles.link} data-active="true" href="#hero">
                            Главная
                        </a>
                        <a className={styles.link} href="#cases">
                            Кейсы
                        </a>
                        <a className={styles.link} href="#services">
                            Услуги
                        </a>
                    </div>
                    <div className={navGroupRightClassName}>
                        <a className={styles.link} href="#contacts">
                            Контакты
                        </a>
                        <a className={styles.link} href="#vacancies">
                            Вакансии
                        </a>
                        <a className={styles.link} href="#news">
                            Новости
                        </a>
                    </div>

                    <button
                        className={styles.menuButton}
                        type="button"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        aria-label="Открыть меню"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <img src="/menu-icon.svg" alt="" />
                    </button>
                </div>
            </header>

            <header className={stickyHeaderClassName}>
                <div className={styles.stickyInner}>
                    <a
                        className={styles.stickyLogo}
                        href="#hero"
                        aria-label="White Frame"
                    >
                        <img src="/logo.svg" alt="" />
                    </a>

                    <nav className={styles.stickyNav} aria-label="Навигация">
                        <a className={styles.link} data-active="true" href="#hero">
                            Главная
                        </a>
                        <a className={styles.link} href="#cases">
                            Кейсы
                        </a>
                        <a className={styles.link} href="#services">
                            Услуги
                        </a>
                    </nav>

                    <nav className={styles.stickyNav} aria-label="Дополнительная навигация">
                        <a className={styles.link} href="#contacts">
                            Контакты
                        </a>
                        <a className={styles.link} href="#vacancies">
                            Вакансии
                        </a>
                        <a className={styles.link} href="#news">
                            Новости
                        </a>
                    </nav>

                    <button
                        className={styles.stickyMenuButton}
                        type="button"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        aria-label="Открыть меню"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <img src="/menu-icon.svg" alt="" />
                    </button>
                </div>
            </header>

            <div className={mobileMenuClassName} id="mobile-menu">
                <button
                    className={styles.mobileMenuClose}
                    type="button"
                    aria-label="Закрыть меню"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src="/close-icon.svg" alt="" />
                </button>

                <div className={styles.mobileMenuBody}>
                    <nav
                        className={styles.mobileMenuNav}
                        aria-label="Мобильная навигация"
                    >
                        <div className={styles.mobileMenuGroup}>
                            <a
                                className={styles.link}
                                data-active="true"
                                href="#hero"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Главная
                            </a>
                            <a
                                className={styles.link}
                                href="#cases"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Кейсы
                            </a>
                            <a
                                className={styles.link}
                                href="#services"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Услуги
                            </a>
                        </div>
                        <div className={styles.mobileMenuGroup}>
                            <a
                                className={styles.link}
                                href="#contacts"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Контакты
                            </a>
                            <a
                                className={styles.link}
                                href="#vacancies"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Вакансии
                            </a>
                            <a
                                className={styles.link}
                                href="#news"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Новости
                            </a>
                        </div>
                    </nav>

                    <ul
                        className={styles.mobileMenuSocial}
                        aria-label="Социальные сети"
                    >
                        <li>
                            <a href="/" aria-label="Instagram">
                                <img src="/instagram.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/" aria-label="VK">
                                <img src="/vk.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/" aria-label="Facebook">
                                <img src="/facebook.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/" aria-label="Google Play">
                                <img src="/google-play.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

