using System;

namespace _02.PrintNumbersInReverse
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            var arr = new int[n];

            for (int i = 0; i < arr.Length; i++)
            {
                arr[n - i - 1] = int.Parse(Console.ReadLine());
            }

            Console.WriteLine(String.Join(' ', arr));
        }
    }
}