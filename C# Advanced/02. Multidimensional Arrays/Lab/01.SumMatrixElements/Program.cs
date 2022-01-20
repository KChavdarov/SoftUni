using System;
using System.Linq;

namespace _01.SumMatrixElements
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] tokens = Console.ReadLine().Split(", ");
            int rows = int.Parse(tokens[0]);
            int cols = int.Parse(tokens[1]);
            int[,] table = new int[rows, cols];
            int sum = 0;

            for (int i = 0; i < rows; i++)
            {
                int[] elements = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();

                for (int j = 0; j < cols; j++)
                {
                    table[i, j] = elements[j];
                    sum += elements[j];
                }
            }

            Console.WriteLine(table.GetLength(0));
            Console.WriteLine(table.GetLength(1));
            Console.WriteLine(sum);
        }
    }
}
