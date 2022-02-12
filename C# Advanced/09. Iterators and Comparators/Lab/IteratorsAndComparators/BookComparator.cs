using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace IteratorsAndComparators
{
    public class BookComparator : IComparer<Book>
    {
        public int Compare(Book x, Book y)
        {
            if (x.Title.CompareTo(y.Title) == 1)
            {
                return 1;
            }
            else if (x.Title.CompareTo(y.Title) == -1)
            {
                return -1;
            }
            else
            {
                return y.Year.CompareTo(x.Year);
            }
        }
    }
}

