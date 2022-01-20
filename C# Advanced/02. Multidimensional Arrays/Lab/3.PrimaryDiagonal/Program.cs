using System;
using System.Linq;

namespace _3.PrimaryDiagonal
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[,] square = new int[n, n];
            int diagSum = 0;

            for (int i = 0; i < n; i++)
            {
                int[] tokens = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

                for (int j = 0; j < n; j++)
                {
                    square[i, j] = tokens[j];
                }
            }

            for (int i = 0; i < square.GetLength(0); i++)
            {
                diagSum += square[i, i];
            }

            Console.WriteLine(diagSum);
        }
    }
}
