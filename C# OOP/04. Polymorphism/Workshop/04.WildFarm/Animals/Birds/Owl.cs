using _04.WildFarm.Contracts;
using _04.WildFarm.Exceptions;
using _04.WildFarm.Foods;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Animals
{
    internal class Owl : Bird
    {
        private const double foodModifier = 0.25;
        public Owl(string name, double weight, double wingSize) : base(name, weight, wingSize)
        {
            FoodModifier = foodModifier;
        }

        public override void Eat(Food food)
        {
            if (!(food is Meat))
            {
                InvalidOperations.InvalidFood(GetType().Name, food.GetType().Name);
            }

            base.Eat(food);
        }

        public override string MakeSound() => "Hoot Hoot";
    }
}
