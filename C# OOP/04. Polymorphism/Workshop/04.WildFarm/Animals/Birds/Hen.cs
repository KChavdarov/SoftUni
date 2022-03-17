using _04.WildFarm.Foods;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04.WildFarm.Animals
{
    internal class Hen : Bird
    {
        private const double foodModifier = 0.35;
        public Hen(string name, double weight, double wingSize) : base(name, weight, wingSize)
        {
            FoodModifier = foodModifier;
        }

        public override string MakeSound() => "Cluck";
    }
}
