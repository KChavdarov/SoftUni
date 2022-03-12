using System;
using System.Collections.Generic;
using System.Text;

namespace _02.Animals
{
    internal abstract class Animal
    {
        protected Animal(string name, string favoriteFood)
        {
            Name = name;
            FavoriteFood = favoriteFood;
        }

        public string Name { get; set; }
        public string FavoriteFood { get; set; }
        public virtual string ExplainSelf() => $"I am {Name} and my favorite food is {FavoriteFood}";

    }
}
