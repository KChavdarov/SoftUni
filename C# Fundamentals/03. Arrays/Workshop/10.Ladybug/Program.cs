using System;
using System.Linq;

namespace _10.Ladybug
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int fieldSize = int.Parse(Console.ReadLine());
            int[] field = new int[fieldSize];
            int[] positions = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            string input = Console.ReadLine();

            foreach (var position in positions)
            {
                if (position >= 0 && position < fieldSize)
                    field[position] = 1;
            }

            while (input != "end")
            {
                var tokens = input.Split(' ');
                int start = int.Parse(tokens[0]);
                string direction = tokens[1];
                int distance = int.Parse(tokens[2]);

                if ((start >= 0) && (start < fieldSize) && (field[start] == 1) && (distance != 0))
                {
                    field[start] = 0;

                    switch (direction)
                    {
                        case "right":
                            {
                                int end = start + distance;
                                while ((end < fieldSize) && (end >= 0))
                                {
                                    if (field[end] == 0)
                                    {
                                        field[end] = 1;
                                        break;
                                    }
                                    else
                                    {
                                        end += distance;
                                    }
                                }
                            }
                            break;
                        case "left":
                            {
                                int end = start - distance;
                                while ((end >= 0) && (end < fieldSize))
                                {
                                    if (field[end] == 0)
                                    {
                                        field[end] = 1;
                                        break;
                                    }
                                    else
                                    {
                                        end -= distance;
                                    }
                                }
                            }
                            break;
                    }
                }
                input = Console.ReadLine();
            }
            Console.WriteLine(String.Join(' ', field));
        }
    }
}
