using System;
using System.Linq;

namespace _06.EvenOrOddSubtraction
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int sum = 0;

            foreach (var number in numbers)
            {
                if (number % 2 == 0)
                {
                    sum += number;
                }
                else
                {
                    sum -= number;
                }
            }
            Console.WriteLine(sum);
        }
    }
}
