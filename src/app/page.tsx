'use client';
import Book from 'src/components/book'
import NavBar from 'src/components/navbar'
import { useAppSelector } from 'src/store/hooks'

export default function Home() {
  const {books} = useAppSelector(state => state.booksState);
  return (
    <main className="">
      <NavBar /> 
      <section className='flex px-6 flex-wrap items-start justify-start gap-4 mt-5'>
        {Object.values(books).map(book => (
          <Book key={book.id} id={book.id} category={book.category} description={book.description} name={book.name} price={book.price}/>
        ))}
      </section>
    </main>
  )
}
