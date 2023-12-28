'use client';
import Image from "next/image";
import { FC, MouseEvent, useRef } from "react";
import { IBook } from "src/types/book";
import photo from 'src/assets/image/product_photo.png';
import Button from "../button";
import ManageBook, { IManageBook } from "../ManageBook";
import { useAppDispatch } from "src/store/hooks";
import { deleteBook } from "src/store/slice/books";

const Book: FC<IBook> = (book) => {
    const {category, description, id, name, price} = book;
    const modalRef = useRef<IManageBook>(null);
    const dispatch = useAppDispatch();

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if(confirm('Are you sure you want to delete Book')) {
            dispatch(deleteBook({id}))
        }
    };

    return (
        <div aria-label="book"  data-testid="book" aria-description={description} className="flex gap-x-4 cursor-default w-[280px] max-w-full" onClick={() => modalRef.current?.showModal(book)}>
            <div className="w-[180px] h-[250px]">
                <Image src={photo} alt="book" aria-hidden/>
            </div>
            <div className="flex flex-col justify-center gap-y-4">
                <div className="space-y-3">
                    <h6 aria-label="book name" className="text-text text-sm">{name}</h6>
                    <p  aria-label="category" className="text-text text-xs"><b aria-hidden>Category: </b><span className="text-text/50">{category}</span></p>
                    <p aria-label="price" className="text-text text-xs">CAD {price}</p>
                </div>
                <Button aria-label="Delete Book" onClick={handleDelete}>Delete</Button>
            </div>
            <ManageBook ref={modalRef} />
        </div>
    )
};

export default Book;