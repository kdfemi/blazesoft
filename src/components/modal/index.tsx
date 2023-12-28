'use client';
import {ForwardRefRenderFunction, PropsWithChildren, forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { classes } from "src/utils";

export type IModal = {
    showModal: () => void;
    closeModal: () => void;
}

type Props = {
    className?: string;
    contentClassName?: string;
};

const Modal: ForwardRefRenderFunction<IModal, PropsWithChildren<Props>> = ({children, className, contentClassName}, ref) => {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        closeModal() {
            setVisible(false);
        },
        showModal() {
            setVisible(true);
        },
    }))

    if(!visible) {
        return undefined;
    }

    return createPortal(        
    <div 
        aria-label="modal" 
        data-testid="modal"
        className={classes("fixed top-0 bottom-0 right-0 left-0 bg-black/20 flex justify-center items-center", className)} 
        onClick={() => setVisible(false)}
    >
        <div className={classes(contentClassName, 'bg-white p-6 rounded w-full max-w-[860px]')} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>, document.getElementById('custom-modal')!)
};

export default forwardRef(Modal);