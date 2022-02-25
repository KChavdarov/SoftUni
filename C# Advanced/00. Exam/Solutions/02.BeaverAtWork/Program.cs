using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.BeaverAtWork
{
    internal class Program
    {
        static char[,] pond = new char[0, 0];
        static Position beaver = new Position(0, 0);
        static Stack<char> branches = new Stack<char>();
        static int branchCount = 0;
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            pond = new char[n, n];

            for (int i = 0; i < n; i++)
            {
                char[] line = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(char.Parse).ToArray();
                for (int j = 0; j < n; j++)
                {
                    char position = line[j];
                    pond[i, j] = position;

                    if (position == 'B')
                    {
                        beaver = new Position(i, j);
                    }
                    else if (Char.IsLower(position))
                    {
                        branchCount++;
                    }
                }
            }

            string input = Console.ReadLine();

            while (input != "end" && branchCount > 0)
            {
                string direction = input.ToLower();

                if (Move(direction))
                {
                    CollectBranch(direction);
                }
                else
                {
                    if (branches.Count > 0)
                    {
                        branches.Pop();
                    }
                }

                input = Console.ReadLine();
            }

            if (branchCount > 0)
            {
                Console.WriteLine($"The Beaver failed to collect every wood branch. There are {branchCount} branches left.");
            }
            else
            {
                Console.WriteLine($"The Beaver successfully collect {branches.Count} wood branches: {string.Join(", ", branches.Reverse())}.");
            }

            PrintPond();
        }

        public static void PrintPond()
        {
            for (int i = 0; i < pond.GetLength(0); i++)
            {
                for (int j = 0; j < pond.GetLength(1); j++)
                {
                    Console.Write($"{pond[i, j]} ");
                }
                Console.WriteLine();
            }
        }

        public static void CollectBranch(string direction)
        {
            char position = pond[beaver.Row, beaver.Col];
            if (Char.IsLower(position))
            {
                branches.Push(position);
                branchCount--;
            }
            else if (position == 'F')
            {
                Swim(direction);
            }

            pond[beaver.Row, beaver.Col] = 'B';
        }

        public static void Swim(string direction)
        {
            int currentRow = beaver.Row;
            int currentCol = beaver.Col;

            switch (direction)
            {
                case "up":
                    if (currentRow == 0)
                    {
                        currentRow = pond.GetLength(0) - 1;
                    }
                    else
                    {
                        currentRow = 0;
                    }
                    break;
                case "down":
                    if (currentRow == pond.GetLength(0) - 1)
                    {
                        currentRow = 0;
                    }
                    else
                    {
                        currentRow = pond.GetLength(0) - 1;
                    }
                    break;
                case "right":
                    if (currentCol == pond.GetLength(1) - 1)
                    {
                        currentCol = 0;
                    }
                    else
                    {
                        currentCol = pond.GetLength(1) - 1;
                    }
                    break;
                case "left":
                    if (currentCol == 0)
                    {
                        currentCol = pond.GetLength(1) - 1;
                    }
                    else
                    {
                        currentCol = 0;
                    }
                    break;
                default:
                    break;
            }

            pond[beaver.Row, beaver.Col] = '-';
            beaver.Row = currentRow;
            beaver.Col = currentCol;
            CollectBranch(direction);
        }

        public static bool Move(string direction)
        {
            int currentRow = beaver.Row;
            int currentCol = beaver.Col;

            switch (direction)
            {
                case "up":
                    currentRow--;
                    break;
                case "down":
                    currentRow++;
                    break;
                case "right":
                    currentCol++;
                    break;
                case "left":
                    currentCol--;
                    break;
                default:
                    break;
            }

            if (isValidPosition(currentRow, currentCol))
            {
                pond[beaver.Row, beaver.Col] = '-';
                beaver.Row = currentRow;
                beaver.Col = currentCol;
                return true;
            }

            return false;
        }

        public static bool isValidPosition(int row, int col)
        {
            return row >= 0 && row < pond.GetLength(0) && col >= 0 && col < pond.GetLength(1);
        }

        public class Position
        {
            public Position(int row, int col)
            {
                Row = row;
                Col = col;
            }

            public int Row { get; set; }
            public int Col { get; set; }

        }
    }
}
