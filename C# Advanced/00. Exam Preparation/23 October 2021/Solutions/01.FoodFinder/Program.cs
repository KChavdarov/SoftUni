using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.FoodFinder
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<char> vowels = new Queue<char>(Console.ReadLine().ToCharArray());
            Stack<char> consonants = new Stack<char>(Console.ReadLine().ToCharArray());
            Dictionary<string, List<char>> words = new Dictionary<string, List<char>>();
            string[] seed = { "pear", "flour", "pork", "olive" };
            foreach (var word in seed)
            {
                words.Add(word, new List<char>(word));
            }

            while (consonants.Count > 0)
            {
                char vowel = vowels.Dequeue();
                char consonant = consonants.Pop();

                foreach (var word in words)
                {
                    word.Value.Remove(vowel);
                    word.Value.Remove(consonant);
                }

                vowels.Enqueue(vowel);
            }

            var found = words.Where(a => a.Value.Count == 0);
            Console.WriteLine($"Words found: {found.Count()}");
            foreach (var entry in found)
            {
                Console.WriteLine(entry.Key);
            }
        }
    }
}