
'use client'
import { FC, FormEvent, MouseEvent, useRef } from "react";
import Menu from "src/assets/svgs/menu.svg";
import Search from "src/assets/svgs/search.svg";
import Cart from "src/assets/svgs/cart.svg";
import Account from "src/assets/svgs/account.svg";
import Favorite from "src/assets/svgs/favorite.svg";
import Input from "../input";
import Button from "../button";
import ManageBook, { IManageBook } from "../ManageBook";

const NavBar: FC = () => {

    const modalRef = useRef<IManageBook>(null);

    const addNewBook = (_e: MouseEvent<HTMLButtonElement>) => {
        modalRef.current?.showModal();
        
    };

    return (
        <nav className="flex items-center px-6 pt-[45px] pb-5 space-x-3 max-w-[1216px] justify-between mx-auto" data-testid="NavBar">
            <button className="appearance-none">
                <Menu />
            </button>
            <Input placeholder="What are you looking for ?" leftElement={<Search/>} className="w-[296px]" />
            <div className="flex items-center lg:space-x-8">
                <button className="appearance-none hidden lg:block">
                    <Account/>
                </button>
                <button className="appearance-none hidden lg:block">
                    <Favorite/>
                </button>
                <button className="appearance-none lg:hidden" aria-label="Add Book" onClick={addNewBook} title="Add Book" data-testid="Add Book">
                    <Cart/>
                </button>
                <div className="hidden lg:flex" aria-hidden>
                    <Button aria-label="Add Book" leftElement={<Cart className="text-white"/>} onClick={addNewBook} data-testid="Add Book">Add Book</Button>
                </div>
            </div>
            <ManageBook ref={modalRef} />
        </nav>
    )
};

export default NavBar;