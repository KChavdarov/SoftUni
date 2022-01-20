using System;
using System.Linq;

namespace _06.JaggedArrayModification
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int rows = int.Parse(Console.ReadLine());
            int[][] jagged = new int[rows][];

            for (int i = 0; i < jagged.Length; i++)
            {
                int[] values = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                jagged[i] = new int[values.Length];

                for (int j = 0; j < values.Length; j++)
                {
                    jagged[i][j] = values[j];
                }
            }

            string input = Console.ReadLine();

            while (input != "END")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];
                int row = int.Parse(tokens[1]);
                int col = int.Parse(tokens[2]);
                int value = int.Parse(tokens[3]);

                if (row >= 0 && row < jagged.Length && col >= 0 && col < jagged[row].Length)
                    switch (command)
                    {
                        case "Add":
                            jagged[row][col] += value;
                            break;
                        case "Subtract":
                            jagged[row][col] -= value;
                            break;
                    }

                else
                {
                    Console.WriteLine("Invalid coordinates");
                }

                input = Console.ReadLine();
            }

            for (int i = 0; i < jagged.Length; i++)
            {
                Console.WriteLine(String.Join(' ', jagged[i]));
            }
        }
    }
}
