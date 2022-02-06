using System;
using System.Collections.Generic;
using System.Text;

namespace Doubly_Linked_List
{
    internal class DoublyLinkedList<T>
    {
        private LinkedListItem<T> first = null;
        private LinkedListItem<T> last = null;

        public int Count { get; private set; } = 0;

        //public int Count
        //{
        //    get
        //    {
        //        int count = 0;
        //        var current = first;
        //        while (current != null)
        //        {
        //            count++;
        //            current = current.Next;
        //        }
        //        return count;
        //    }
        //}

        //private int GetCount(LinkedListItem current)
        //{
        //    if (current == null)
        //    {
        //        return 0;
        //    }

        //    return 1 + GetCount(current.Next);
        //}

        public void AddFirst(T element)
        {
            LinkedListItem<T> newItem = new LinkedListItem<T>(element);

            if (first == null)
            {
                first = newItem;
                last = newItem;
            }
            else
            {
                first.Prev = newItem;
                newItem.Next = first;
                first = newItem;
            }

            Count++;
        }

        public void AddLast(T element)
        {
            LinkedListItem<T> newItem = new LinkedListItem<T>(element);

            if (last == null)
            {
                first = newItem;
                last = newItem;
            }
            else
            {
                last.Next = newItem;
                newItem.Prev = last;
                last = newItem;
            }

            Count++;
        }

        public T RemoveFirst()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("The list is empty");
            }

            var currentValue = first.Value;

            if (first == last)
            {
                first = null;
                last = null;
            }
            else
            {
                first = first.Next;
                first.Prev = null;
            }

            Count--;
            return currentValue;
        }

        public T RemoveLast()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("The list is empty");
            }

            var currentValue = last.Value;

            if (first == last)
            {
                first = null;
                last = null;
            }
            else
            {
                last = last.Prev;
                last.Next = null;
            }

            Count--;
            return currentValue;
        }

        public T[] ToArray()
        {
            var result = new T[Count];

            var current = first;
            int index = 0;

            while (current != null)
            {
                result[index] = current.Value;
                current = current.Next;
                index++;
            }

            return result;
        }

        public void ForEach(Action<T> callback)
        {
            var current = first;

            while (current != null)
            {
                callback(current.Value);
                current = current.Next;
            }
        }
    }
}
