﻿using System;

namespace _12.EvenNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num;
            do
            {
                Console.WriteLine("Please enter an even number.");
                num = int.Parse(Console.ReadLine());
            }
            while (num % 2 != 0);
            Console.WriteLine($"The number is: {Math.Abs(num)}");
        }
    }
}
