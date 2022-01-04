using System;

namespace _07.ConcatNames
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            string surname = Console.ReadLine();
            string delimiter = Console.ReadLine();

            Console.WriteLine($"{name}{delimiter}{surname}");
        }
    }
}
