using System;

namespace _08.FactorialDivision
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            double result = Factorial(a) / Factorial(b);
            Console.WriteLine($"{result:f2}");
        }

        static double Factorial(int n)
        {
            double result = n;
            for (int i = n - 1; i >= 1; i--)
            {
                result *= i;
            }
            return result;
        }
    }
}
