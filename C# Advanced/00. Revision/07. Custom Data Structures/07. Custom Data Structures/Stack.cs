using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07._Custom_Data_Structures
{
    internal class Stack<T>
    {
        private const byte InitialCapacity = 4;
        private T[] array = new T[InitialCapacity];
        public int Count { get; private set; }

        public void Push(T item)
        {
            array[Count++] = item;

            if (array.Length == Count)
            {
                Resize();
            }
        }
        public T Pop()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Stack is empty");
            }
            var item = array[Count - 1];
            array[Count - 1] = default(T);
            Count--;
            if (Count * 4 < array.Length) { Shrink(); }
            return item;
        }
        public T Peek()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Stack is empty");
            }
            return array[Count - 1];
        }

        private void Resize()
        {
            T[] tempArray = new T[array.Length * 2];
            for (int i = 0; i < Count; i++)
            {
                tempArray[i] = array[i];
            }
            array = tempArray;
        }
        private void Shrink()
        {
            var tempArray = new T[array.Length / 2];
            for (int i = 0; i < Count; i++)
            {
                tempArray[i] = array[i];
            }
            array = tempArray;
        }
    }
}