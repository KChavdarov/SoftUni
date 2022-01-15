using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace _04.StarEnigma
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            Regex starCount = new Regex(@"[star]", RegexOptions.IgnoreCase);
            Regex messagePattern = new Regex(@"@(?<planet>[A-Za-z]+)[^\:\@\!\-\>]*:(?<population>\d+)[^\:\@\!\-\>]*!(?<type>[AD])![^\:\@\!\-\>]*->(?<soldiers>\d+)");
            List<string> attacked = new List<string>();
            List<string> destroyed = new List<string>();

            for (int i = 0; i < count; i++)
            {
                string message = Console.ReadLine();
                MatchCollection stars = starCount.Matches(message);
                int offset = stars.Count;
                char[] temp = message.ToCharArray().Select(a => (char)(a - offset)).ToArray();
                string decrypted = String.Join("", temp);
                Match match = messagePattern.Match(decrypted);

                if (match.Success)
                {
                    string planet = match.Groups["planet"].Value;
                    int population = int.Parse(match.Groups["population"].Value);
                    string type = match.Groups["type"].Value;
                    int soldiers = int.Parse(match.Groups["soldiers"].Value);

                    switch (type)
                    {
                        case "A":
                            attacked.Add(planet);
                            break;

                        case "D":
                            destroyed.Add(planet);
                            break;
                    }
                }
            }

            attacked.Sort();
            destroyed.Sort();

            Console.WriteLine($"Attacked planets: {attacked.Count}");
            attacked.ForEach(a => Console.WriteLine($"-> {a}"));
            Console.WriteLine($"Destroyed planets: {destroyed.Count}");
            destroyed.ForEach(a => Console.WriteLine($"-> {a}"));
        }
    }
}
