using System;

namespace _02.ReVolt
{
    internal class Program
    {
        static char[,] field = new char[0, 0];
        static Position player = new Position(0, 0);
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            int commandCount = int.Parse(Console.ReadLine());
            field = new char[count, count];
            for (int i = 0; i < count; i++)
            {
                char[] line = Console.ReadLine().ToCharArray();
                for (int j = 0; j < count; j++)
                {
                    char @char = line[j];
                    field[i, j] = @char;

                    if (@char == 'f')
                    {
                        player = new Position(i, j);
                    }
                }
            }

            bool isWon = false;
            for (int i = 0; i < commandCount; i++)
            {
                string direction = Console.ReadLine();
                isWon = Move(direction);
                if (isWon)
                {
                    Console.WriteLine("Player won!");
                    break;
                }
            }

            if (!isWon)
            {
                Console.WriteLine("Player lost!");
            }

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

        static bool Move(string direction)
        {
            int row = player.Row;
            int col = player.Col;
            string opposite = "";

            switch (direction)
            {
                case "up":
                    row--;
                    if (row < 0)
                    {
                        row = field.GetLength(0) - 1;
                    }
                    opposite = "down";
                    break;
                case "down":
                    row++;
                    if (row >= field.GetLength(0))
                    {
                        row = 0;
                    }
                    opposite = "up";
                    break;
                case "right":
                    col++;
                    if (col >= field.GetLength(1))
                    {
                        col = 0;
                    }
                    opposite = "left";
                    break;
                case "left":
                    col--;
                    if (col < 0)
                    {
                        col = field.GetLength(1) - 1;
                    }
                    opposite = "right";
                    break;
                default:
                    break;
            }
            char currentPosition = field[player.Row, player.Col];
            if (currentPosition != 'B' && currentPosition != 'F' && currentPosition != 'T')
            {
                field[player.Row, player.Col] = '-';
            }
            player.Row = row;
            player.Col = col;

            char position = field[player.Row, player.Col];

            if (position == 'B')
            {
                return Move(direction);
            }
            else if (position == 'T')
            {
                return Move(opposite);
            }
            else if (position == 'F')
            {
                field[player.Row, player.Col] = 'f';
                return true;
            }
            else
            {
                field[player.Row, player.Col] = 'f';
                return false;
            }
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
