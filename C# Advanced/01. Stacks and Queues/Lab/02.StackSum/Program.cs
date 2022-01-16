using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.StackSum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<int> numbers = new Stack<int>();
            string input = Console.ReadLine();

            foreach (var number in input.Split(' ').Select(int.Parse).ToArray())
            {
                numbers.Push(number);
            }

            input = Console.ReadLine().ToLower();

            while (input != "end")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];

                switch (command)
                {
                    case "add":
                        numbers.Push(int.Parse(tokens[1]));
                        numbers.Push(int.Parse(tokens[2]));
                        break;
                    case "remove":
                        int count = int.Parse(tokens[1]);
                        if (count <= numbers.Count)
                        {
                            for (int i = 0; i < count; i++)
                            {
                                numbers.Pop();
                            }
                        }
                        break;
                }

                input = Console.ReadLine().ToLower();
            }

            int sum = 0;
            while (numbers.Count > 0)
            {
                sum += numbers.Pop();
            }

            Console.WriteLine($"Sum: {sum}");
        }
    }
}
