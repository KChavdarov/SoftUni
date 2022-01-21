using System;
using System.Collections.Generic;

namespace _03.PeriodicTable
{
    internal class Program
    {
        public static object SortedHashSet { get; private set; }

        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            SortedSet<string> table = new SortedSet<string>();

            for (int i = 0; i < count; i++)
            {
                string[] elements = Console.ReadLine().Split(' ');

                foreach (var element in elements)
                {
                    table.Add(element);
                }
            }

            Console.WriteLine(String.Join(' ', table));
        }
    }
}
