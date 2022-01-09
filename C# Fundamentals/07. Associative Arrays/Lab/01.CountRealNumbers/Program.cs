using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.CountRealNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double[] numbers = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            SortedDictionary<double, int> occurances = new SortedDictionary<double, int>();

            foreach (var number in numbers)
            {
                if (!occurances.ContainsKey(number))
                {
                    occurances.Add(number, 0);
                }

                occurances[number]++;
            }

            foreach (var number in occurances)
            {
                Console.WriteLine($"{number.Key} -> {number.Value}");
            }
        }
    }
}
