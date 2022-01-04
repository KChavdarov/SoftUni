using System;

namespace _02.SumDigits
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            int current = num;
            int sum = 0;

            while (current > 0)
            {
                sum += current % 10;
                current /= 10;
            }

            Console.WriteLine(sum);
        }
    }
}
