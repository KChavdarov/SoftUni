using System;
using System.Linq;

namespace _03.RoundingNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var arr = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();

            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine($"{arr[i]} => {Math.Round(arr[i], MidpointRounding.AwayFromZero)}");
            }
        }
    }
}
