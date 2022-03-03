using System;
using System.Collections.Generic;
using System.Text;

namespace Restaurant
{
    public class Cake : Dessert
    {
        public const double CakeGrams = 250;
        public const double CakeCalories = 1000;
        public const decimal CakePrice = 5;
        //public Cake(string name, decimal price = CakePrice, double grams = CakeGrams, double calories = CakeCalories) : base(name, price, grams, calories)
        public Cake(string name) : base(name, CakePrice, CakeGrams, CakeCalories)
        {
        }
    }
}
