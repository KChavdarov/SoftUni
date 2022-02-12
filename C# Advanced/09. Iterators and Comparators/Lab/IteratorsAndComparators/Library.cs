using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace IteratorsAndComparators
{
    public class Library : IEnumerable<Book>
    {
        private List<Book> books;

        public Library()
        {
            books = new List<Book>();
        }

        public Library(params Book[] books) : this()
        {
            foreach (var book in books)
            {
                this.books.Add(book);
            }
            this.books.Sort(new BookComparator());
        }

        public void AddBook(Book book)
        {
            books.Add(book);
            books.Sort(new BookComparator());
        }

        public IEnumerator<Book> GetEnumerator()
        {
            //return new LibraryIterator<Book>(books);
            //return books.GetEnumerator();

            for (int i = 0; i < books.Count; i++)
            {
                yield return books[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
