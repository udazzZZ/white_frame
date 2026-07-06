import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./CasesSection.module.scss";

const cases = [
    {
        image: "/cases/case-1.png",
        title: "Приложение учёта физической активности Meditate",
    },
    {
        image: "/cases/case-2.png",
        title: "Приложение учёта физической активности Meditate",
    },
    {
        image: "/cases/case-3.png",
        title: "Приложение учёта физической активности Meditate",
    },
    {
        image: "/cases/case-4.png",
        title: "Приложение учёта физической активности Meditate",
    },
    {
        image: "/cases/case-1.png",
        title: "Приложение учёта физической активности Meditate",
    },
    {
        image: "/cases/case-2.png",
        title: "Приложение учёта физической активности Meditate",
    },
    {
        image: "/cases/case-3.png",
        title: "Приложение учёта физической активности Meditate",
    },
    {
        image: "/cases/case-4.png",
        title: "Приложение учёта физической активности Meditate",
    },
];

type ProgressStyle = CSSProperties & {
    "--progress": number;
};

export const CasesSection = () => {
    const progressRef = useRef<HTMLDivElement | null>(null);
    const sliderWrapRef = useRef<HTMLDivElement | null>(null);
    const [sliderProgress, setSliderProgress] = useState(0);
    const [slidesOffsetAfter, setSlidesOffsetAfter] = useState(0);

    useEffect(() => {
        const updateSlidesOffset = () => {
            const progress = progressRef.current;
            const sliderWrap = sliderWrapRef.current;

            if (!progress || !sliderWrap) {
                return;
            }

            const progressRect = progress.getBoundingClientRect();
            const sliderWrapRect = sliderWrap.getBoundingClientRect();
            const offset = sliderWrapRect.right - progressRect.right;

            setSlidesOffsetAfter(Math.max(Math.round(offset), 0));
        };

        updateSlidesOffset();
        window.addEventListener("resize", updateSlidesOffset);

        return () => {
            window.removeEventListener("resize", updateSlidesOffset);
        };
    }, []);

    return (
        <section className={styles.casesSection} id="cases">
            <img
                className={styles.pixelsDown}
                src="/about-pixels-down.svg"
                alt=""
                aria-hidden="true"
            />

            <div className={styles.casesInner}>
                <div className={styles.header}>
                    <img src="/folder-icon.svg" alt="" />
                    <div
                        className={styles.progress}
                        ref={progressRef}
                        style={
                            { "--progress": sliderProgress } as ProgressStyle
                        }
                        aria-hidden="true"
                    >
                        <img src="/progress-icon.svg" alt="" />
                    </div>
                </div>

                <div className={styles.sliderWrap} ref={sliderWrapRef}>
                    <Swiper
                        key={slidesOffsetAfter}
                        modules={[Mousewheel, FreeMode]}
                        className={styles.slider}
                        slidesPerView="auto"
                        spaceBetween={30}
                        slidesOffsetAfter={slidesOffsetAfter}
                        freeMode={{
                            enabled: true,
                            momentum: true,
                            momentumRatio: 0.7,
                        }}
                        mousewheel={{
                            enabled: true,
                            forceToAxis: false,
                            releaseOnEdges: true,
                            sensitivity: 0.7,
                        }}
                        onProgress={(_, progress) =>
                            setSliderProgress(progress)
                        }
                    >
                        {cases.map((item, index) => (
                            <SwiperSlide
                                className={styles.slide}
                                key={`${item.image}-${index}`}
                            >
                                <article className={styles.caseCard}>
                                    <img src={item.image} alt="" />
                                    <h2>{item.title}</h2>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
