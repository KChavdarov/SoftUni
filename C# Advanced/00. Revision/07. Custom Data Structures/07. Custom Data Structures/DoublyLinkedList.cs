using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07._Custom_Data_Structures
{
    public class DoublyLinkedList<T> : IEnumerable<T>
    {
        public int Count { get; private set; } = 0;
        private Item<T> first { get; set; }
        private Item<T> last { get; set; }
        public void AddFirst(T value)
        {
            var item = new Item<T>(value);
            if (first == null)
            {
                first = item;
                last = item;
            }
            else
            {
                item.Next = first;
                first.Prev = item;
                first = item;
            }
            Count++;
        }
        public void AddLast(T value)
        {
            var item = new Item<T>(value);
            if (last == null)
            {
                last = item;
                first = item;
            }
            else
            {
                last.Next = item;
                item.Prev = last;
                last = item;
            }
            Count++;
        }
        public T RemoveFirst()
        {
            if (first == null)
            {
                throw new InvalidOperationException("List is empty");
            }
            var item = first;
            if (first == last)
            {
                first = null;
                last = null;
            }
            else
            {
                first = item.Next;
                first.Prev = null;
            }
            Count--;
            return first.Value;
        }
        public T RemoveLast()
        {
            if (last == null)
            {
                throw new InvalidOperationException("List is empty");
            }
            var item = last;
            if (first == last)
            {
                first = null;
                last = null;
            }
            else
            {
                last = item.Prev;
                last.Next = null;
            }
            Count--;
            return item.Value;
        }
        public void ForEach(Action<T> action)
        {
            var current = first;
            while (current != null)
            {
                action(current.Value);
                current = current.Next;
            }
        }
        public T[] ToArray()
        {
            var arr = new T[Count];
            var current = first;
            int index = 0;
            while (current != null)
            {
                arr[index] = current.Value;
                index++;
                current = current.Next;
            }
            return arr;
        }
        public IEnumerator<T> GetEnumerator()
        {
            var current = first;
            while (current != null)
            {
                yield return current.Value;
                current = current.Next;
            }
        }
        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();

        internal class Item<T>
        {
            public Item(T value)
            {
                Value = value;
            }
            public Item<T> Prev { get; set; }
            public Item<T> Next { get; set; }
            public T Value { get; set; }
        }
    }
}
