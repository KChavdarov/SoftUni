using System;
using System.Linq;

namespace _01.RecursiveArraySum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            Console.WriteLine(RecursiveSum(arr, 0));
        }

        static int RecursiveSum(int[] arr, int index)
        {
            if (index == arr.Length)
            {
                return 0;
            }

            return arr[index] + RecursiveSum(arr, index + 1);
        }
    }
}
