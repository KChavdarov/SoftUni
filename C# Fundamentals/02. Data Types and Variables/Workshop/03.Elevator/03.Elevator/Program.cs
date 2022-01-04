using System;

namespace _03.Elevator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int p = int.Parse(Console.ReadLine());
            int courses = (int)Math.Ceiling(n / (decimal)p);

            Console.WriteLine(courses);
        }
    }
}
