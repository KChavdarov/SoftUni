using System;
using System.Collections.Generic;

namespace _01.CountCharsInAString
{
    internal class Program
    {
        static void Main(string[] args)
        {
            char[] letters = Console.ReadLine().ToCharArray();
            Dictionary<char, int> occurances = new Dictionary<char, int>();

            foreach (var letter in letters)
            {
                if (letter != ' ')
                {
                    if (!occurances.ContainsKey(letter))
                    {
                        occurances[letter] = 0;
                    }

                    occurances[letter]++;
                }
            }

            foreach (var entry in occurances)
            {
                Console.WriteLine($"{entry.Key} -> {entry.Value}");
            }
        }
    }
}
