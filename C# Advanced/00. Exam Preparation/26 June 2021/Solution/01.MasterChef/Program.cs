using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.MasterChef
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<int, string> recipes = new Dictionary<int, string>()
            {
                {150, "Dipping sauce" },
                {250, "Green salad" },
                {300, "Chocolate cake" },
                {400, "Lobster" }
            };

            SortedDictionary<string, int> products = new SortedDictionary<string, int>();

            Queue<int> ingredients = new Queue<int>();
            int[] ingredientsInput = Console.ReadLine().Split(' ').Select(int.Parse).Where(a => a != 0).ToArray();
            foreach (var item in ingredientsInput)
            {
                ingredients.Enqueue(item);
            }

            Stack<int> freshnesses = new Stack<int>();
            int[] freshnessesInput = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            foreach (var item in freshnessesInput)
            {
                freshnesses.Push(item);
            }

            while (freshnesses.Count > 0 && ingredients.Count > 0)
            {
                int ingredient = ingredients.Dequeue();
                int freshness = freshnesses.Pop();

                int score = ingredient * freshness;

                if (recipes.ContainsKey(score))
                {
                    string product = recipes[score];
                    if (!products.ContainsKey(product))
                    {
                        products[product] = 0;
                    }

                    products[product]++;
                }
                else
                {
                    ingredient += 5;
                    ingredients.Enqueue(ingredient);

                }
            }

            if (products.Keys.Count == 4)
            {
                Console.WriteLine("Applause! The judges are fascinated by your dishes!");

            }
            else
            {
                Console.WriteLine("You were voted off. Better luck next year.");
                if (ingredients.Count > 0)
                {
                    Console.WriteLine($"Ingredients left: {ingredients.Sum()}");
                }
            }

            foreach (var product in products)
            {
                Console.WriteLine($" # {product.Key} --> {product.Value}");
            }
        }
    }
}
