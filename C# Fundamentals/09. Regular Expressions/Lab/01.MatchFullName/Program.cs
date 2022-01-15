using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace _01.MatchFullName
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Regex regex = new Regex(@"\b[A-Z][a-z]+ [A-Z][a-z]+\b");

            string names = Console.ReadLine();

            MatchCollection matches = regex.Matches(names);

            var result = matches.Select(a => a.Value).ToList();
            Console.WriteLine(string.Join(' ', result));
        }
    }
}
