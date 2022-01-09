using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.LegendaryFarming
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> inventory = new Dictionary<string, int>
            {
                {"fragments", 0 },
                {"motes", 0 },
                {"shards",0 }
            };
            bool isLegendaryObtaied = false;

            while (!isLegendaryObtaied)
            {
                string[] loot = Console.ReadLine().ToLower().Split(' ');

                for (int i = 0; i < loot.Length; i += 2)
                {
                    int amount = int.Parse(loot[i]);
                    string material = loot[i + 1];

                    if (!inventory.ContainsKey(material))
                    {
                        inventory[material] = 0;
                    }

                    inventory[material] += amount;
                    isLegendaryObtaied = areEnoughResources(inventory);
                    if (isLegendaryObtaied) break;
                }
            }
        }

        static bool areEnoughResources(Dictionary<string, int> inventory)
        {
            if (inventory.ContainsKey("shards") && inventory["shards"] >= 250)
            {
                inventory["shards"] -= 250;
                Console.WriteLine("Shadowmourne obtained!");
                PrintInventory(inventory);
                return true;
            }
            if (inventory.ContainsKey("fragments") && inventory["fragments"] >= 250)
            {
                inventory["fragments"] -= 250;
                Console.WriteLine("Valanyr obtained!");
                PrintInventory(inventory);
                return true;
            }
            if (inventory.ContainsKey("motes") && inventory["motes"] >= 250)
            {
                inventory["motes"] -= 250;
                Console.WriteLine("Dragonwrath obtained!");
                PrintInventory(inventory);
                return true;
            }
            return false;
        }

        static void PrintInventory(Dictionary<string, int> inventory)
        {
            var legendary = inventory.Where(a => !isJunk(a.Key)).OrderByDescending(a => a.Value).ThenBy(a => a.Key).ToDictionary(a => a.Key, a => a.Value);
            var junk = inventory.Where(a => isJunk(a.Key)).OrderBy(a => a.Key).ToDictionary(a => a.Key, a => a.Value);

            foreach (var entry in legendary)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value}");
            }
            foreach (var entry in junk)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value}");
            }
        }

        static bool isJunk(string resource)
        {
            if (resource != "motes" && resource != "shards" && resource != "fragments")
            {
                return true;
            }
            return false;
        }
    }
}
