using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.AddVAT
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<double> numbers = Console.ReadLine().Split(", ").Select(double.Parse).ToList();
            numbers.Select(a => a * 1.2).ToList().ForEach(a => Console.WriteLine($"{a:f2}"));
        }
    }
}
