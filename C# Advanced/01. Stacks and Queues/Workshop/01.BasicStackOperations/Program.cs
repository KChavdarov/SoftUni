using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.BasicStackOperations
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<int> numbers = new Stack<int>();
            int[] input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int count = input[0];
            int remove = input[1];
            int lookup = input[2];
            input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            for (int i = 0; i < count; i++)
            {
                int n = input[i];
                numbers.Push(n);
            }

            for (int i = 0; i < remove; i++)
            {
                numbers.Pop();
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
                int n = numbers.Pop();
                if (n < min)
                {
                    min = n;
                }
            }

            Console.WriteLine(min);
        }
    }
}
