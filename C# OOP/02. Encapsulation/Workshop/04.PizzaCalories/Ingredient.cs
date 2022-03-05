using System;
using System.Collections.Generic;
using System.Text;

namespace _04.PizzaCalories
{
    internal class Ingredient
    {
        protected const double caloriesPerGram = 2;
        protected double weight;
        public virtual double Calories => weight * caloriesPerGram;
    }
}
