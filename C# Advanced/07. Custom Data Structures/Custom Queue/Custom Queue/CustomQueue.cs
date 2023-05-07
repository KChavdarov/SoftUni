using System;
using System.Collections.Generic;
using System.Text;

namespace Custom_Queue
{
    internal class CustomQueue<T>
    {
        private const int initialSize = 4;
        private const int initialHead = 0;
        private const int initialTail = -1;
        private T[] queue;
        private int head;
        private int tail;
        public int Count { get => tail - head + 1; }

        public CustomQueue()
        {
            queue = new T[initialSize];
            head = initialHead;
            tail = initialTail;
        }

        public void Enqueue(T value)
        {
            if (queue.Length - 1 == tail)
            {
                Resize();
            }

            queue[tail + 1] = value;
            tail++;
        }

        public T Dequeue()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Queue empty");
            }

            T result = queue[head];
            queue[head] = default(T);
            head++;


            if (queue.Length >= Count * 3)
            {
                Shrink();
            }
            else if (head > Count)
            {
                ShiftLeft();
            }


            return result;
        }

        public T Peek()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Queue empty");
            }

            return queue[head];
        }

        private void ShiftLeft()
        {
            int count = Count;
            for (int i = head; i <= tail; i++)
            {
                queue[i - head] = queue[i];
                queue[i] = default(T);
            }

            head = 0;
            tail = count - 1;
        }

        private void Resize()
        {
            var resized = new T[queue.Length * 2];
            for (int i = head; i <= tail; i++)
            {
                resized[i - head] = queue[i];
            }

            queue = resized;
        }

        public void Shrink()
        {
            int count = Count;
            var shrunken = new T[Count];
            for (int i = head; i <= tail; i++)
            {
                shrunken[i - head] = queue[i];
            }

            queue = shrunken;
            head = 0;
            tail = count - 1;
        }

        public void Clear()
        {
            queue = new T[initialSize];
            head = initialHead;
            tail = initialTail;
        }
    }
}
