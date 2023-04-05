using System;
using System.Collections.Generic;

namespace _02.Warships
{
    internal class Program
    {
        static string[,] field;
        static Dictionary<string, int> ships = new Dictionary<string, int>() { { "<", 0 }, { ">", 0 } };
        static int destroyedShips;
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            field = new string[n, n];
            string[] attacks = Console.ReadLine().Split(',', StringSplitOptions.RemoveEmptyEntries);
            for (int i = 0; i < n; i++)
            {
                string[] line = Console.ReadLine().Split(" ");
                for (int j = 0; j < n; j++)
                {
                    field[i, j] = line[j];
                    if (line[j] == "<" || line[j] == ">")
                    {
                        ships[line[j]]++;
                    }
                }
            }

            for (int i = 0; i < attacks.Length; i++)
            {
                string[] tokens = attacks[i].Split(' ', StringSplitOptions.RemoveEmptyEntries);
                int row = int.Parse(tokens[0]);
                int col = int.Parse(tokens[1]);

                if (isValidPosition(row, col))
                {
                    string item = field[row, col];
                    //string player = i % 2 == 0 ? "One" : "Two";
                    string enemy = i % 2 == 0 ? ">" : "<";

                    if (item == enemy)
                    {
                        ships[enemy]--;
                        destroyedShips++;
                        field[row, col] = "X";
                    }
                    else if (item == "#")
                    {
                        Explode(row, col);
                    }

                    //if (ships[enemy] == 0)
                    //{
                    //    Console.WriteLine($"Player {player} has won the game! {destroyedShips} ships have been sunk in the battle.");
                    //    return;
                    //}

                    if (ships[">"] == 0)
                    {
                        Console.WriteLine($"Player One has won the game! {destroyedShips} ships have been sunk in the battle.");
                        return;
                    }
                    if (ships["<"] == 0)
                    {
                        Console.WriteLine($"Player Two has won the game! {destroyedShips} ships have been sunk in the battle.");
                        return;
                    }
                }
            }

            Console.WriteLine($"It's a draw! Player One has {ships["<"]} ships left. Player Two has {ships[">"]} ships left.");

            //PrintField();

        }

        private static void Explode(int row, int col)
        {
            for (int i = -1; i <= 1; i++)
            {
                int currentRow = row + i;
                if (currentRow >= 0 && currentRow < field.GetLength(0))
                {
                    for (int j = -1; j <= 1; j++)
                    {
                        int currentCol = col + j;
                        if (currentCol >= 0 && currentCol < field.GetLength(1))
                        {
                            string element = field[currentRow, currentCol];

                            if (element == "<" || element == ">")
                            {
                                ships[element]--;
                                destroyedShips++;
                                field[currentRow, currentCol] = "X";
                            }
                        }
                    }
                }
            }

            field[row,col] = "X";
        }

        static bool isValidPosition(int row, int col)
        {
            return row >= 0 && row < field.GetLength(0) && col >= 0 && col < field.GetLength(1);
        }

        static void PrintField()
        {
            for (int i = 0; i < field.GetLength(0); i++)
            {
                for (int j = 0; j < field.GetLength(1); j++)
                {
                    Console.Write($"{field[i, j]} ");
                }
                Console.WriteLine();
            }
        }
    }
}
