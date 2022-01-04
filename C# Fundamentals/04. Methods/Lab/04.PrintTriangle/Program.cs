using System;
using System.Text;

namespace _04.PrintTriangle
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            for (int i = 1; i <= n; i++)
            {
                Console.WriteLine(PrintLine(i));
            }
            for (int i = n - 1; i >= 1; i--)
            {
                Console.WriteLine(PrintLine(i));
            }

        }

        static string PrintLine(int n)
        {
            StringBuilder line = new StringBuilder();
            for (int i = 1; i <= n; i++)
            {
                line.Append($" {i}");
            }
            return line.ToString();
        }
    }
}
