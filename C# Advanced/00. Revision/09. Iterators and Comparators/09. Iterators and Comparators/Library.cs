using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09._Iterators_and_Comparators
{
    internal class Library : IEnumerable<Book>
    {
        public Library(params Book[] books)
        {
            this.books = new List<Book>(books);
        }
        private List<Book> books;

        public void AddBook(Book book)
        {
            books.Add(book);
        }

        public IEnumerator<Book> GetEnumerator()
        {
            //return Books.GetEnumerator();
            //for (int i = 0; i < books.Count; i++)
            //{
            //    yield return books[i];
            //}
            return new LibraryEnumerator(books);
        }

        public void RemoveBook(string title)
        {
            var book = books.Find(a => a.Title == title);
            books.Remove(book);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

    class LibraryEnumerator : IEnumerator<Book>
    {
        private List<Book> Books;
        private int index = -1;
        public LibraryEnumerator(List<Book> books)
        {
            Books = books;
        }
        public Book Current => Books[index];

        object IEnumerator.Current => Current;

        public void Dispose() { }

        public bool MoveNext() => ++index >= 0 && index < Books.Count;

        public void Reset() => index = -1;
    }
}