using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.ListOperations
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            string input = Console.ReadLine().ToLower();

            while (input != "end")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];

                switch (command)
                {
                    case "add":
                        {
                            int element = int.Parse(tokens[1]);

                            numbers.Add(element);
                        }
                        break;
                    case "insert":
                        {
                            int element = int.Parse(tokens[1]);
                            int position = int.Parse(tokens[2]);
                            if (position >= 0 && position < numbers.Count)
                            {
                                numbers.Insert(position, element);
                            }
                            else
                            {
                                Console.WriteLine("Invalid index");
                            }
                        }
                        break;
                    case "remove":
                        {
                            int position = int.Parse(tokens[1]);
                            if (position >= 0 && position < numbers.Count)
                            {
                                numbers.RemoveAt(position);
                            }
                            else
                            {
                                Console.WriteLine("Invalid index");
                            }
                        }
                        break;
                    case "shift":
                        {
                            string direction = tokens[1];
                            int count = int.Parse(tokens[2]);
                            numbers = Shift(numbers, direction, count);
                        }
                        break;
                }

                input = Console.ReadLine().ToLower();
            }
            Console.WriteLine(String.Join(' ', numbers));
        }

        static List<int> Shift(List<int> numbers, string direction, int count)
        {
            for (int i = 0; i < count; i++)
            {
                if (direction == "left")
                {
                    int temp = numbers[0];
                    numbers.RemoveAt(0);
                    numbers = numbers.Append(temp).ToList();
                }
                else if (direction == "right")
                {
                    int temp = numbers[numbers.Count - 1];
                    numbers.RemoveAt(numbers.Count - 1);
                    numbers = numbers.Prepend(temp).ToList();
                }
            }

            return numbers;
        }
    }
}
