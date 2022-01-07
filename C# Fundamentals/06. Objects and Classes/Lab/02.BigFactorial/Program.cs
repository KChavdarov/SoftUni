using System;
using System.Numerics;

namespace _02.BigFactorial
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            BigInteger result = new BigInteger(n);

            for (int i = n - 1; i >= 2; i--)
            {
                result *= i;
            }

            Console.WriteLine(result);

        }
    }
}
