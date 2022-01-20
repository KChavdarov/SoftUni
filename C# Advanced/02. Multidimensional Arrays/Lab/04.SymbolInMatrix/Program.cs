using System;

namespace _04.SymbolInMatrix
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] table = new char[n, n];

            for (int i = 0; i < n; i++)
            {
                char[] tokens = Console.ReadLine().ToCharArray();

                for (int j = 0; j < n; j++)
                {
                    table[i, j] = tokens[j];
                }
            }

            char symbol = Console.ReadLine()[0];

            for (int i = 0; i < table.GetLength(0); i++)
            {
                for (int j = 0; j < table.GetLength(1); j++)
                {
                    if (table[i, j] == symbol)
                    {
                        Console.WriteLine($"({i}, {j})");
                        return;
                    }
                }
            }

            Console.WriteLine($"{symbol} does not occur in the matrix ");
        }
    }
}
