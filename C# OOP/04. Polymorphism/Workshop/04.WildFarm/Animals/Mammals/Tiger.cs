using _04.WildFarm.Exceptions;
using _04.WildFarm.Foods;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Animals.Mammals
{
    internal class Tiger : Feline
    {
        private const double foodModifier = 1;
        public Tiger(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion, breed)
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
        public override string MakeSound() => "ROAR!!!";

    }
}
