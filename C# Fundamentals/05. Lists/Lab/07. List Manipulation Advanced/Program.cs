using System;
using System.Collections.Generic;
using System.Linq;

namespace _07._List_Manipulation_Advanced
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            string input = Console.ReadLine().ToLower();
            bool isChanged = false;

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
                            isChanged = true;
                        }
                        break;
                    case "remove":
                        {
                            int n = int.Parse(tokens[1]);
                            numbers.Remove(n);
                            isChanged = true;
                        }
                        break;
                    case "removeat":
                        {
                            int i = int.Parse(tokens[1]);
                            numbers.RemoveAt(i);
                            isChanged = true;
                        }
                        break;
                    case "insert":
                        {
                            int n = int.Parse(tokens[1]);
                            int i = int.Parse(tokens[2]);
                            numbers.Insert(i, n);
                            isChanged = true;
                        }
                        break;
                    case "contains":
                        {
                            int n = int.Parse(tokens[1]);
                            Console.WriteLine(numbers.Contains(n) ? "Yes" : "No such number");
                        }
                        break;
                    case "printeven":
                        {
                            PrintEvenOdd(numbers, "even");
                        }
                        break;
                    case "printodd":
                        {
                            PrintEvenOdd(numbers, "odd");
                        }
                        break;
                    case "getsum":
                        {
                            Console.WriteLine(numbers.Sum());
                        }
                        break;
                    case "filter":
                        {
                            string condition = tokens[1];
                            int n = int.Parse(tokens[2]);
                            Filter(numbers, condition, n);
                        }
                        break;
                }

                input = Console.ReadLine().ToLower();
            }

            if (isChanged)
            {
                Console.WriteLine(String.Join(' ', numbers));
            }
        }

        static void Filter(List<int> numbers, string condition, int number)
        {
            switch (condition)
            {
                case "<":
                    numbers.RemoveAll(a => a >= number);
                    break;
                case ">":
                    numbers.RemoveAll(a => a <= number);
                    break;
                case ">=":
                    numbers.RemoveAll(a => a < number);
                    break;
                case "<=":
                    numbers.RemoveAll(a => a > number);
                    break;
            }

            Console.WriteLine(String.Join(' ', numbers)); ;
        }

        static void PrintEvenOdd(List<int> numbers, string type)
        {
            int remainder = 0;
            if (type == "odd")
            {
                remainder = 1;
            }

            var result = new List<int>();
            foreach (var number in numbers)
            {
                if (number % 2 == remainder)
                {
                    result.Add(number);
                }
            }

            Console.WriteLine(String.Join(' ', result));
        }
    }
}
