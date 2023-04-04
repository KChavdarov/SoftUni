using System;

namespace _06.StrongNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string numAsString = Console.ReadLine();
            int sum = 0;
            int num = int.Parse(numAsString);

            while (num > 0)
            {
                int digit = num % 10;
                sum += Factorial(digit);
                num /= 10;
            }

            //for (int i = 0; i < numAsString.Length; i++)
            //{
            //    int num = int.Parse(numAsString[i].ToString());
            //    int product = 1;

            //    for (int j = num; j > 1; j--)
            //    {
            //        product *= j;
            //    }

            //    sum += product;
            //}

            if (int.Parse(numAsString) == sum)
            {
                Console.WriteLine("yes");
            }
            else
            {
                Console.WriteLine("no");
            }
        }

        private static int Factorial(int num)
        {
            int result = 1;
            for (int i = num; i > 1; i--)
            {
                result *= i;
            }

            return result;
        }
    }
}