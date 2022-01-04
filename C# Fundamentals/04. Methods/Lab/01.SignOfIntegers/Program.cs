using System;

namespace _01.SignOfIntegers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            GetSign(n);
        }
        static void GetSign(int n)
        {
            if (n == 0)
            {
                Console.WriteLine($"The number {n} is zero.");
            }
            else if (n < 0)
            {
                Console.WriteLine($"The number {n} is negative.");
            }
            else
            {
                Console.WriteLine($"The number {n} is positive.");
            }
        }
    }
}
