using System;
using System.Linq;

namespace _04.MatrixShuffling
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] size = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int[,] table = new int[size[0], size[1]];

            for (int i = 0; i < size[0]; i++)
            {
                int[] cells = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();

                for (int j = 0; j < size[1]; j++)
                {
                    table[i, j] = cells[j];
                }
            }

            string input = Console.ReadLine();

            while (input != "END")
            {
                string[] tokens = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);
                if (tokens.Length == 5)
                {
                    string action = tokens[0];
                    int rowA = int.Parse(tokens[1]);
                    int colA = int.Parse(tokens[2]);
                    int rowB = int.Parse(tokens[3]);
                    int colB = int.Parse(tokens[4]);

                    if (
                        action != "swap"
                        || rowA < 0 || rowA > table.GetLength(0)
                        || rowB < 0 || rowB > table.GetLength(0)
                        || colA < 0 || colA > table.GetLength(1)
                        || colB < 0 || colB > table.GetLength(1)
                    )
                    {
                        Console.WriteLine("Invalid input!");
                    }
                    else
                    {
                        int temp = table[rowA, colA];
                        table[rowA, colA] = table[rowB, colB];
                        table[rowB, colB] = temp;

                        PrintTable(table);
                    }

                }
                else
                {
                    Console.WriteLine("Invalid input!");
                }

                input = Console.ReadLine();
            }
        }

        static void PrintTable<T>(T[,] table)
        {
            for (int i = 0; i < table.GetLength(0); i++)
            {
                for (int j = 0; j < table.GetLength(1); j++)
                {
                    Console.Write(table[i, j] + " ");
                }
                Console.WriteLine();
            }
        }

    }
}
