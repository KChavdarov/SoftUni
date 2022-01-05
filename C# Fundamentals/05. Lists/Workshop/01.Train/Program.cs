using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Train
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> train = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int capacity = int.Parse(Console.ReadLine());
            string input = Console.ReadLine().ToLower();

            while (input != "end")
            {
                string[] tokens = input.Split(' ');

                if (tokens.Length == 1)
                {
                    int passengers = int.Parse(tokens[0]);

                    for (int i = 0; i < train.Count; i++)
                    {
                        if (train[i] + passengers <= capacity)
                        {
                            train[i] += passengers;
                            break;
                        }
                    }
                }
                else if (tokens.Length == 2)
                {
                    int passengers = int.Parse(tokens[1]);

                    train.Add(passengers);
                }

                input = Console.ReadLine().ToLower();
            }

            Console.WriteLine(String.Join(' ', train));
        }
    }
}
