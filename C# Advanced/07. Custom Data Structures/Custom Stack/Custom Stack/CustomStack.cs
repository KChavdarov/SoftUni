using System;
using System.Collections.Generic;
using System.Text;

namespace Custom_Stack
{
    internal class CustomStack<T>
    {
        private const int initialSize = 4;
        private T[] stack = new T[initialSize];

        public int Count { get; private set; } = 0;

        public void Push(T value)
        {
            if (stack.Length == Count)
            {
                Resize();
            }

            stack[Count] = value;
            Count++;
        }

        public T Pop()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Stack empty");
            }

            T result = stack[Count - 1];
            stack[Count - 1] = default(T);
            Count--;
            if (Count < stack.Length / 4)
            {
                Shrink();
            }

            return result;
        }

        public T Peek()
        {
            if (Count == 0)
            {
                throw new InvalidOperationException("Stack empty");
            }

            return stack[Count - 1];
        }

        private void Resize()
        {
            var resized = new T[stack.Length * 2];
            for (int i = 0; i < stack.Length; i++)
            {
                resized[i] = stack[i];
            }

            stack = resized;
        }

        private void Shrink()
        {
            var shrunken = new T[Count];

            for (int i = 0; i < Count; i++)
            {
                shrunken[i] = stack[i];
            }

            stack = shrunken;
        }
    }
}
