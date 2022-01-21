using System;
using System.Collections.Generic;

namespace _06.Wardrobe
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            Dictionary<string, Dictionary<string, int>> wardrobe = new Dictionary<string, Dictionary<string, int>>();

            for (int i = 0; i < count; i++)
            {
                string[] tokens = Console.ReadLine().Split(" -> ");
                string color = tokens[0];

                if (!wardrobe.ContainsKey(color))
                {
                    wardrobe[color] = new Dictionary<string, int>();
                }

                string[] items = tokens[1].Split(',');

                foreach (var item in items)
                {
                    if (!wardrobe[color].ContainsKey(item))
                    {
                        wardrobe[color][item] = 0;
                    }

                    wardrobe[color][item]++;
                }
            }

            string[] lookUpTokens = Console.ReadLine().Split();
            string luColor = lookUpTokens[0];
            string luItem = lookUpTokens[1];

            foreach (var entry in wardrobe)
            {
                Console.WriteLine($"{entry.Key} clothes:");
                foreach (var subentry in entry.Value)
                {
                    if (entry.Key == luColor && subentry.Key == luItem)
                    {
                        Console.WriteLine($"* {subentry.Key} - {subentry.Value} (found!)");
                    }
                    else
                    {
                        Console.WriteLine($"* {subentry.Key} - {subentry.Value}");
                    }
                }
            }
        }
    }
}
