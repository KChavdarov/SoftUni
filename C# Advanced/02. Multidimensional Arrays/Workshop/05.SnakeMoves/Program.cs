using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.SnakeMoves
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] size = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            char[,] table = new char[size[0], size[1]];

            Queue<char> queue = new Queue<char>(Console.ReadLine().ToCharArray());

            for (int i = 0; i < table.GetLength(0); i++)
            {
                for (int j = 0; j < table.GetLength(1); j++)
                {
                    if (i % 2 == 0)
                    {
                        table[i, j] = GetChar(queue);
                    }
                    else
                    {
                        table[i, table.GetLength(1) - j - 1] = GetChar(queue);
                    }
                }
            }

            PrintTable(table);

            static void PrintTable<T>(T[,] table)
            {
                for (int i = 0; i < table.GetLength(0); i++)
                {
                    for (int j = 0; j < table.GetLength(1); j++)
                    {
                        Console.Write(table[i, j]);
                    }
                    Console.WriteLine();
                }
            }

            static char GetChar(Queue<char> queue)
            {
                char a = queue.Dequeue();
                queue.Enqueue(a);
                return a;
            }
        }
    }
}
