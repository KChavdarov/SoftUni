using System;
using System.Collections.Generic;

namespace _04.ProductShop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            SortedDictionary<string, Dictionary<string, decimal>> shops = new SortedDictionary<string, Dictionary<string, decimal>>();

            while (input != "Revision")
            {
                string[] tokens = input.Split(", ");
                string shop = tokens[0];
                string product = tokens[1];
                decimal price = decimal.Parse(tokens[2]);

                if (!shops.ContainsKey(shop))
                {
                    shops[shop] = new Dictionary<string, decimal>();
                }

                shops[shop][product] = price;

                input = Console.ReadLine();
            }

            foreach (var entry in shops)
            {
                Console.WriteLine($"{entry.Key}->");

                foreach (var product in entry.Value)
                {
                    Console.WriteLine($"Product: {product.Key}, Price: {product.Value:f2}");
                }
            }
        }
    }
}
