using System;
using System.Collections.Generic;

namespace _05.DigitsLettersAndOther
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine();
            List<char> digits = new List<char>();
            List<char> letters = new List<char>();
            List<char> chars = new List<char>();


            foreach (var symbol in str)
            {
                if (char.IsDigit(symbol))
                {
                    digits.Add(symbol);
                }
                else if (char.IsLetter(symbol))
                {
                    letters.Add(symbol);
                }
                else if (!char.IsWhiteSpace(symbol))
                {
                    chars.Add(symbol);
                }
            }

            Console.WriteLine(String.Join("", digits));
            Console.WriteLine(String.Join("", letters));
            Console.WriteLine(String.Join("", chars));
        }
    }
}
