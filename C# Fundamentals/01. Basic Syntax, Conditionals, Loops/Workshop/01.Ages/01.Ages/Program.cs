using System;

namespace _01.Ages
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int age = int.Parse(Console.ReadLine());
            if (age > 65)
            {
                Console.WriteLine("elder");
            }
            else if (age > 19)
            {
                Console.WriteLine("adult");
            }
            else if (age > 13)
            {
                Console.WriteLine("teenager");
            }
            else if (age > 2)
            {
                Console.WriteLine("child");
            }
            else if (age >= 0)
            {
                Console.WriteLine("baby");
            }
        }
    }
}
