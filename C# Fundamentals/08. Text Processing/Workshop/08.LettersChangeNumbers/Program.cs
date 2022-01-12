using System;

namespace _08.LettersChangeNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] texts = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
            decimal result = 0;

            foreach (var text in texts)
            {
                char letterA = text[0];
                char letterB = text[text.Length - 1];
                decimal number = decimal.Parse(text[1..^1]);

                if (char.IsUpper(letterA))
                {
                    decimal position = letterA - 65 + 1;
                    number /= position;
                }
                else if (char.IsLower(letterA))
                {
                    decimal position = letterA - 97 + 1;

                    number *= position;
                }

                if (char.IsUpper(letterB))
                {
                    decimal position = letterB - 65 + 1;
                    number -= position;
                }
                else if (char.IsLower(letterB))
                {
                    decimal position = letterB - 97 + 1;
                    number += position;
                }

                result += number;
            }

            Console.WriteLine($"{result:f2}");
        }
    }
}