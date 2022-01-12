using System;

namespace _03.ExtractFile
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string path = Console.ReadLine();
            string file = path.Substring(path.LastIndexOf('\\') + 1);
            string[] tokens = file.Split('.');
            Console.WriteLine($"File name: {tokens[0]}");
            Console.WriteLine($"File extension: {tokens[1]}");
        }
    }
}
