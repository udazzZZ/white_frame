import styles from "./NewsSection.module.scss";

const newsItems = [
    {
        date: "10 октября 2021",
        title: "Заголовок новости в одну строку",
        text: "С 2005 года White Frame тесно сотрудничает с\u00A0клиентами, чтобы воплотить их идеи в жизнь в\u00A0виде\u00A0мощного программного обеспечения.",
    },
    {
        date: "10 октября 2021",
        title: "Заголовок новости в две строки, потому\u00A0что\u00A0так\u00A0тоже бывает",
        text: "С 2005 года White Frame тесно сотрудничает с\u00A0клиентами, чтобы воплотить их идеи в жизнь в\u00A0виде\u00A0мощного программного обеспечения. С 2005 года White Frame тесно сотрудничает с\u00A0клиентами, чтобы воплотить их идеи в жизнь в\u00A0виде\u00A0мощного программного обеспечения.",
    },
    {
        date: "10 октября 2021",
        title: "Заголовок новости в одну строку",
        text: "С 2005 года White Frame тесно сотрудничает с\u00A0клиентами, чтобы воплотить их идеи в жизнь в\u00A0виде\u00A0мощного программного обеспечения.",
    },
];

export const NewsSection = () => {
    return (
        <section className={styles.newsSection} id="news">
            <img
                className={styles.pixels}
                src="/news-pixels.svg"
                alt=""
                aria-hidden="true"
            />

            <div className={styles.inner}>
                <img
                    className={styles.icon}
                    src="/news-icon.svg"
                    alt=""
                    aria-hidden="true"
                />

                <div className={styles.list}>
                    {newsItems.map((item, index) => (
                        <article
                            className={styles.item}
                            key={`${item.title}-${index}`}
                        >
                            <div className={styles.itemHeader}>
                                <time className={styles.date}>{item.date}</time>
                                <h2 className={styles.title}>
                                    <a href="#news">{item.title}</a>
                                </h2>
                            </div>
                            <p className={styles.text}>{item.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
