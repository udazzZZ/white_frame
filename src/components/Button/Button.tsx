import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    className?: string;
    href?: string;
    type?: "button" | "submit" | "reset";
    variant?: "light" | "dark";
};

export const Button = ({
    children,
    className,
    href,
    type = "button",
    variant = "light",
}: ButtonProps) => {
    const buttonClassName = [styles.button, styles[variant], className]
        .filter(Boolean)
        .join(" ");

    if (href) {
        return (
            <a className={buttonClassName} href={href}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClassName} type={type}>
            {children}
        </button>
    );
};