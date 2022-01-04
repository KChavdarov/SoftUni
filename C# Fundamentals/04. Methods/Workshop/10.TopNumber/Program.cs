using System;

namespace _10.TopNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 1; i <= n; i++)
            {
                if (isDigitSumDivisibleByEight(i) && HoldsOddDigit(i))
                {
                    Console.WriteLine(i);
                }
            }
        }

        static bool isDigitSumDivisibleByEight(int n)
        {
            int sum = 0;

            while (n > 0)
            {
                sum += n % 10;
                n /= 10;
            }

            return sum % 8 == 0;
        }

        static bool HoldsOddDigit(int n)
        {
            while (n > 0)
            {
                int digit = n % 10;
                if (digit % 2 == 1)
                {
                    return true;
                }

                n /= 10;
            }

            return false;
        }
    }
}
