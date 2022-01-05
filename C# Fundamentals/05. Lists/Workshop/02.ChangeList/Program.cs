using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.ChangeList
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
                    case "delete":
                        {
                            int element = int.Parse(tokens[1]);

                            numbers.RemoveAll(a => a == element);
                        }
                        break;
                    case "insert":
                        {
                            int element = int.Parse(tokens[1]);
                            int position = int.Parse(tokens[2]);
                            numbers.Insert(position, element);
                        }
                        break;
                }

                input = Console.ReadLine().ToLower();
            }
            Console.WriteLine(String.Join(' ', numbers));
        }
    }
}
