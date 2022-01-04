using System;

namespace _02.PoundsToDollars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int pounds = int.Parse(Console.ReadLine());
            decimal dollars = pounds * 1.31m;
            Console.WriteLine($"{dollars:f3}");
        }
    }
}
