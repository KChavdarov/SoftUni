using System;
using System.Linq;

namespace _02.TheBattleOfTheFiveArmies
{
    internal class Program
    {
        static char[][] map;
        static int[] army = new int[2];
        static void Main(string[] args)
        {
            int armor = int.Parse(Console.ReadLine());
            int rows = int.Parse(Console.ReadLine());
            map = new char[rows][];

            for (int i = 0; i < rows; i++)
            {
                char[] line = Console.ReadLine().ToCharArray();
                if (line.Contains('A'))
                {
                    army[0] = i;
                    army[1] = Array.IndexOf(line, 'A');
                }
                map[i] = line;
            }

            while (true)
            {
                string[] tokens = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string direction = tokens[0];
                int row = int.Parse(tokens[1]);
                int col = int.Parse(tokens[2]);
                map[row][col] = 'O';
                Move(direction);
                armor--;
                if (map[army[0]][army[1]] == 'O')
                {
                    armor -= 2;
                    if (armor <= 0)
                    {
                        map[army[0]][army[1]] = 'X';
                        Console.WriteLine($"The army was defeated at {army[0]};{army[1]}.");
                        PrintMap();
                        return;
                    }
                    else
                    {
                        map[army[0]][army[1]] = 'A';
                    }
                }
                else if (map[army[0]][army[1]] == 'M')
                {
                    map[army[0]][army[1]] = '-';
                    Console.WriteLine($"The army managed to free the Middle World! Armor left: {armor}");
                    PrintMap();
                    return;
                }
                else
                {
                    map[army[0]][army[1]] = 'A';
                }
            }

        }

        static bool isValidPosition(int row, int col)
        {
            return row >= 0 && row < map.Length && col >= 0 && col < map[row].Length;
        }

        static void Move(string direction)
        {
            int row = army[0];
            int col = army[1];

            switch (direction)
            {
                case "up":
                    row--;
                    break;
                case "down":
                    row++;
                    break;
                case "right":
                    col++;
                    break;
                case "left":
                    col--;
                    break;
                default:
                    break;
            }
            if (isValidPosition(row, col))
            {
                map[army[0]][army[1]] = '-';
                army[0] = row;
                army[1] = col;
            }
        }

        static void PrintMap()
        {
            foreach (var line in map)
            {
                Console.WriteLine(String.Join(String.Empty, line));
            }
        }
    }
}
