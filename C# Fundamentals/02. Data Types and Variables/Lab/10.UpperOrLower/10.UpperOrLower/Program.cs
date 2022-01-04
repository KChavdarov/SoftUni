using System;

namespace _10.UpperOrLower
{
    internal class Program
    {
        static void Main(string[] args)
        {
            char a = Console.ReadLine()[0];

            if(a < 97)
            {
                Console.WriteLine("upper-case");
            }
            else
            {
                Console.WriteLine("lower-case");
            }
        }
    }
}
