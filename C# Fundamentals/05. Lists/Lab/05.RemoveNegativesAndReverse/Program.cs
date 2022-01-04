using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.RemoveNegativesAndReverse
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            //numbers.RemoveAll(a => a < 0);
            //numbers.Reverse();

            for (int i = 0; i < numbers.Count; i++)
            {
                if (numbers[i] < 0)
                {
                    numbers.RemoveAt(i);
                    i--;
                }
            }

            for (int i = 0; i < numbers.Count / 2; i++)
            {
                int temp = numbers[i];
                numbers[i] = numbers[numbers.Count - 1 - i];
                numbers[numbers.Count - 1 - i] = temp;
            }

            Console.WriteLine(numbers.Count == 0 ? "empty" : String.Join(' ', numbers));
        }
    }
}
