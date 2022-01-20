using System;
using System.Linq;

namespace _08.Bombs
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] table = new int[n, n];

            for (int i = 0; i < n; i++)
            {
                int[] values = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    table[i, j] = values[j];
                }
            }

            string[] bombs = Console.ReadLine().Split(' ');

            foreach (var bomb in bombs)
            {
                Detonate(table, bomb);
            }

            int[] countAndSum = GetCountAndSum(table);
            Console.WriteLine($"Alive cells: {countAndSum[0]}");
            Console.WriteLine($"Sum: {countAndSum[1]}");
            PrintTable(table);


            static int[] GetCountAndSum(int[,] table)
            {
                int count = 0;
                int sum = 0;

                for (int i = 0; i < table.GetLength(0); i++)
                {
                    for (int j = 0; j < table.GetLength(1); j++)
                    {
                        if (table[i, j] > 0)
                        {
                            count++;
                            sum += table[i, j];
                        }
                    }
                }

                return new int[] { count, sum };
            }

            static void Detonate(int[,] table, string bomb)
            {
                int[] coordinates = bomb.Split(',').Select(int.Parse).ToArray();
                int x = coordinates[0];
                int y = coordinates[1];

                int bombValue = table[x, y];

                if (bombValue > 0)
                {
                    for (int i = x - 1; i < x + 2; i++)
                    {
                        for (int j = y - 1; j < y + 2; j++)
                        {
                            if (i >= 0 && i < table.GetLength(0) && j >= 0 && j < table.GetLength(1))
                            {
                                if (table[i, j] > 0)
                                {
                                    table[i, j] -= bombValue;
                                }
                            }
                        }
                    }
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
}
