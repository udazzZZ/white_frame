import { Header } from "../components/Header/Header";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <section
                    className={styles.heroSection}
                    id="hero"
                    aria-label="Главная"
                >
                    <div className={styles.heroInner}>
                        <h1>Цифровые решения для бизнеса и государства</h1>
                    </div>
                </section>
            </main>
        </div>
    );
};
