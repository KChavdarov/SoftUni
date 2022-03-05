using System;
using System.Collections.Generic;
using System.Text;

namespace _04.PizzaCalories
{
    internal class Dough : Ingredient
    {
        private readonly Dictionary<string, double> modifiers = new Dictionary<string, double>
        {
            {"white", 1.5},
            {"wholegrain", 1.0},
            {"crispy", 0.9},
            {"chewy", 1.1},
            {"homemade", 1.0 },
        };

        private string flour;
        private string bakingTechnique;

        public Dough(string flour, string bakingTechnique, double weight)
        {
            Flour = flour;
            BakingTechnique = bakingTechnique;
            Weight = weight;
        }

        private string Flour
        {
            get => flour;
            set
            {
                switch (value.ToLower())
                {
                    case "white":
                    case "wholegrain":
                        flour = value;
                        break;
                    default:
                        throw new ArgumentException("Invalid type of dough.");
                }
            }
        }

        private string BakingTechnique
        {
            get => bakingTechnique;
            set
            {
                switch (value.ToLower())
                {
                    case "crispy":
                    case "chewy":
                    case "homemade":
                        bakingTechnique = value;
                        break;
                    default:
                        throw new ArgumentException("Invalid type of dough.");
                }
            }
        }

        private double Weight
        {
            get => weight;
            set
            {
                if (value < 1 || value > 200)
                {
                    throw new ArgumentOutOfRangeException("Dough weight should be in the range [1..200].");
                }

                weight = value;
            }
        }

        public override double Calories => caloriesPerGram * Weight * modifiers[Flour.ToLower()] * modifiers[BakingTechnique.ToLower()];
    }
}
