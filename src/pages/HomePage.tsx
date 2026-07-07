import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ServicesSection } from "../components/ServicesSection/ServicesSection";
import { CasesSection } from "../components/CasesSection/CasesSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { GallerySection } from "../components/GallerySection/GallerySection";
import { NewsSection } from "../components/NewsSection/NewsSection";
import { Footer } from "../components/Footer/Footer";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <HeroSection />
                <ServicesSection />
                <CasesSection />
                <AboutSection />
                <GallerySection />
                <NewsSection />
            </main>

            <Footer />
        </div>
    );
};

