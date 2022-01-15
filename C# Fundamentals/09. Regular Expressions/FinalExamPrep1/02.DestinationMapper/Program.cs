using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace _02.DestinationMapper
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Regex regex = new Regex(@"([/=])(?<name>[A-Z][A-Za-z]{2,})\1");
            string text = Console.ReadLine();

            MatchCollection matches = regex.Matches(text);

            List<string> destinations = matches.Select(a => a.Groups["name"].Value).ToList();

            int total = destinations.Sum(a => a.Length);

            Console.WriteLine($"Destinations: {String.Join(", ", destinations)}");
            Console.WriteLine($"Travel Points: {total}");

        }
    }
}
