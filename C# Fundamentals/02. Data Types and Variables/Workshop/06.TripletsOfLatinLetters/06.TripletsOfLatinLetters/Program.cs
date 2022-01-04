using System;

namespace _06.TripletsOfLatinLetters
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                char a = (char)(i + 97);

                for (int j = 0; j < n; j++)
                {
                    char b = (char)(j + 97);

                    for (int k = 0; k < n; k++)
                    {
                        char c = (char)(k + 97);

                        Console.WriteLine($"{a}{b}{c}");
                    }
                }
            }
        }
    }
}
