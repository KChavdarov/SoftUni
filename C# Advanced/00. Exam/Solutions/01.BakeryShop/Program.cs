using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.BakeryShop
{
    internal class Program
    {
        public static Dictionary<string, int> products = new Dictionary<string, int>();
        static void Main(string[] args)
        {
            Queue<double> water = new Queue<double>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse));
            Stack<double> flour = new Stack<double>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(double.Parse));

            while (water.Count > 0 && flour.Count > 0)
            {
                double currentWater = water.Dequeue();
                double currentFlour = flour.Pop();
                double sum = currentWater + currentFlour;
                double waterPercentage = currentWater / sum * 100;

                if (waterPercentage == 50)
                {
                    AddProduct("Croissant");
                }
                else if (waterPercentage == 40)
                {
                    AddProduct("Muffin");
                }
                else if (waterPercentage == 30)
                {
                    AddProduct("Baguette");
                }
                else if (waterPercentage == 20)
                {
                    AddProduct("Bagel");
                }
                else
                {
                    if (currentWater < currentFlour)
                    {
                        currentFlour -= currentWater;
                        flour.Push(currentFlour);
                    }

                    AddProduct("Croissant");
                }
            }

            foreach (var entry in products.OrderByDescending(a => a.Value).ThenBy(a => a.Key))
            {
                Console.WriteLine($"{entry.Key}: {entry.Value}");
            }

            string remainingWater = water.Count == 0 ? "None" : string.Join(", ", water);
            Console.WriteLine($"Water left: {remainingWater}");

            string remainingFlour = flour.Count == 0 ? "None" : string.Join(", ", flour);
            Console.WriteLine($"Flour left: {remainingFlour}");

        }

        public static void AddProduct(string product)
        {
            if (!products.ContainsKey(product))
            {
                products[product] = 0;
            }

            products[product]++;
        }
    }
}
