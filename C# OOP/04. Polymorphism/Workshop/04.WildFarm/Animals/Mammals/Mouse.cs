using _04.WildFarm.Exceptions;
using _04.WildFarm.Foods;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Animals.Mammals
{
    internal class Mouse : Mammal
    {
        private const double foodModifier = 0.1;
        public Mouse(string name, double weight, string livingRegion) : base(name, weight, livingRegion)
        {
            FoodModifier = foodModifier;
        }

        public override void Eat(Food food)
        {
            if (!(food is Fruit || food is Vegetable))
            {
                InvalidOperations.InvalidFood(GetType().Name, food.GetType().Name);
            }

            base.Eat(food);
        }
        public override string MakeSound() => "Squeak";
    }
}
