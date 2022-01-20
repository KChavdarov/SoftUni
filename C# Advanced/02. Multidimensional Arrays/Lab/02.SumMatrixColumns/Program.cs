using System;
using System.Linq;

namespace _02.SumMatrixColumns
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] tokens = Console.ReadLine().Split(", ");
            int rows = int.Parse(tokens[0]);
            int cols = int.Parse(tokens[1]);
            int[,] table = new int[rows, cols];

            for (int i = 0; i < rows; i++)
            {
                int[] elements = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

                for (int j = 0; j < cols; j++)
                {
                    table[i, j] = elements[j];
                }
            }

            for (int col = 0; col < table.GetLength(1); col++)
            {
                int sum = 0;
                for (int row = 0; row < table.GetLength(0); row++)
                {
                    sum += table[row, col];
                }

                Console.WriteLine(sum);
            }
        }
    }
}
