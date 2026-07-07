import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { Button } from "../Button/Button";
import styles from "./FeedbackForm.module.scss";

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
        control,
        formState: { isSubmitting },
        handleSubmit,
        register,
        reset,
    } = useForm<FeedbackFormValues>({
        defaultValues: {
            name: "",
            phone: "",
            comment: "",
        },
    });

    const [nameValue, phoneValue, commentValue] = useWatch({
        control,
        name: ["name", "phone", "comment"],
    });

    const nameClassName = [
        styles.field,
        styles.nameField,
        nameValue && styles.fieldFilled,
    ]
        .filter(Boolean)
        .join(" ");
    const phoneClassName = [
        styles.field,
        styles.phoneField,
        phoneValue && styles.phoneFilled,
        phoneValue && styles[phoneFilledVariant],
    ]
        .filter(Boolean)
        .join(" ");
    const commentClassName = [
        styles.field,
        styles.comment,
        commentValue && styles.fieldFilled,
    ]
        .filter(Boolean)
        .join(" ");

    const submitForm: SubmitHandler<FeedbackFormValues> = async (data) => {
        await onSubmit(data);
        reset();
    };

    const formClassName = [styles.form, styles[theme], className]
        .filter(Boolean)
        .join(" ");

    return (
        <form className={formClassName} onSubmit={handleSubmit(submitForm)}>
            <input
                className={nameClassName}
                type="text"
                placeholder="Константин"
                aria-label="Имя"
                {...register("name", { required: true })}
            />
            <input
                className={phoneClassName}
                type="tel"
                placeholder="+7 917 123 45 67"
                aria-label="Телефон"
                {...register("phone", { required: true })}
            />
            <textarea
                className={commentClassName}
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
