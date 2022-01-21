using System;
using System.Collections.Generic;

namespace _05.CountSymbols
{
    internal class Program
    {
        static void Main(string[] args)
        {
            char[] chars = Console.ReadLine().ToCharArray();
            SortedDictionary<char, int> counts = new SortedDictionary<char, int>();

            foreach (var @char in chars)
            {
                if (!counts.ContainsKey(@char))
                {
                    counts[@char] = 0;
                }

                counts[@char]++;
            }

            foreach (var entry in counts)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value} time/s");
            }
        }
    }
}
