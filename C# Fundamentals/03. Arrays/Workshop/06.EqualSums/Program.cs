using System;
using System.Linq;

namespace _06.EqualSums
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int sumLeft = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                if (i > 0)
                {
                    sumLeft += arr[i - 1];
                }

                int sumRight = 0;
                for (int j = i + 1; j < arr.Length; j++)
                {
                    sumRight += arr[j];
                }
                if (sumRight == sumLeft)
                {
                    Console.WriteLine(i);
                    return;
                }
            }
            Console.WriteLine("no");
        }
    }
}
