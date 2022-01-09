using System;
using System.Collections.Generic;

namespace _02.AMinerTask
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string resource = Console.ReadLine();
            Dictionary<string, int> resources = new Dictionary<string, int>();

            while (resource != "stop")
            {
                int amount = int.Parse(Console.ReadLine());

                if (!resources.ContainsKey(resource))
                {
                    resources.Add(resource, 0);
                }

                resources[resource] += amount;
                resource = Console.ReadLine();
            }

            foreach (var entry in resources)
            {
                Console.WriteLine($"{entry.Key} -> {entry.Value}");
            }
        }
    }
}
