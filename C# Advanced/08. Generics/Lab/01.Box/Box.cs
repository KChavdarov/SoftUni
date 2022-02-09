using System;
using System.Collections.Generic;
using System.Text;

namespace BoxOfT
{
    public class Box<T>
    {
        private List<T> _list;

        public Box()
        {
            _list = new List<T>();
        }

        public void Add(T element)
        {
            _list.Add(element);
        }

        public T Remove()
        {
            T element = _list[_list.Count - 1];
            _list.RemoveAt(_list.Count - 1);
            return element;
        }

        public int Count => _list.Count;
    }
}
