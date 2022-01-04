using System;

namespace _10.MultiplyEvensByOdds
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num = Math.Abs(int.Parse(Console.ReadLine()));

            Console.WriteLine(GetSumOfDigits(num, "event") * GetSumOfDigits(num, "odd"));
        }

        static int GetSumOfDigits(int n, string type)
        {
            int remainder = 0;
            if (type == "odd") { remainder = 1; }
            int sum = 0;
            while (n != 0)
            {
                int digit = n % 10;
                if (digit % 2 == remainder)
                {
                    sum += digit;
                }
                n /= 10;
            }
            return sum;
        }
    }
}
