using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CocktailParty
{
    internal class Cocktail
    {
        public Cocktail(string name, int capacity, int maxAlcoholLevel)
        {
            Ingredients = new Dictionary<string, Ingredient>();
            Name = name;
            Capacity = capacity;
            MaxAlcoholLevel = maxAlcoholLevel;
        }

        public Dictionary<string, Ingredient> Ingredients { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int MaxAlcoholLevel { get; set; }
        public int Count => Ingredients.Count;
        public int CurrentAlcoholLevel => Ingredients.Sum(a => a.Value.Alcohol);

        public void Add(Ingredient ingredient)
        {
            if (Count < Capacity && !Ingredients.ContainsKey(ingredient.Name) && ingredient.Alcohol < MaxAlcoholLevel)
            {
                Ingredients[ingredient.Name] = ingredient;
            }
        }

        public bool Remove(string name)
        {
            if (Ingredients.ContainsKey(name))
            {
                return Ingredients.Remove(name);
            }
            return false;
        }

        public Ingredient FindIngredient(string name)
        {
            return Ingredients.ContainsKey(name) ? Ingredients[name] : null;
        }

        public Ingredient GetMostAlcoholicIngredient()
        {
            return Ingredients.Select(a => a.Value).OrderByDescending(a => a.Alcohol).First();
        }

        public string Report()
        {
            StringBuilder result = new StringBuilder($"Cocktail: {Name} - Current Alcohol Level: {CurrentAlcoholLevel}\n");
            foreach (var entry in Ingredients)
            {
                result.AppendLine(entry.Value.ToString());
            }

            return result.ToString().TrimEnd();
        }
    }
}
