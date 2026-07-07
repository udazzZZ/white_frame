import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.siteFooter}>
            <div className={styles.inner}>
                <img
                    className={styles.pixelsFooter}
                    src="/pixels-footer.svg"
                    alt=""
                    aria-hidden="true"
                />
                <a
                    className={styles.logo}
                    href="#hero"
                    aria-label="White Frame"
                >
                    <img src="/footer-logo.svg" alt="" />
                </a>

                <nav className={styles.nav} aria-label="Навигация в футере">
                    <a className={styles.link} data-active="true" href="#hero">
                        Главная
                    </a>
                    <a className={styles.link} href="#cases">
                        Кейсы
                    </a>
                    <a className={styles.link} href="#services">
                        Услуги
                    </a>
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

                <div className={styles.contacts}>
                    <a href="tel:+78431234567">+7 843 123 45 67</a>
                    <a href="mailto:info@whiteframe.ru">info@whiteframe.ru</a>
                </div>

                <ul className={styles.social} aria-label="Социальные сети">
                    <li>
                        <a href="/" aria-label="Instagram">
                            <img src="/instagram-white.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/" aria-label="VK">
                            <img src="/vk-white.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/" aria-label="Facebook">
                            <img src="/facebook-white.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/" aria-label="Google Play">
                            <img src="/google-play-white.svg" alt="" />
                        </a>
                    </li>
                </ul>

                <p className={styles.copy}>
                    © 2021 – White Frame, Все&#160;права защищены.
                </p>
            </div>
        </footer>
    );
};
