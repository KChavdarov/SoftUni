using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace _01.Furniture
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Regex regex = new Regex(@">>(?<name>[A-Za-z\s]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)", RegexOptions.IgnoreCase);
            List<Product> products = new List<Product>();
            string input = Console.ReadLine();

            while (input != "Purchase")
            {
                Match match = regex.Match(input);

                if (match.Success)
                {
                    string name = match.Groups["name"].Value;
                    decimal price = decimal.Parse(match.Groups["price"].Value);
                    int quantity = int.Parse(match.Groups["quantity"].Value);

                    Product product = new Product(name, price, quantity);

                    products.Add(product);
                }

                input = Console.ReadLine();
            }

            decimal total = products.Sum(a => a.Price * a.Quantity);

            Console.WriteLine("Bought furniture:");
            Console.WriteLine(String.Join("\n", products.Select(a => a.Name).ToArray()));
            Console.WriteLine($"Total money spend: {total:f2}");
        }
    }

    class Product
    {
        public Product(string name, decimal price, int quantity)
        {
            Name = name;
            Price = price;
            Quantity = quantity;
        }

        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
