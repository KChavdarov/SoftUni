using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07._Custom_Data_Structures
{
    public class List<T>
    {
        private const byte initialCapacity = 2;
        private T[] array = new T[initialCapacity];

        public int Count { get; private set; } = 0;
        public T this[int index]
        {
            get
            {
                if (!isValidIndex(index))
                {
                    throw new IndexOutOfRangeException();
                }
                else
                {
                    return array[index];
                }
            }
            set
            {
                if (!isValidIndex(index))
                {
                    throw new IndexOutOfRangeException();
                }
                else
                {
                    array[index] = value;
                }
            }
        }
        public void Add(T item)
        {
            array[Count++] = item;

            if (array.Length == Count)
            {
                Resize();
            }
        }
        public T RemoveAt(int index)
        {
            if (!isValidIndex(index))
            {
                throw new IndexOutOfRangeException();
            }
            else
            {
                T result = array[index];
                ShiftLeft(index);
                Count--;
                if (array.Length > Count * 4) { Shrink(); };
                return result;
            }
        }
        public bool Contains(T item)
        {
            return array.Take(Count).Contains(item);
        }
        public void Swap(int firstIndex, int secondIndex)
        {
            if (!isValidIndex(firstIndex) || !isValidIndex(secondIndex))
            {
                throw new IndexOutOfRangeException();
            }
            else
            {
                T temp = array[firstIndex];
                array[firstIndex] = array[secondIndex];
                array[secondIndex] = temp;
            }
        }
        public void Insert(int index, T item)
        {
            if (!isValidIndex(index))
            {
                throw new IndexOutOfRangeException();
            }
            else
            {
                ShiftRight(index);
                array[index] = item;
                if (array.Length == ++Count)
                {
                    Resize();
                }
            }
        }

        private void ShiftLeft(int index)
        {
            for (int i = index; i < Count; i++)
            {
                array[i] = array[i + 1];
            }
        }
        private void ShiftRight(int index)
        {
            for (int i = Count; i > index; i--)
            {
                array[i] = array[i - 1];
            }
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
        private void Resize()
        {
            var tempArray = new T[array.Length * 2];
            for (int i = 0; i < Count; i++)
            {
                tempArray[i] = array[i];
            }
            array = tempArray;
        }
        private bool isValidIndex(int index)
        {
            return index >= 0 && index < Count;
        }
    }
}
