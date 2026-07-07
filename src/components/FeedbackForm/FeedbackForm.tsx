/* eslint-disable react-hooks/incompatible-library */
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../Button/Button";
import styles from "./FeedbackForm.module.scss";
import clsx from "clsx";

export type FeedbackFormValues = {
    name: string;
    phone: string;
    comment: string;
};

type FeedbackFormProps = {
    buttonVariant?: "light" | "dark";
    className?: string;
    onSubmit: (data: FeedbackFormValues) => Promise<void> | void;
    phoneFilledVariant?: "muted" | "accent";
    theme?: "accent" | "dark";
};

export const FeedbackForm = ({
    buttonVariant = "dark",
    className,
    onSubmit,
    phoneFilledVariant = "muted",
    theme = "accent",
}: FeedbackFormProps) => {
    const {
        formState: { isSubmitting },
        handleSubmit,
        register,
        reset,
        watch,
    } = useForm<FeedbackFormValues>({
        defaultValues: {
            name: "",
            phone: "",
            comment: "",
        },
    });

    const nameValue = watch("name");
    const phoneValue = watch("phone");
    const commentValue = watch("comment");

    const submitForm: SubmitHandler<FeedbackFormValues> = async (data) => {
        await onSubmit(data);
        reset();
    };

    return (
        <form
            className={clsx(styles.form, styles[theme], className)}
            onSubmit={handleSubmit(submitForm)}
        >
            <input
                className={clsx(
                    styles.field,
                    styles.nameField,
                    nameValue && styles.fieldFilled,
                )}
                type="text"
                placeholder="Константин"
                aria-label="Имя"
                {...register("name", { required: true })}
            />
            <input
                className={clsx(
                    styles.field,
                    styles.phoneField,
                    phoneValue && styles.phoneFilled,
                    phoneValue && styles[phoneFilledVariant],
                )}
                type="tel"
                placeholder="+7 917 123 45 67"
                aria-label="Телефон"
                {...register("phone", { required: true })}
            />
            <textarea
                className={clsx(
                    styles.field,
                    styles.comment,
                    commentValue && styles.fieldFilled,
                )}
                placeholder="Комментарий"
                aria-label="Комментарий"
                {...register("comment")}
            />

            <Button
                className={styles.submitButton}
                disabled={isSubmitting}
                type="submit"
                variant={buttonVariant}
            >
                Отправить
            </Button>
        </form>
    );
};
