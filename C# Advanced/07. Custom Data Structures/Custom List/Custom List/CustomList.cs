using System;
using System.Collections.Generic;
using System.Text;

namespace Custom_List
{
    internal class CustomList<T>
    {
        private const int initialCount = 2;
        private T[] elements = new T[initialCount];

        public int Count { get; private set; }

        public T this[int index]
        {
            get
            {
                if (index < 0 || index >= Count)
                {
                    throw new IndexOutOfRangeException("invalid index");
                }

                return elements[index];
            }
            set
            {
                if (index < 0 || index >= Count)
                {
                    throw new IndexOutOfRangeException("invalid index");
                }
                elements[index] = value;
            }
        }


        private void Resize()
        {
            T[] resized = new T[elements.Length * 2];
            for (int i = 0; i < elements.Length; i++)
            {
                resized[i] = elements[i];
            }

            elements = resized;
        }

        private void ShiftLeft(int index)
        {
            for (int i = index; i < Count - 1; i++)
            {
                elements[i] = elements[i + 1];
            }
        }

        private void ShiftRight(int index)
        {
            for (int i = Count; i > index; i--)
            {
                elements[i] = elements[i - 1];
            }
        }

        public void Shrink()
        {
            T[] shrunken = new T[Count];

            for (int i = 0; i < Count; i++)
            {
                shrunken[i] = elements[i];
            }

            elements = shrunken;
        }

        public void Add(T element)
        {
            if (Count == elements.Length)
            {
                Resize();
            }

            elements[Count] = element;
            Count++;
        }

        public T RemoveAt(int index)
        {
            if (index < 0 || index >= Count)
            {
                throw new IndexOutOfRangeException("invalid index");
            }

            T result = elements[index];
            ShiftLeft(index);
            Count--;
            elements[Count] = default(T);

            if (Count < elements.Length / 4)
            {
                Shrink();
            }

            return result;
        }

        public void Insert(int index, T element)
        {
            if (index < 0 || index > Count)
            {
                throw new IndexOutOfRangeException("invalid index");
            }

            if (Count == elements.Length)
            {
                Resize();
            }

            ShiftRight(index);
            elements[index] = element;
            Count++;
        }

        public bool Contains(T element)
        {
            bool result = false;
            for (int i = 0; i < Count; i++)
            {
                if (element.Equals(elements[i]))
                {
                    result = true;
                    break;
                }
            }

            return result;
        }

        public void Swap(int firstIndex, int secondIndex)
        {
            if (firstIndex < 0 || firstIndex >= Count)
            {
                throw new IndexOutOfRangeException("invalid index");
            }

            if (secondIndex < 0 || secondIndex >= Count)
            {
                throw new IndexOutOfRangeException("invalid index");
            }

            T temp = elements[firstIndex];
            elements[firstIndex] = elements[secondIndex];
            elements[secondIndex] = temp;
        }

        public override string ToString()
        {
            return String.Join(String.Empty, elements);
        }
    }
}

