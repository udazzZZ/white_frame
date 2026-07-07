import { useCallback, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import {
    FeedbackForm,
    type FeedbackFormValues,
} from "../FeedbackForm/FeedbackForm";
import styles from "./FeedbackModal.module.scss";

type FeedbackModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const mockSendFeedback = (data: FeedbackFormValues) => {
    return new Promise<{ ok: boolean; data: FeedbackFormValues }>((resolve) => {
        window.setTimeout(() => {
            resolve({ ok: true, data });
        }, 600);
    });
};

export const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleClose = useCallback(() => {
        setIsSuccess(false);
        onClose();
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleClose, isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleFormSubmit = async (data: FeedbackFormValues) => {
        await mockSendFeedback(data);
        setIsSuccess(true);
    };

    return (
        <div className={styles.overlay}>
            {!isSuccess && (
                <section
                    className={styles.panel}
                    aria-label="Форма обратной связи"
                >
                    <div className={styles.panelInner}>
                        <button
                            className={styles.closeButton}
                            type="button"
                            aria-label="Закрыть форму"
                            onClick={handleClose}
                        >
                            <img
                                className={styles.closeIcon}
                                src="/close-icon.svg"
                                alt=""
                            />
                        </button>

                        <img
                            className={styles.arrow}
                            src="/arrow-right-white.svg"
                            alt=""
                            aria-hidden="true"
                        />

                        <div className={styles.panelForm}>
                            <h2 className={styles.title}>Свяжитесь с нами</h2>
                            <FeedbackForm onSubmit={handleFormSubmit} />
                        </div>
                    </div>
                </section>
            )}

            {isSuccess && (
                <div className={styles.successWrapper}>
                    <section className={styles.success} aria-live="polite">
                        <img
                            className={styles.successIcon}
                            src="/letter-icon.svg"
                            alt=""
                            aria-hidden="true"
                        />
                        <div className={styles.successText}>
                            <h2>Сообщение отправлено</h2>
                            <p>
                                Наши менеджеры свяжутся с вами в ближайшее
                                время.
                            </p>
                        </div>
                        <Button
                            className={styles.successButton}
                            type="button"
                            variant="dark"
                            onClick={handleClose}
                        >
                            Закрыть
                        </Button>
                    </section>
                </div>
            )}
        </div>
    );
};
