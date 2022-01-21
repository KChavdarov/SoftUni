using System;
using System.Linq;

namespace _03.LargestThreeNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            Console.WriteLine(String.Join(' ', numbers.OrderByDescending(a => a).Take(3)));
        }
    }
}
