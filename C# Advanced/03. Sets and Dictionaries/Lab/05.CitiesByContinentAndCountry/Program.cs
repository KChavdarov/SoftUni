using System;
using System.Collections.Generic;

namespace _05.CitiesByContinentAndCountry
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            Dictionary<string, Dictionary<string, List<string>>> continents = new Dictionary<string, Dictionary<string, List<string>>>();

            for (int i = 0; i < count; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string continent = tokens[0];
                string country = tokens[1];
                string city = tokens[2];

                if (!continents.ContainsKey(continent))
                {
                    continents[continent] = new Dictionary<string, List<string>>();
                }

                if (!continents[continent].ContainsKey(country))
                {
                    continents[continent][country] = new List<string>();
                }

                continents[continent][country].Add(city);
            }

            foreach (var entry in continents)
            {
                Console.WriteLine($"{entry.Key}:");

                foreach (var subentry in entry.Value)
                {
                    Console.WriteLine($"{subentry.Key} -> {String.Join(", ", subentry.Value)}");
                }
            }
        }
    }
}
