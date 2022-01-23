using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace _03.WordCount
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using StreamReader wordsReader = new StreamReader("words.txt");
            string[] words = wordsReader.ReadLine()?.ToLower().Split(' ');
            Dictionary<string, int> counts = new Dictionary<string, int>();
            foreach (string word in words)
            {
                counts[word] = 0;
            }

            using StreamReader text = new StreamReader("text.txt");

            while (!text.EndOfStream)
            {
                string[] lineWords = text.ReadLine().ToLower().Split(new char[] { ' ', '-', ',', '.' }, StringSplitOptions.RemoveEmptyEntries);
                foreach (var word in lineWords)
                {
                    if (words.Contains(word))
                    {
                        counts[word]++;
                    }
                }
            }

            using StreamWriter result = new StreamWriter("result.txt");

            foreach (var entry in counts.OrderByDescending(a => a.Value).ToDictionary(a => a.Key, a => a.Value))
            {
                result.WriteLine($"{entry.Key} - {entry.Value}");
            }
        }
    }
}
