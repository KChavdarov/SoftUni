using _04.WildFarm.Foods;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Animals
{
    internal abstract class Animal
    {
        protected Animal(string name, double weight)
        {
            Name = name;
            Weight = weight;
            FoodEaten = 0;
        }

        protected double FoodModifier { get; set; }
        public string Name { get; protected set; }
        public double Weight { get; protected set; }
        public int FoodEaten { get; protected set; }

        public abstract string MakeSound();

        public virtual void Eat(Food food)
        {
            Weight += FoodModifier * food.Quantity;
            FoodEaten += food.Quantity;
        }
    }
}
