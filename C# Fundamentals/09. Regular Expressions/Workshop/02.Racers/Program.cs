using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace _02.Racers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> scores = new Dictionary<string, int>();
            Regex lettersPattern = new Regex(@"[A-Za-z]+");
            Regex digitsPattern = new Regex(@"\d");

            string[] names = Console.ReadLine().Split(", ");
            foreach (string name in names)
            {
                scores.Add(name, 0);
            }

            string input = Console.ReadLine();

            while (input != "end of race")
            {
                MatchCollection letters = lettersPattern.Matches(input);
                string name = String.Join("", letters);

                if (scores.ContainsKey(name))
                {

                    MatchCollection digits = digitsPattern.Matches(input);
                    if (digits.Count > 0)
                    {
                        foreach (Match digit in digits)
                        {
                            scores[name] += int.Parse(digit.Value);
                        }
                    }

                }

                input = Console.ReadLine();
            }

            var winners = scores.OrderByDescending(a => a.Value).Take(3).ToArray();

            Console.WriteLine($"1st place: {winners[0].Key}");
            Console.WriteLine($"2nd place: {winners[1].Key}");
            Console.WriteLine($"3rd place: {winners[2].Key}");
        }
    }
}
