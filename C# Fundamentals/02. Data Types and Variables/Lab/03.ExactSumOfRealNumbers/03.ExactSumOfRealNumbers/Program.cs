using System;

namespace _03.ExactSumOfRealNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            decimal result = 0u;

            for (int i = 0; i < count; i++)
            {
                decimal num = decimal.Parse(Console.ReadLine());
                result += num;
            }
            Console.WriteLine(result);
        }
    }
}
