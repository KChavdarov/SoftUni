using System;

namespace _07.BinarySearch
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };
            Console.WriteLine(BinarySearch<int>.Search(arr, 8, 0, arr.Length - 1));
        }
    }

    class BinarySearch<T> where T : IComparable
    {
        public static int Search(T[] arr, T value, int start, int end)
        {
            //int mid = start + (end - start) / 2;

            //if (end >= start)
            //{
            //    if (arr[mid].CompareTo(value) == 0)
            //    {
            //        return mid;
            //    }
            //    else if (arr[mid].CompareTo(value) > 0)
            //    {
            //        return Search(arr, value, start, mid - 1);
            //    }
            //    else
            //    {
            //        return Search(arr, value, mid + 1, end);
            //    }
            //}

            while (end >= start)
            {
                int mid = start + (end - start) / 2;

                if (arr[mid].CompareTo(value) == 0)
                {
                    return mid;
                }
                else if (arr[mid].CompareTo(value) > 0)
                {
                    end = mid - 1;
                }
                else
                {
                    start = mid + 1;
                }
            }

            return -1;
        }
    }
}
