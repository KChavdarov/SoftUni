using System;
using System.Collections.Generic;
using System.Text;

namespace Generics
{
    public class Box<T> : IComparable<Box<T>>
        where T : IComparable
    {
        public T Content { get; set; }
        public Box(T value)
        {
            Content = value;
        }

        public int CompareTo(Box<T> compareTo)
        {
            return Content.CompareTo(compareTo.Content);
        }

        public override string ToString()
        {
            return $"{typeof(T)}: {Content}";
        }
    }
}
