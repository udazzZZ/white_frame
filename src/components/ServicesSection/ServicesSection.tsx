import { Button } from "../Button/Button";
import styles from "./ServicesSection.module.scss";

export const ServicesSection = () => {
    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.inner}>
                <article className={styles.serviceCard}>
                    <h2>вэб</h2>
                    <p>
                        Разработка и поддержка порталов, сайтов, web-приложений,
                        и много много много всего умеем.
                    </p>
                </article>

                <article className={styles.serviceCard}>
                    <h2>приложения</h2>
                    <p>
                        Разработка и поддержка порталов, сайтов, web-приложений,
                        и много много много всего умеем.
                    </p>
                </article>

                <article className={styles.serviceCard}>
                    <h2>blockchain</h2>
                    <p>
                        Разработка и поддержка порталов, сайтов, web-приложений,
                        и много много много всего умеем.
                    </p>
                </article>

                <article className={styles.serviceCard}>
                    <h2>игры</h2>
                    <p>
                        Разработка и поддержка порталов, сайтов, web-приложений,
                        и много много много всего умеем.
                    </p>
                </article>

                <article className={styles.serviceCard}>
                    <h2>дизайн</h2>
                    <p>
                        Разработка и поддержка порталов, сайтов, web-приложений,
                        и много много много всего умеем.
                    </p>
                </article>

                <article className={styles.serviceCard}>
                    <h2>интернет-маркетинг</h2>
                    <p>
                        Разработка и поддержка порталов, сайтов, web-приложений,
                        и много много много всего умеем.
                    </p>
                </article>

                <div className={styles.consultLink}>
                    <span>консультируем :)</span>
                    <img src="/arrow-right.svg" alt="" />
                </div>

                <Button className={styles.contactButton} href="#contacts">
                    Свяжитесь с нами
                </Button>
            </div>
        </section>
    );
};
