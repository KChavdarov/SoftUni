using System;
using System.Text.RegularExpressions;

namespace _03.SoftUniBarIncome
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Regex regex = new Regex(@"%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(?:\.\d+)?)\$");

            string input = Console.ReadLine();
            decimal income = 0;

            while (input != "end of shift")
            {
                Match match = regex.Match(input);

                if (match.Success)
                {
                    string customer = match.Groups["customer"].Value;
                    string product = match.Groups["product"].Value;
                    int count = int.Parse(match.Groups["count"].Value);
                    decimal price = decimal.Parse(match.Groups["price"].Value);

                    decimal total = price * count;
                    income += total;

                    Console.WriteLine($"{customer}: {product} - {total:f2}");
                }
                input = Console.ReadLine();
            }

            Console.WriteLine($"Total income: {income:f2}");
        }
    }
}
