using System;

namespace _02.KnightsOfHonor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Action<string> processLine = (string line) =>
            {
                string[] names = line.Split(' ');
                foreach (var name in names)
                {
                    Console.WriteLine($"Sir {name}");
                }
            };

            processLine(Console.ReadLine());
        }
    }
}
