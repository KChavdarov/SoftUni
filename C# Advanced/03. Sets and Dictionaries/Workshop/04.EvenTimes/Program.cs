using System;
using System.Collections.Generic;

namespace _04.EvenTimes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            Dictionary<int, int> numCounts = new Dictionary<int, int>();

            for (int i = 0; i < count; i++)
            {
                int n = int.Parse(Console.ReadLine());

                if (!numCounts.ContainsKey(n))
                {
                    numCounts[n] = 0;
                }

                numCounts[n]++;
            }

            foreach (var entry in numCounts)
            {
                if (entry.Value % 2 == 0)
                {
                    Console.WriteLine(entry.Key);
                    return;
                }
            }
        }
    }
}
