using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace _03.MatchDates
{
    internal class Program
    {
        static void Main(string[] args)
        {
            MatchCollection matches = Regex.Matches(Console.ReadLine(), @"\b(?<day>\d{2})(?<separator>[/\-.])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})");

            var result = matches.Select(a => $"Day: {a.Groups["day"]}, Month: {a.Groups["month"]}, Year: {a.Groups["year"]}");

            Console.WriteLine(String.Join("\n", result));
        }
    }
}
