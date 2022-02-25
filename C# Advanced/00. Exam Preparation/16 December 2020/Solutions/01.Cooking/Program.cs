using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Cooking
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<int> liquids = new Queue<int>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Stack<int> ingredients = new Stack<int>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Dictionary<int, string> foods = new Dictionary<int, string>()
            {
                {25, "Bread" },
                {50, "Cake" },
                {75, "Pastry" },
                {100, "Fruit Pie" }
            };
            SortedDictionary<string, int> products = new SortedDictionary<string, int>()
            {
                {"Bread" , 0},
                {"Cake" , 0},
                {"Pastry" , 0},
                {"Fruit Pie", 0}
            };

            while (liquids.Count > 0 && ingredients.Count > 0)
            {
                int liquid = liquids.Dequeue();
                int ingredient = ingredients.Pop();
                int sum = liquid + ingredient;

                if (foods.ContainsKey(sum))
                {
                    string food = foods[sum];
                    products[food]++;
                }
                else
                {
                    ingredients.Push(ingredient + 3);
                }
            }

            if (products.Any(a => a.Value == 0))
            {
                Console.WriteLine("Ugh, what a pity! You didn't have enough materials to cook everything.");
            }
            else
            {
                Console.WriteLine("Wohoo! You succeeded in cooking all the food!");
            }

            string remainingLiquids = liquids.Count == 0 ? "none" : String.Join(", ", liquids);
            Console.WriteLine($"Liquids left: {remainingLiquids}");
            string remainingIngredients = ingredients.Count == 0 ? "none" : String.Join(", ", ingredients);
            Console.WriteLine($"Ingredients left: {remainingIngredients}");

            foreach (var entry in products)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value}");
            }
        }
    }
}
