import { useState } from "react";
import styles from "./GallerySection.module.scss";

const galleryImages = [
    "/gallery-img1.png",
    "/gallery-img2.png",
    "/gallery-img3.png",
    "/gallery-img4.png",
    "/gallery-img5.png",
    "/gallery-img6.png",
];

export const GallerySection = () => {
    const [activeImage, setActiveImage] = useState(galleryImages[0]);

    const handleNextImage = () => {
        const activeIndex = galleryImages.indexOf(activeImage);
        const nextIndex = (activeIndex + 1) % galleryImages.length;

        setActiveImage(galleryImages[nextIndex]);
    };

    return (
        <section className={styles.gallerySection}>
            <img
                className={styles.pixels}
                src="/gallery-pixels.svg"
                alt=""
                aria-hidden="true"
            />

            <div className={styles.galleryInner}>
                <div className={styles.mainImageWrap}>
                    <img className={styles.mainImage} src={activeImage} alt="" />
                </div>

                <div className={styles.side}>
                    <div className={styles.thumbs}>
                        {galleryImages.map((image, index) => (
                            <button
                                className={styles.thumb}
                                type="button"
                                key={image}
                                onClick={() => setActiveImage(image)}
                                aria-label={`Показать изображение ${index + 1}`}
                                data-active={activeImage === image}
                            >
                                <img src={image} alt="" />
                            </button>
                        ))}
                    </div>

                    <img
                        className={styles.logo}
                        src="/logo.svg"
                        alt="White Frame"
                    />

                    <button
                        className={styles.arrow}
                        type="button"
                        onClick={handleNextImage}
                        aria-label="Показать следующее изображение"
                    >
                        <img src="/arrow-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </section>
    );
};