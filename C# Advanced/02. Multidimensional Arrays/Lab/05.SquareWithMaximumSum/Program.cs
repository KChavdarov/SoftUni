using System;
using System.Linq;

namespace _05.SquareWithMaximumSum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] tokens = Console.ReadLine().Split(", ");
            int subRows = int.Parse(tokens[0]);
            int subCols = int.Parse(tokens[1]);

            tokens = Console.ReadLine().Split(", ");
            int rows = int.Parse(tokens[0]);
            int columns = int.Parse(tokens[1]);

            int[,] matrix = new int[rows, columns];


            for (int row = 0; row < rows; row++)
            {
                int[] elements = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();

                for (int column = 0; column < columns; column++)
                {
                    matrix[row, column] = elements[column];
                }
            }

            int[,] maxSubmatrix = new int[subRows, subCols];

            for (int subRow = 0; subRow < Math.Min(subRows, rows); subRow++)
            {
                for (int subCol = 0; subCol < Math.Min(subCols, columns); subCol++)
                {
                    maxSubmatrix[subRow, subCol] = matrix[subRow, subCol];
                }
            }

            for (int row = 0; row < matrix.GetLength(0) - (subRows - 1); row++)
            {
                for (int col = 0; col < matrix.GetLength(1) - (subCols - 1); col++)
                {
                    int[,] submatrix = new int[subRows, subCols];

                    for (int subRow = 0; subRow < subRows; subRow++)
                    {
                        for (int subCol = 0; subCol < subCols; subCol++)
                        {
                            submatrix[subRow, subCol] = matrix[row + subRow, col + subCol];
                        }
                    }

                    if (GetSum(submatrix) > GetSum(maxSubmatrix))
                    {
                        maxSubmatrix = submatrix;
                    }
                }
            }

            for (int subRow = 0; subRow < subRows; subRow++)
            {
                for (int subCol = 0; subCol < subCols; subCol++)
                {
                    Console.Write(maxSubmatrix[subRow, subCol] + " ");
                }
                Console.WriteLine();
            }

            Console.WriteLine(GetSum(maxSubmatrix));
        }

        static int GetSum(int[,] matrix)
        {
            int sum = 0;
            foreach (var element in matrix)
            {
                sum += element;
            }
            return sum;
        }
    }
}
