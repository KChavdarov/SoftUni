using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ListyIterator
{
    internal class ListyIterator<T> : IEnumerable<T>
    {
        private List<T> list;
        private int index;

        public ListyIterator()
        {
            list = new List<T>();
            index = 0;
        }
        public ListyIterator(params T[] inputParams)
        {
            list = inputParams.ToList();
            index = 0;
        }

        public bool Move()
        {
            if (HasNext())
            {
                index++;
                return true;
            }
            return false;
        }

        public bool HasNext()
        {
            return index < list.Count - 1;
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
            for (int i = 0; i < list.Count(); i++)
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
