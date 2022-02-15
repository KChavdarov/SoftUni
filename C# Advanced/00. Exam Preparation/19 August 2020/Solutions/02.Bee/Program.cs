using System;

namespace _02.Bee
{
    internal class Program
    {
        static char[,] field;
        static int beeRow;
        static int beeCol;
        static int pollinated = 0;

        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            field = new char[n, n];

            for (int i = 0; i < n; i++)
            {
                char[] line = Console.ReadLine().ToCharArray();
                for (int j = 0; j < n; j++)
                {
                    field[i, j] = line[j];
                    if (line[j] == 'B')
                    {
                        beeRow = i;
                        beeCol = j;
                    }
                }
            }

            string input = Console.ReadLine();
            while (input != "End")
            {
                string direction = input;
                if (!Move(direction))
                {
                    Console.WriteLine("The bee got lost!");
                    break;
                }

                input = Console.ReadLine();
            }

            if (pollinated < 5)
            {
                Console.WriteLine($"The bee couldn't pollinate the flowers, she needed {5 - pollinated} flowers more");
            }
            else
            {
                Console.WriteLine($"Great job, the bee managed to pollinate {pollinated} flowers!");
            }
            PrintField();
        }

        static bool Move(string direction)
        {
            int currentRow = beeRow;
            int currentCol = beeCol;

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
            field[beeRow, beeCol] = '.';
            beeRow = currentRow;
            beeCol = currentCol;

            if (isValidPosition())
            {
                if (field[beeRow, beeCol] == 'f')
                {
                    pollinated++;
                }
                else if (field[beeRow, beeCol] == 'O')
                {
                    return Move(direction);
                }

                field[beeRow, beeCol] = 'B';
                return true;
            }
            else
            {
                return false;
            }
        }

        static bool isValidPosition()
        {
            return beeRow >= 0 && beeRow < field.GetLength(0) && beeCol >= 0 && beeCol < field.GetLength(1);
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
    }
}
