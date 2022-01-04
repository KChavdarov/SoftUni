using System;

namespace _08.TriangleOfNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());

            for (int i = 1; i <= num; i++)
            {
                string line = "";
                for (int j = 0; j < i; j++)
                {
                    line += $"{i} ";
                }
                Console.WriteLine(line.Trim());
            }

        }
    }
}
