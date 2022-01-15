using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace _02.MatchPhoneNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Regex regex = new Regex(@"\+359([ -])2\1\d{3}\1\d{4}\b");

            string phones = Console.ReadLine();

            MatchCollection matches = regex.Matches(phones);

            var results = matches.Select(a => a.Value.Trim());

            Console.WriteLine(String.Join(", ", results));
        }
    }
}
