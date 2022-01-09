using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.Orders
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, decimal>> inventory = new Dictionary<string, Dictionary<string, decimal>>();
            string input = Console.ReadLine();

            while (input != "buy")
            {
                string[] tokens = input.Split(' ');
                string product = tokens[0];
                decimal price = decimal.Parse(tokens[1]);
                decimal quantity = decimal.Parse(tokens[2]);

                if (!inventory.ContainsKey(product))
                {
                    inventory[product] = new Dictionary<string, decimal>
                    {
                        {"price", 0},
                        {"quantity",0},
                    };
                }
                var entry = inventory[product];

                entry["quantity"] += quantity;
                entry["price"] = price;

                input = Console.ReadLine();
            }

            foreach (var entry in inventory)
            {
                Console.WriteLine($"{entry.Key} -> {(entry.Value["price"] * entry.Value["quantity"]):f2}");
            }
        }
    }
}
