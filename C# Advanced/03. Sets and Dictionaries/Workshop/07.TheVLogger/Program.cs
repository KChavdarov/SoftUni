using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace _07.TheVLogger
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            SortedDictionary<string, Dictionary<string, SortedSet<string>>> vLogger = new SortedDictionary<string, Dictionary<string, SortedSet<string>>>();

            while (input != "Statistics")
            {
                string[] tokens = input.Split(' ');
                string name = tokens[0];
                string command = tokens[1];

                switch (command)
                {
                    case "joined":
                        if (!vLogger.ContainsKey(name))
                        {
                            vLogger[name] = new Dictionary<string, SortedSet<string>>() {
                                { "followers", new SortedSet<string>() },
                                { "following", new SortedSet<string>() }
                            };
                        }
                        break;
                    case "followed":
                        string target = tokens[2];

                        if (vLogger.ContainsKey(name) && vLogger.ContainsKey(target) && target != name)
                        {
                            vLogger[target]["followers"].Add(name);
                            vLogger[name]["following"].Add(target);

                        }

                        break;
                }

                input = Console.ReadLine();
            }

            var sorted = vLogger.OrderByDescending(a => a.Value["followers"].Count).ThenBy(a => a.Value["following"].Count).ToDictionary(x => x.Key, x => x.Value);
            int i = 1;

            Console.WriteLine($"The V-Logger has a total of {vLogger.Count} vloggers in its logs.");

            foreach (var entry in sorted)
            {
                Console.WriteLine($"{i}. {entry.Key} : {entry.Value["followers"].Count} followers, {entry.Value["following"].Count} following");
                if (i == 1)
                {
                    foreach (var follower in entry.Value["followers"])
                    {
                        Console.WriteLine($"*  {follower}");
                    }
                }

                i++;
            }
        }
    }
}
