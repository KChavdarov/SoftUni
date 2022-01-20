
using System;
using System.Linq;

namespace _06.JaggedArrayManipulator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double[][] jagged = new double[n][];

            for (int i = 0; i < n; i++)
            {
                double[] elements = Console.ReadLine().Split(' ').Select(double.Parse).ToArray();
                jagged[i] = elements;
            }

            for (int i = 0; i < jagged.Length - 1; i++)
            {
                if (i < jagged.Length - 1)
                {
                    if (jagged[i].Length == jagged[i + 1].Length)
                    {
                        for (int j = 0; j < jagged[i].Length; j++)
                        {
                            jagged[i][j] *= 2;
                            jagged[i + 1][j] *= 2;
                        }
                    }
                    else
                    {
                        for (int j = 0; j < jagged[i].Length; j++)
                        {
                            jagged[i][j] /= 2;
                        }
                        for (int j = 0; j < jagged[i + 1].Length; j++)
                        {
                            jagged[i + 1][j] /= 2;
                        }
                    }
                }
            }

            string input = Console.ReadLine();

            while (input != "End")
            {
                string[] tokens = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                if (tokens.Length == 4)
                {
                    string command = tokens[0];
                    int row = int.Parse(tokens[1]);
                    int column = int.Parse(tokens[2]);
                    double value = double.Parse(tokens[3]);

                    if (row >= 0 && row < jagged.Length && column >= 0 && column < jagged[row].Length)
                    {
                        switch (command)
                        {
                            case "Add":
                                jagged[row][column] += value;
                                break;
                            case "Subtract":
                                jagged[row][column] -= value;
                                break;
                        }
                    }

                }

                input = Console.ReadLine();
            }

            PrintJaggedArray(jagged);

            static void PrintJaggedArray<T>(T[][] jagged)
            {
                foreach (var row in jagged)
                {
                    Console.WriteLine(String.Join(" ", row));
                }
            }
        }
    }
}