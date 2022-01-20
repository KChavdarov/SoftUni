using System;
using System.Linq;

namespace _03.MaximalSum
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

            int mv = int.MinValue;
            int[,] maxSquare =
            {
                {mv,mv,mv},
                {mv,mv,mv},
                {mv,mv,mv}
            };
            long maxSum = GetSum(maxSquare);

            for (int i = 0; i < table.GetLength(0) - 2; i++)
            {
                for (int j = 0; j < table.GetLength(1) - 2; j++)
                {
                    int[,] square = new int[3, 3];

                    for (int k = 0; k < 3; k++)
                    {
                        for (int l = 0; l < 3; l++)
                        {
                            square[k, l] = table[k + i, j + l];
                        }
                    }

                    long sum = GetSum(square);

                    if (sum > maxSum)
                    {
                        maxSquare = square;
                        maxSum = sum;
                    }
                }
            }

            Console.WriteLine($"Sum = {maxSum}");
            PrintTable(maxSquare);
        }
        static long GetSum(int[,] table)
        {
            long sum = 0;
            for (int i = 0; i < table.GetLength(0); i++)
            {
                for (int j = 0; j < table.GetLength(1); j++)
                {
                    sum += table[i, j];
                }
            }
            return sum;
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
