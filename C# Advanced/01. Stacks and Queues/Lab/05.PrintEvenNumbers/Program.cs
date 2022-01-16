using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.PrintEvenNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            Queue<int> queue = new Queue<int>();

            for (int i = 0; i < numbers.Length; i++)
            {
                queue.Enqueue(numbers[i]);
            }

            while (queue.Count > 0)
            {
                int n = queue.Dequeue();
                if (n % 2 == 0)
                {
                    Console.Write(n);
                    if (queue.Count != 0)
                    {
                        Console.Write(", ");
                    }
                }
            }
        }
    }
}
