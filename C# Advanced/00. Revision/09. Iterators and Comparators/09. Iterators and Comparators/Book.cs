using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09._Iterators_and_Comparators
{
    internal class Book : IComparable<Book>
    {
        public Book(string title, int year, params string[] authors)
        {
            Title = title;
            Year = year;
            Authors = new List<string>(authors);
        }

        public string Title { get; set; }
        public int Year { get; set; }
        public List<string> Authors { get; set; }

        public int CompareTo(Book? other)
        {
            int result = Year.CompareTo(other.Year);
            if (result == 0) result = Title.CompareTo(other.Title);
            return result;
        }

        public override string ToString()
        {
            return $"{string.Join(", ", Authors)} - {Title}({Year})";
        }
    }

    internal class BookComparer : IComparer<Book>
    {
        public int Compare(Book? x, Book? y)
        {
            int result = x.Title.CompareTo(y.Title);
            if (result == 0) result = x.Year.CompareTo(y.Year);
            return result;
        }
    }
}
