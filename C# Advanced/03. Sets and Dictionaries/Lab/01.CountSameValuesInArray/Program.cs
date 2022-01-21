using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.CountSameValuesInArray
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double[] values = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
            Dictionary<double, int> counts = new Dictionary<double, int>();

            for (int i = 0; i < values.Length; i++)
            {
                if (!counts.ContainsKey(values[i]))
                {
                    counts[values[i]] = 0;
                }

                counts[values[i]]++;
            }

            foreach (var entry in counts)
            {
                Console.WriteLine($"{entry.Key} - {entry.Value} times");
            }
        }
    }
}
