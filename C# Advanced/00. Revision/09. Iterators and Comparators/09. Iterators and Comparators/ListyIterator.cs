using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09._Iterators_and_Comparators
{
    internal class ListyIterator<T> : IEnumerable<T>
    {
        public ListyIterator(params T[] values)
        {
            list = new List<T>(values);
            index = 0;
        }

        private List<T> list;
        private int index;

        public bool HasNext() => index < list.Count - 1;
        public bool Move()
        {
            if (HasNext())
            {
                index++;
                return true;
            }
            else
            {
                return false;
            }
        }

        public void Print()
        {
            try
            {
                Console.WriteLine(list[index]);
            }
            catch
            {
                Console.WriteLine("Invalid Operation!");
            }
        }

        public void PrintAll()
        {
            Console.WriteLine(String.Join(' ', list));
        }

        public IEnumerator<T> GetEnumerator()
        {
            for (int i = 0; i < list.Count; i++)
            {
                yield return list[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
