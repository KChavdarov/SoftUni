﻿using System;

namespace _04.SumOfChars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 0;

            for (int i = 0; i < n; i++)
            {
                char c = Console.ReadLine()[0];
                sum += c;
            }
            Console.WriteLine($"The sum equals: {sum}");
        }
    }
}
