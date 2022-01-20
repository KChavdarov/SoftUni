using System;
using System.Linq;

namespace _1.DiagonalDifference
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int size = int.Parse(Console.ReadLine());
            int[,] table = new int[size, size];

            for (int row = 0; row < size; row++)
            {
                int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

                for (int col = 0; col < size; col++)
                {
                    table[row, col] = numbers[col];
                }
            }

            int primary = 0;
            int secondary = 0;

            for (int i = 0; i < size; i++)
            {
                primary += table[i, i];
                secondary += table[i, size - i - 1];
            }

            Console.WriteLine(Math.Abs(primary - secondary));
        }
    }
}
