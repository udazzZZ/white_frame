import { useState } from "react";
import { Header } from "../components/Header/Header";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ServicesSection } from "../components/ServicesSection/ServicesSection";
import { CasesSection } from "../components/CasesSection/CasesSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { GallerySection } from "../components/GallerySection/GallerySection";
import { NewsSection } from "../components/NewsSection/NewsSection";
import { Footer } from "../components/Footer/Footer";
import { FeedbackModal } from "../components/FeedbackModal/FeedbackModal";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <HeroSection />
                <ServicesSection onContactClick={() => setIsFeedbackOpen(true)} />
                <CasesSection />
                <AboutSection />
                <GallerySection />
                <NewsSection />
            </main>

            <Footer />

            <FeedbackModal
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
            />
        </div>
    );
};
