using System;
using System.Collections.Generic;
using System.Text;

namespace _07._Doubly_Linked_List
{
    internal class LinkedListItem<T>
    {
        public LinkedListItem<T> Prev { get; set; } = null;
        public LinkedListItem<T> Next { get; set; } = null;
        public T Value { get; set; }

        public LinkedListItem(T value)
        {
            Value = value;
        }
    }
}
