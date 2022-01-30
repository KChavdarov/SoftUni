using System;

namespace _01.ActionPrint
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Action<string> processLine = (string line) =>
            {
                string[] words = line.Split(' ');
                foreach (var word in words)
                {
                    Console.WriteLine(word);
                }
            };

            processLine(Console.ReadLine());
        }
    }
}
