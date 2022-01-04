using System;

namespace _06.CalcRectArea
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());

            Console.WriteLine(CalcArea(a, b));
        }

        static int CalcArea(int a, int b)
        {
            return a * b;
        }
    }
}
