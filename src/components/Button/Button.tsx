import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "light" | "dark";
};

export const Button = ({
    children,
    className,
    disabled,
    href,
    onClick,
    type = "button",
    variant = "light",
}: ButtonProps) => {
    const buttonClassName = [styles.button, styles[variant], className]
        .filter(Boolean)
        .join(" ");

    if (href) {
        return (
            <a className={buttonClassName} href={href} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={buttonClassName}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
