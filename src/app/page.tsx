'use client';
import { useMemo } from 'react';
import Book from 'src/components/book'
import NavBar from 'src/components/navbar'
import { useAppSelector } from 'src/store/hooks'

export default function Home() {
  const {books} = useAppSelector(state => state.booksState);
  const availableBooks = useMemo(() => Object.values(books), [books]);

  return (
    <main className="">
      <NavBar /> 
      <section className='flex px-6 flex-wrap items-start justify-start gap-4 mt-5'>
        {availableBooks.length === 0 && (
          <div className='w-full'>
            <h3 className='text-text text-center'>Books are empty kindly click on &quot;Add Book/Cart Icon&quot; button in the navbar to add a book</h3>
          </div>
        )}
        {availableBooks.map(book => (
          <Book key={book.id} id={book.id} category={book.category} description={book.description} name={book.name} price={book.price}/>
        ))}
        {}
      </section>
    </main>
  )
}
