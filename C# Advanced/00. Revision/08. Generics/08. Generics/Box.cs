using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08._Generics
{
    internal class Box<T>
    {
        private Stack<T> items = new Stack<T>();

        public void Add(T item)
        {
            items.Push(item);
        }

        public T Remove()
        {
            if (items.Count == 0)
            {
                throw new InvalidOperationException();
            }
            return items.Pop();
        }
        public int Count { get => items.Count; }
    }
}
