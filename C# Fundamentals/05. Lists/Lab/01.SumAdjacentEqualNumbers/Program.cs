using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.SumAdjacentEqualNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<double> numbers = Console.ReadLine().Split(' ').Select(double.Parse).ToList();

            for (int i = 0; i < numbers.Count - 1; i++)
            {
                if (numbers[i] == numbers[i + 1])
                {
                    numbers[i + 1] += numbers[i];
                    numbers.RemoveAt(i);
                    i = -1;
                    continue;
                }
            }
            Console.WriteLine(String.Join(' ', numbers));
        }
    }
}
