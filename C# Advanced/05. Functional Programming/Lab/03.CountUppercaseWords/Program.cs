using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.CountUppercaseWords
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> words = new List<string>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries));
            Where(words, isCapitalized).ToList().ForEach(Console.WriteLine);
        }

        static List<string> Where(List<string> collection, Func<string, bool> predicate)
        {
            List<string> result = new List<string>();
            foreach (var item in collection)
            {
                if (predicate(item))
                {
                    result.Add(item);
                }
            }

            return result;
        }

        //static Func<List<string>, Func<string, bool>, List<string>> Where = (List<string> collection, Func<string, bool> predicate) =>
        // {
        //     List<string> result = new List<string>();
        //     foreach (var item in collection)
        //     {
        //         if (predicate(item))
        //         {
        //             result.Add(item);
        //         }
        //     }

        //     return result;
        // };

        static Func<string, bool> isCapitalized = (string word) => Char.IsUpper(word[0]);
    }
}
