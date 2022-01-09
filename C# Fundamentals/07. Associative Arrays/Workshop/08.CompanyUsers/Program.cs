using System;
using System.Collections.Generic;
using System.Linq;

namespace _08.CompanyUsers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<string>> companies = new Dictionary<string, List<string>>();
            string input = Console.ReadLine();

            while (input != "End")
            {
                string[] tokens = input.Split(" -> ");
                string companyName = tokens[0];
                string employeeID = tokens[1];

                if (!companies.ContainsKey(companyName))
                {
                    companies[companyName] = new List<string>();
                }
                companies[companyName].Add(employeeID);

                input = Console.ReadLine();
            }
            companies = companies.OrderBy(a => a.Key).ToDictionary(a => a.Key, a => a.Value);

            foreach (var entry in companies)
            {
                Console.WriteLine(entry.Key);
                foreach (var emp in entry.Value)
                {
                    Console.WriteLine($"-- {emp}");
                }
            }
        }
    }
}
