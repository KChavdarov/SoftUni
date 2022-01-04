using System;

namespace _07.NxNMatrix
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                Console.WriteLine(PrintLine(n));
            }
        }

        static string PrintLine(int n)
        {
            string line = "";
            for (int i = 0; i < n; i++)
            {
                line += $"{n} ";
            }
            return line;
        }
    }
}
