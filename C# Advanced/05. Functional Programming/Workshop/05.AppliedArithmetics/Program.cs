using System;
using System.Linq;

namespace _05.AppliedArithmetics
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            string command = Console.ReadLine();

            while (command != "end")
            {
                if (command == "print")
                {
                    Console.WriteLine(String.Join(' ', numbers));
                }
                else
                {
                    numbers = numbers.Select(GetOperation(command)).ToArray();
                }

                command = Console.ReadLine();
            }
        }

        static Func<int, int> GetOperation(string command)
        {
            switch (command)
            {
                case "add":
                    return a => a + 1;
                case "multiply":
                    return a => a * 2;
                case "subtract":
                    return a => a - 1;
                default:
                    return a => a;
            }
        }
    }
}
