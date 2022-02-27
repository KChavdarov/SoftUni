using System;

namespace _06.QuickSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] asd = { 5, 1, -4, 3, 8, 21, 9, 1 };
            Quicksort<int>.Sort(asd);
            Console.WriteLine(String.Join(", ", asd));
        }
    }

    class Quicksort<T> where T : IComparable
    {
        public static void Sort(T[] arr)
        {
            Sort(arr, 0, arr.Length - 1);
        }

        private static void Sort(T[] arr, int start, int end)
        {
            if (start >= end)
            {
                return;
            }

            T pivot = arr[(start + end) / 2];
            int index = Partition(arr, start, end, pivot);
            Sort(arr, start, index - 1);
            Sort(arr, index, end);
        }

        private static int Partition(T[] arr, int left, int right, T pivot)
        {
            while (left <= right)
            {
                while (arr[left].CompareTo(pivot) < 0)
                {
                    left++;
                }
                while (arr[right].CompareTo(pivot) > 0)
                {
                    right--;
                }

                if (left <= right)
                {
                    Swap(arr, left, right);
                    left++;
                    right--;
                }
            }

            return left;
        }

        private static void Swap(T[] arr, int left, int right)
        {
            T temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
}
