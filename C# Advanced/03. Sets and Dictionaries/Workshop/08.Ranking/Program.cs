using System;
using System.Collections.Generic;
using System.Linq;

namespace _08.Ranking
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> contests = new Dictionary<string, string>();
            SortedDictionary<string, Dictionary<string, int>> scores = new SortedDictionary<string, Dictionary<string, int>>();
            string input = Console.ReadLine();

            while (input != "end of contests")
            {
                string[] tokens = input.Split(':');
                contests[tokens[0]] = tokens[1];
                input = Console.ReadLine();
            }

            input = Console.ReadLine();

            while (input != "end of submissions")
            {
                string[] tokens = input.Split("=>");
                string contest = tokens[0];
                string password = tokens[1];
                string username = tokens[2];
                int points = int.Parse(tokens[3]);

                if (contests.ContainsKey(contest) && contests[contest] == password)
                {
                    if (!scores.ContainsKey(username))
                    {
                        scores[username] = new Dictionary<string, int>();
                    }

                    if (!scores[username].ContainsKey(contest))
                    {
                        scores[username][contest] = 0;
                    }

                    if (scores[username][contest] < points)
                    {
                        scores[username][contest] = points;
                    }
                }

                input = Console.ReadLine();
            }

            var bestCandidate = scores.OrderByDescending(a => a.Value.Values.Sum()).Take(1).ToDictionary(a => a.Key, a => a.Value).First();

            Console.WriteLine($"Best candidate is {bestCandidate.Key} with total {bestCandidate.Value.Values.Sum()} points.");

            Console.WriteLine("Ranking:");

            foreach (var entry in scores)
            {
                Console.WriteLine(entry.Key);
                foreach (var subentry in entry.Value.OrderByDescending(a => a.Value))
                {
                    Console.WriteLine($"#  {subentry.Key} -> {subentry.Value}");
                }
            }
        }
    }
}
