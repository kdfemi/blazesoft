import { FC, InputHTMLAttributes, ReactNode } from "react";
import Menu from "src/assets/svgs/menu.svg";
import { classes } from "src/utils";
import Label from "../Label";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    inputClassName?: string
    label?: string
};

const Input: FC<Props> = ({className, name, inputClassName, leftElement, rightElement, label, ...props}) => {
    return (
        <div>
            {label && <Label htmlFor={name} className="mb-1">{label}</Label>}
            <div className={classes(className, 'px-3 py-2 rounded-lg space-x-3 bg-bgColor', 'flex items-center focus-within:border-primary border border-transparent')} aria-hidden aria-label="input">
                {leftElement}
                <input  {...props} name={name} className={classes(inputClassName, 'appearance-none outline-none border-none bg-transparent flex-1')}/>
                {rightElement}
            </div>
        </div>
    )
};

export default Input;