import styles from "./HeroSection.module.scss";

const offerItems = ["проектируем", "разрабатываем", "внедряем", "сопровождаем"];

const serviceCards = [
    "Заказная разработка программного обеспечения",
    "Автоматизация бизнес-процессов",
    "Цифровая трансформация бизнеса и государства",
    "Техническая поддержка информационных систем",
];

const backgroundServices = [
    "web",
    "mobile apps",
    "blockchain dev",
    "gamedev",
    "design",
];

export const HeroSection = () => {
    return (
        <section className={styles.heroSection} id="hero" aria-label="Главная">
            <div className={styles.background}>
                <img
                    className={styles.backgroundImage}
                    src="/hero-bg.png"
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className={styles.pixelShapeTop}
                    src="/hero-pixels-top.svg"
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className={styles.pixelShapeDown}
                    src="/hero-pixels-down.svg"
                    alt=""
                    aria-hidden="true"
                />
                <ul className={styles.backgroundServices} aria-hidden="true">
                    {backgroundServices.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.heroInner}>
                <div className={styles.offer}>
                    <h1 className={styles.title}>
                        Цифровые решения для&#160;бизнеса и государства
                    </h1>

                    <div className={styles.offerActions}>
                        {offerItems.map((item) => (
                            <div className={styles.offerAction} key={item}>
                                <span>{item}</span>
                                <img src="/arrow-right.svg" alt="" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.cards}>
                    {serviceCards.map((item) => (
                        <article className={styles.card} key={item}>
                            <span
                                className={styles.cardAccent}
                                aria-hidden="true"
                            />
                            <div className={styles.cardBody}>
                                <h2>{item}</h2>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
