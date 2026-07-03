import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <HeroSection />
            </main>
        </div>
    );
};
