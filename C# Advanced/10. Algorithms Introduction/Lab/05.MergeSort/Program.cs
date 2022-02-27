using System;
using System.Linq;

namespace _05.MergeSort
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] asd = { 5, 4, 21, -4, 2, 1, 10, 6, 8 };
            Mergesort<int>.Sort(asd);
            //asd = Mergesort<int>.Sort(asd);

            Console.WriteLine(String.Join(", ", asd));
        }
    }

    public class Mergesort<T> where T : IComparable
    {
        static T[] aux;
        public static void Sort(T[] arr)
        {
            if (arr.Length <= 1)
            {
                return;
            }

            aux = new T[arr.Length];
            Array.Copy(arr, aux, arr.Length);
            Sort(arr, 0, arr.Length - 1);
        }

        private static void Sort(T[] arr, int lo, int hi)
        {
            if (lo >= hi)
            {
                return;
            }

            int mid = (lo + hi) / 2;
            Sort(arr, lo, mid);
            Sort(arr, mid + 1, hi);
            Merge(arr, lo, mid, hi);
        }

        private static void Merge(T[] arr, int lo, int mid, int hi)
        {
            int arrIdx = lo;
            int leftIdx = lo;
            int rightIdx = mid + 1;

            while (leftIdx <= mid && rightIdx <= hi)
            {
                if (arr[leftIdx].CompareTo(arr[rightIdx]) < 0)
                {
                    aux[arrIdx++] = arr[leftIdx++];
                }
                else
                {
                    aux[arrIdx++] = arr[rightIdx++];
                }
            }

            while (leftIdx <= mid)
            {
                aux[arrIdx++] = arr[leftIdx++];
            }

            while (rightIdx <= hi)
            {
                aux[arrIdx++] = arr[rightIdx++];
            }

            for (int i = lo; i <= hi; i++)
            {
                arr[i] = aux[i];
            }
        }

        //public static T[] Sort(T[] arr)
        //{
        //    if (arr.Length == 1)
        //    {
        //        return arr;
        //    }

        //    int mid = arr.Length / 2;
        //    T[] left = arr.Take(mid).ToArray();
        //    T[] right = arr.Skip(mid).ToArray();

        //    return Merge(Sort(left), Sort(right));
        //}

        //private static T[] Merge(T[] left, T[] right)
        //{
        //    T[] sorted = new T[left.Length + right.Length];
        //    int sortedIndex = 0;
        //    int leftIndex = 0;
        //    int rightIndex = 0;

        //    while (leftIndex < left.Length && rightIndex < right.Length)
        //    {
        //        if (left[leftIndex].CompareTo(right[rightIndex]) < 0)
        //        {
        //            sorted[sortedIndex++] = left[leftIndex++];
        //        }
        //        else
        //        {
        //            sorted[sortedIndex++] = right[rightIndex++];
        //        }
        //    }
        //    while (leftIndex < left.Length)
        //    {
        //        sorted[sortedIndex++] = left[leftIndex++];
        //    }

        //    while (rightIndex < right.Length)
        //    {
        //        sorted[sortedIndex++] = right[rightIndex++];
        //    }

        //    return sorted;
        //}
    }
}
