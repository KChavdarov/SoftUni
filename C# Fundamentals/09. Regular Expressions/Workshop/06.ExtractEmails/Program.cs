using System;
using System.Text.RegularExpressions;

namespace _06.ExtractEmails
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Regex regex = new Regex(@"\s(?<email>(?<user>[A-Za-z0-9]+(?:[\-_\.]+[A-Za-z0-9]+)*)@(?<host>[A-Za-z]+-*[A-Za-z]+\.[A-Za-z]+-*[A-Za-z]+(?:\.[A-Za-z]+-*[A-Za-z]+)*))");
            string text = Console.ReadLine();

            MatchCollection matches = regex.Matches(text);

            foreach (Match match in matches)
            {
                Console.WriteLine(match.Groups["email"].Value);
            }
        }
    }
}
