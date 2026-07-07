import { Header } from "../components/Header/Header";
import {
    FeedbackForm,
    type FeedbackFormValues,
} from "../components/FeedbackForm/FeedbackForm";
import styles from "./ContactsPage.module.scss";

const mockSendFeedback = (data: FeedbackFormValues) => {
    return new Promise<{ ok: boolean; data: FeedbackFormValues }>((resolve) => {
        window.setTimeout(() => {
            resolve({ ok: true, data });
        }, 600);
    });
};

export const ContactsPage = () => {
    const handleFormSubmit = async (data: FeedbackFormValues) => {
        await mockSendFeedback(data);
    };

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <img
                    className={styles.pixelsTop}
                    src="/hero-pixels-top.svg"
                    alt=""
                    aria-hidden="true"
                />
                <img
                    className={styles.pixelsLeft}
                    src="/pixels-contact-page-left.svg"
                    alt=""
                    aria-hidden="true"
                />

                <section className={styles.contactsSection} id="contacts">
                    <div className={styles.intro}>
                        <p>
                            <span>Мы любим&#160;новые знакомства</span> –
                            ответим на все ваши вопросы и пригласим в гости :)
                        </p>
                    </div>

                    <div className={styles.info}>
                        <a href="mailto:info@whiteframe.ru">
                            info@whiteframe.ru
                        </a>
                        <p>
                            Казань
                            <br />
                            ул. Московская 36
                        </p>
                    </div>

                    <a className={styles.phone} href="tel:+78431234567">
                        +7 843 123 45 67
                    </a>

                    <img
                        className={styles.arrow}
                        src="/arrow-right.svg"
                        alt=""
                        aria-hidden="true"
                    />

                    <FeedbackForm
                        className={styles.form}
                        theme="dark"
                        buttonVariant="light"
                        phoneFilledVariant="accent"
                        onSubmit={handleFormSubmit}
                    />
                </section>
            </main>

            <footer className={styles.contactsFooter}>
                <img
                    className={styles.pixelsBottom}
                    src="/pixels-footer.svg"
                    alt=""
                    aria-hidden="true"
                />

                <div className={styles.footerInner}>
                    <ul className={styles.social} aria-label="Социальные сети">
                        <li>
                            <a href="/">instagram</a>
                        </li>
                        <li>
                            <a href="/">vkontakte</a>
                        </li>
                        <li>
                            <a data-active="true" href="/">
                                facebook
                            </a>
                        </li>
                        <li>
                            <a href="/">google play</a>
                        </li>
                    </ul>

                    <p className={styles.copy}>
                        © 2021 – White Frame, Все права защищены.
                    </p>
                </div>
            </footer>
        </div>
    );
};
