using System;
using System.Linq;

namespace _01.SortEvenNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine()
                .Split(", ")
                .Select(int.Parse)
                .Where(x => x % 2 == 0)
                .OrderBy(x => x)
                .ToArray();

            Console.WriteLine(String.Join(", ", numbers));
        }
    }
}
