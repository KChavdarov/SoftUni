using _04.WildFarm.Exceptions;
using _04.WildFarm.Foods;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Animals.Mammals
{
    internal class Cat : Feline
    {
        private const double foodModifier = 0.3;
        public Cat(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion, breed)
        {
            FoodModifier = foodModifier;
        }

        public override void Eat(Food food)
        {
            if (!(food is Meat || food is Vegetable))
            {
                InvalidOperations.InvalidFood(GetType().Name, food.GetType().Name);
            }

            base.Eat(food);
        }
        public override string MakeSound() => "Meow";
    }
}
