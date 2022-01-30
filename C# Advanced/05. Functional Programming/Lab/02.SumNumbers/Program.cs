using System;
using System.Linq;

namespace _02.SumNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Action<int[]> printCountAndSum = (int[] numbers) =>
            {
                Console.WriteLine(numbers.Length);
                Console.WriteLine(numbers.Sum());
            };

            printCountAndSum(Console.ReadLine().Split(", ").Select(MyIntParse).ToArray());
        }

        static int MyIntParse(string numAsString)
        {
            int result = 0;
            for (int i = 0; i < numAsString.Length; i++)
            {
                int digit = numAsString[i] - '0';

                result += (int)Math.Pow(10, numAsString.Length - i - 1) * digit;
            }

            return result;
        }
    }
}
