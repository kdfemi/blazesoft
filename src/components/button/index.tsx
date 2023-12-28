import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import Menu from "src/assets/svgs/menu.svg";
import { classes } from "src/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    leftElement?: ReactNode;
    rightElement?: ReactNode;
};

const Button: FC<Props> = ({className, leftElement, rightElement, children, ...props}) => {
    return (
        <button {...props} className={classes(className, 'bg-primary text-white px-3 py-2 rounded-md items-center justify-center text-center flex gap-x-5')}>
            {leftElement}
            {children}
            {rightElement}
        </button>
    )
};

export default Button;