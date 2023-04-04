using System;

namespace _09.SumOfOddNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            int num = 1;
            int sum = 0;

            for (int i = 1; i <= count; i++)
            {
                Console.WriteLine(num);
                sum += num;
                num += 2;
            }
            Console.WriteLine($"Sum: {sum}");
        }
    }
}
