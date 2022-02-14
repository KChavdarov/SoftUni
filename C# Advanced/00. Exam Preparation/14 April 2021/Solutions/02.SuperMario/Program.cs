using System;
using System.Linq;

namespace _02.SuperMario
{
    internal class Program
    {
        static char[][] maze;
        static int lives;
        static int heroRow;
        static int heroCol;
        static void Main(string[] args)
        {
            lives = int.Parse(Console.ReadLine());
            int rows = int.Parse(Console.ReadLine());
            maze = new char[rows][];


            for (int i = 0; i < rows; i++)
            {
                char[] row = Console.ReadLine().ToCharArray();
                if (row.Contains('M'))
                {
                    heroRow = i;
                    heroCol = Array.IndexOf(row, 'M');
                }
                maze[i] = row;
            }

            while (true)
            {
                string[] tokens = Console.ReadLine().Split(" ");
                string direction = tokens[0];
                int row = int.Parse(tokens[1]);
                int column = int.Parse(tokens[2]);
                maze[row][column] = 'B';

                Move(direction);

                if (maze[heroRow][heroCol] == 'B')
                {
                    lives -= 2;
                }
                else if (maze[heroRow][heroCol] == 'P')
                {
                    maze[heroRow][heroCol] = '-';
                    Console.WriteLine($"Mario has successfully saved the princess! Lives left: {lives}");
                    break;
                }

                if (lives <= 0)
                {
                    maze[heroRow][heroCol] = 'X';
                    Console.WriteLine($"Mario died at {heroRow};{heroCol}.");
                    break;
                }

                maze[heroRow][heroCol] = 'M';
            }

            foreach (var row in maze)
            {
                Console.WriteLine(String.Join(string.Empty, row));
            }
        }

        static void Move(string direction)
        {
            int row = heroRow;
            int col = heroCol;

            switch (direction)
            {
                case "W":
                    row--;
                    break;
                case "S":
                    row++;
                    break;
                case "A":
                    col--;
                    break;
                case "D":
                    col++;
                    break;
                default:
                    break;
            }

            lives--;
            if (IsValidPosition(row, col))
            {
                maze[heroRow][heroCol] = '-';
                heroRow = row;
                heroCol = col;
            }
        }

        static bool IsValidPosition(int row, int col)
        {
            return row >= 0 && row < maze.Length && col >= 0 && col < maze[row].Length;
        }
    }
}
