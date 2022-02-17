using System;
using System.Collections.Generic;

namespace _02.Armory
{
    internal class Program
    {
        static char[,] field = new char[0, 0];
        static Position Officer = new Position(0, 0);
        static List<Position> mirrors = new List<Position>();


        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            field = new char[n, n];
            int purchases = 0;

            for (int i = 0; i < n; i++)
            {
                char[] line = Console.ReadLine().ToCharArray();
                for (int j = 0; j < n; j++)
                {
                    char @char = line[j];
                    field[i, j] = @char;
                    if (@char == 'A')
                    {
                        Officer = new Position(i, j);
                    }
                    else if (@char == 'M')
                    {
                        mirrors.Add(new Position(i, j));
                    }
                }
            }

            while (purchases < 65)
            {
                string direction = Console.ReadLine();

                Move(direction);

                if (IsValidPosition())
                {
                    if (field[Officer.Row, Officer.Col] == 'M')
                    {
                        Teleport();
                    }
                    else if (Char.IsDigit(field[Officer.Row, Officer.Col]))
                    {
                        purchases += (int)Char.GetNumericValue(field[Officer.Row, Officer.Col]);
                    }

                    field[Officer.Row, Officer.Col] = 'A';
                }
                else
                {
                    break;
                }
            }

            if (purchases < 65)
            {
                Console.WriteLine("I do not need more swords!");
            }
            else
            {
                Console.WriteLine("Very nice swords, I will come back for more!");
            }

            Console.WriteLine($"The king paid {purchases} gold coins.");
            PrintField();
        }

        static void PrintField()
        {
            for (int i = 0; i < field.GetLength(0); i++)
            {
                for (int j = 0; j < field.GetLength(1); j++)
                {
                    Console.Write(field[i, j]);
                }
                Console.WriteLine();
            }
        }

        static void Teleport()
        {
            field[Officer.Row, Officer.Col] = '-';
            Position other = mirrors.Find(a => a.Row != Officer.Row && a.Col != Officer.Col);
            Officer.Row = other.Row;
            Officer.Col = other.Col;
        }

        static void Move(string direction)
        {
            int currentRow = Officer.Row;
            int currentCol = Officer.Col;

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

            field[Officer.Row, Officer.Col] = '-';
            Officer.Row = currentRow;
            Officer.Col = currentCol;
        }

        static bool IsValidPosition()
        {
            return Officer.Row >= 0 && Officer.Row < field.GetLength(0) && Officer.Col >= 0 && Officer.Col < field.GetLength(1);
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
