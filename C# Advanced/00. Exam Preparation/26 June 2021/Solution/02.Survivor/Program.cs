using System;

namespace _02.Survivor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string[][] beach = new string[n][];

            for (int i = 0; i < n; i++)
            {
                string[] elements = Console.ReadLine().Split(' ',StringSplitOptions.RemoveEmptyEntries);
                beach[i] = elements;
            }

            string input = Console.ReadLine();

            int player = 0;
            int opponent = 0;

            while (input != "Gong")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];
                int row = int.Parse(tokens[1]);
                int col = int.Parse(tokens[2]);
                switch (command)
                {
                    case "Find":
                        if (IsRowAndColValid(row, col, beach))
                        {
                            string element = beach[row][col];
                            if (element == "T")
                            {
                                beach[row][col] = "-";
                                player++;
                            }
                        }

                        break;
                    case "Opponent":
                        string direction = tokens[3];
                        if (IsRowAndColValid(row, col, beach))
                        {
                            string element = beach[row][col];
                            if (element == "T")
                            {
                                beach[row][col] = "-";
                                opponent++;
                            }
                        }

                        for (int i = 0; i < 3; i++)
                        {
                            if (direction == "up")
                            {
                                row = Math.Max(0, --row);
                            }
                            else if (direction == "down")
                            {
                                row = Math.Min(++row, beach.Length - 1);
                            }
                            else if (direction == "right")
                            {
                                col = Math.Min(++col, beach[row].Length - 1);
                            }
                            else if (direction == "left")
                            {
                                col = Math.Max(--col, 0);
                            }
                            if (IsRowAndColValid(row, col, beach))
                            {
                                string element = beach[row][col];
                                if (element == "T")
                                {
                                    beach[row][col] = "-";
                                    opponent++;
                                }
                            }
                            //else
                            //{
                            //    break;
                            //}
                        }
                        break;
                    default:
                        break;
                }

                input = Console.ReadLine();
            }

            foreach (var line in beach)
            {
                Console.WriteLine(String.Join(' ', line));
            }

            Console.WriteLine($"Collected tokens: {player}");
            Console.WriteLine($"Opponent's tokens: {opponent}");
        }

        static bool IsRowAndColValid(int row, int col, string[][] beach)
        {
            if (row >= 0 && row < beach.Length)
            {
                if (col >= 0 && col < beach[row].Length)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
