using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.GaussTrick
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            numbers = Condense(numbers);
            Console.WriteLine(String.Join(' ', numbers));
        }

        static List<int> Condense(List<int> numbers)
        {
            int middle = numbers.Count / 2;
            for (int i = 0; i < middle; i++)
            {
                numbers[i] += numbers[numbers.Count - 1];
                numbers.RemoveAt(numbers.Count - 1);
            }

            return numbers;
        }
    }
}
