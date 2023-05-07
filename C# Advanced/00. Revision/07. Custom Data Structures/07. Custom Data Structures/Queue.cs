using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07._Custom_Data_Structures
{
    internal class Queue<T>
    {
        private const byte InitialCapacity = 4;
        private T[] array = new T[InitialCapacity];
        private int head = 0;
        private int tail = -1;
        public int Count { get => tail - head + 1; }
        public void Enqueue(T item)
        {
            array[++tail] = item;

            if (tail == array.Length - 1)
            {
                Resize();
            }
        }
        public T Deque()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Queue is empty");
            }
            T item = array[head];
            array[head] = default(T);
            head++;

            if (array.Length >= Count * 3)
            {
                Resize();
            }
            else if (head > Count)
            {
                ShiftLeft();
            }
            return item;
        }
        public T Peek()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Queue is empty");
            }

            return array[head];
        }

        private void ShiftLeft()
        {
            int count = Count;
            for (int i = head; i <= tail; i++)
            {
                array[i - head] = array[i];
                array[i] = default(T);
            }

            head = 0;
            tail = count - 1;
        }
        private void Resize()
        {
            int count = Count;
            var tempArray = new T[count * 2];
            for (int i = 0; i < count; i++)
            {
                tempArray[i] = array[head + i];
            }
            array = tempArray;
            head = 0;
            tail = count - 1;
        }
    }
}