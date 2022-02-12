using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace IteratorsAndComparators
{
    public class LibraryIterator<T> : IEnumerator<T>
    {
        private IEnumerable<T> items;
        private int index;
        public LibraryIterator(IEnumerable<T> items)
        {
            this.items = items;
            index = -1;
        }
        public T Current => items.ElementAt(index);

        object IEnumerator.Current => Current;

        public void Dispose()
        {
        }

        public bool MoveNext()
        {
            index++;
            if (index >= items.Count())
            {
                return false;
            }
            return true;
        }

        public void Reset()
        {
            index = -1;
        }
    }
}
