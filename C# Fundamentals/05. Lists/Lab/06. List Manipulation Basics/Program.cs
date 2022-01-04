using System;
using System.Collections.Generic;
using System.Linq;

namespace _06._List_Manipulation_Basics
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            string input = Console.ReadLine().ToLower();

            while (input != "end")
            {
                //List<string> tokens = input.Split(' ').ToList();
                string[] tokens = input.Split(' ');
                string command = tokens[0];

                switch (command)
                {
                    case "add":
                        {
                            int n = int.Parse(tokens[1]);
                            numbers.Add(n);
                        }
                        break;
                    case "remove":
                        {
                            int n = int.Parse(tokens[1]);
                            numbers.Remove(n);
                        }
                        break;
                    case "removeat":
                        {
                            int i = int.Parse(tokens[1]);
                            numbers.RemoveAt(i);
                        }
                        break;
                    case "insert":
                        {
                            int n = int.Parse(tokens[1]);
                            int i = int.Parse(tokens[2]);
                            numbers.Insert(i, n);
                        }
                        break;

                }

                input = Console.ReadLine().ToLower();
            }
            Console.WriteLine(String.Join(' ', numbers));
        }
    }
}
