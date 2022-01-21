using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.SetsOfElements
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] sizes = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int n = sizes[0];
            int m = sizes[1];
            HashSet<int> a = new HashSet<int>();
            HashSet<int> b = new HashSet<int>();

            for (int i = 0; i < n; i++)
            {
                int number = int.Parse(Console.ReadLine());
                a.Add(number);
            }

            for (int i = 0; i < m; i++)
            {
                int number = int.Parse(Console.ReadLine());
                b.Add(number);
            }

            var intersect = a.Intersect(b).ToArray();

            Console.WriteLine(String.Join(' ', intersect));
        }
    }
}
