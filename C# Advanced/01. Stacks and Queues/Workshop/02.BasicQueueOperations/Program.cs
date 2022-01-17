using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.BasicQueueOperations
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<int> numbers = new Queue<int>();
            int[] input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int count = input[0];
            int remove = input[1];
            int lookup = input[2];
            input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            for (int i = 0; i < count; i++)
            {
                int n = input[i];
                numbers.Enqueue(n);
            }

            for (int i = 0; i < remove; i++)
            {
                numbers.Dequeue();
            }

            if (numbers.Contains(lookup))
            {
                Console.WriteLine("true");
                return;
            }

            if (numbers.Count == 0)
            {
                Console.WriteLine(0);
                return;
            }

            int min = int.MaxValue;
            while (numbers.Count > 0)
            {
                int n = numbers.Dequeue();
                if (n < min)
                {
                    min = n;
                }
            }

            Console.WriteLine(min);
        }
    }
}
