using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace Stack
{
    internal class CustomStack<T> : IEnumerable<T>
    {
        private const int initialSize = 4;
        private T[] _stack;

        public int Count { get; private set; }

        public CustomStack()
        {
            _stack = new T[initialSize];
            Count = 0;
        }

        public CustomStack(T[] inputParams) : this()
        {
            Push(inputParams);
        }

        private void Extend()
        {
            var resized = new T[_stack.Length * 2];
            for (int i = 0; i < _stack.Length; i++)
            {
                resized[i] = _stack[i];
            }
            _stack = resized;
        }

        private void Shrink()
        {
            var shrunken = new T[Count];
            for (int i = 0; i < shrunken.Length; i++)
            {
                shrunken[i] = _stack[i];
            }
            _stack = shrunken;
        }

        public void Push(T[] items)
        {
            foreach (var item in items)
            {
                if (_stack.Length == Count)
                {
                    Extend();
                }

                _stack[Count] = item;
                Count++;
            }
        }

        public T Pop()
        {
            if (_stack.Length == 0)
            {
                throw new InvalidOperationException("Stack empty");
            }

            T result = _stack[Count - 1];
            _stack[Count - 1] = default(T);
            Count--;

            if (_stack.Length / 4 > Count)
            {
                Shrink();
            }

            return result;
        }

        public T Peek()
        {
            if (_stack.Length == 0)
            {
                throw new InvalidOperationException("Stack empty");
            }

            return _stack[Count - 1];
        }

        public IEnumerator<T> GetEnumerator()
        {
            for (int i = Count - 1; i >= 0; i--)
            {
                yield return _stack[i];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
