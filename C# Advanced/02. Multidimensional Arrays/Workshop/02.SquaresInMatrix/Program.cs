using System;
using System.Linq;

namespace _02.SquaresInMatrix
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] size = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            string[,] table = new string[size[0], size[1]];

            for (int i = 0; i < size[0]; i++)
            {
                string[] cells = Console.ReadLine().Split(' ');

                for (int j = 0; j < size[1]; j++)
                {
                    table[i, j] = cells[j];
                }
            }

            int count = 0;

            for (int i = 0; i < table.GetLength(0) - 1; i++)
            {
                for (int j = 0; j < table.GetLength(1) - 1; j++)
                {
                    string A1 = table[i, j];
                    string A2 = table[i, j + 1];
                    string B1 = table[i + 1, j];
                    string B2 = table[i + 1, j + 1];

                    if (A1 == A2 && A1 == B1 && A1 == B2)
                    {
                        count++;
                    }
                }
            }

            Console.WriteLine(count);
        }
    }
}
