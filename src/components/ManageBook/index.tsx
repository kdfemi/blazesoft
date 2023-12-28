import { ChangeEvent, FormEvent, ForwardRefRenderFunction, forwardRef, useImperativeHandle, useRef, useState } from "react";
import Modal, { IModal } from "../modal"
import { useAppDispatch } from "src/store/hooks";
import { addBook, updateBook } from "src/store/slice/books";
import Input from "../input";
import Button from "../button";
import { IBook } from "src/types/book";

export type IManageBook = {
    showModal: (book?: IBook) => void;
    closeModal: () => void;
};

const INITIAL_VALUES = {
    name: '',
    category: '',
    price: 0,
    description: '',
};

const ManageBook: ForwardRefRenderFunction<IManageBook> = (_, ref) => {
    const modalRef = useRef<IModal>(null);
    const dispatch = useAppDispatch();
    const currentId = useRef<string>()
    const [values, setValues] = useState(INITIAL_VALUES);

    useImperativeHandle(ref, () => ({
        closeModal() {
            modalRef.current?.closeModal();
        },
        showModal(book) {
            if(book) {
                const {id, ...rest} = book;
                setValues(rest);
                currentId.current = id;
            }
            modalRef.current?.showModal();
        },
    }))

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        if(currentId.current) {
            dispatch(updateBook({
                category: data.get('category')!.toString(),
                description: data.get('description')!.toString(),
                name: data.get('name')!.toString(),
                price: Number(data.get('price')!.toString()),
                id: currentId.current,
            }));
        } else {
            dispatch(addBook({
                category: data.get('category')!.toString(),
                description: data.get('description')!.toString(),
                name: data.get('name')!.toString(),
                price: Number(data.get('price')!.toString())
            }));
        }
        setValues(INITIAL_VALUES);
        modalRef.current?.closeModal();
        //TODO: show alert
    }
    return (
        <Modal ref={modalRef}>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <Input name="name" label="Name" required value={values['name']} onChange={handleInputChange}/>
                <Input name="category" label="Category" required  value={values['category']} onChange={handleInputChange}/>
                <Input name="price" label="Price" required type="number"  value={values['price']} onChange={handleInputChange}/>
                <Input name="description" label="Description" required  value={values['description']} onChange={handleInputChange}/>
                <div className="flex items-center justify-end gap-3">
                <Button>Save</Button>
                <Button type="button" className="bg-text" onClick={() => modalRef.current?.closeModal()}>Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}

export default forwardRef(ManageBook)