using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.OddOccurrences
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine().ToLower().Split(' ');
            Dictionary<string, int> occurances = new Dictionary<string, int>();

            foreach (var word in words)
            {
                if (!occurances.ContainsKey(word))
                {
                    occurances.Add(word, 0);
                }

                occurances[word]++;
            }
            var oddOccurances = occurances.Where(a => a.Value % 2 == 1).ToDictionary(a => a.Key, a => a.Value);

            Console.WriteLine(string.Join(' ', oddOccurances.Keys));
        }
    }
}
