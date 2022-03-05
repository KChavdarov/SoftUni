using System;
using System.Collections.Generic;
using System.Text;

namespace _04.PizzaCalories
{
    internal class Topping : Ingredient
    {
        private readonly Dictionary<string, double> modifiers = new Dictionary<string, double>
        {
            {"meat", 1.2},
            {"veggies", 0.8},
            {"cheese", 1.1},
            {"sauce", 0.9 },
        };


        private string type;

        public Topping(string type, double weight)
        {
            Type = type;
            Weight = weight;
        }

        private string Type
        {
            get { return type; }
            set
            {
                if (!modifiers.ContainsKey(value.ToLower()))
                {
                    throw new ArgumentException($"Cannot place {value} on top of your pizza.");
                }

                type = value;
            }
        }

        private double Weight
        {
            get => weight;
            set
            {
                if (value < 1 || value > 50)
                {
                    throw new ArgumentException($"{Type} weight should be in the range [1..50].");
                }

                weight = value;
            }
        }

        public override double Calories => caloriesPerGram * Weight * modifiers[Type.ToLower()];
    }
}
