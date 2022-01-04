using System;
using System.Linq;

namespace _08.MagicSum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int target = int.Parse(Console.ReadLine());

            for (int i = 0; i < numbers.Length; i++)
            {
                for (int j = i + 1; j < numbers.Length; j++)
                {
                    if (numbers[i] + numbers[j] == target)
                    {
                        Console.WriteLine($"{numbers[i]} {numbers[j]}");
                        break;
                    }
                }
            }
        }
    }
}
