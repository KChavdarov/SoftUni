using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _04.PizzaCalories
{
    internal class Pizza
    {
        private string name;
        private Dough dough;
        private List<Topping> toppings;

        public Pizza(string name)
        {
            Name = name;
            Toppings = new List<Topping>();
        }
        public Pizza(string name, Dough dough) : this(name)
        {
            Dough = dough;
        }
        public Pizza(string name, Dough dough, List<Topping> toppings) : this(name, dough)
        {
            Toppings = toppings;
        }

        public string Name
        {
            get { return name; }
            set
            {
                if (string.IsNullOrWhiteSpace(value) || value.Length > 15)
                {
                    throw new ArgumentException("Pizza name should be between 1 and 15 symbols.");
                }

                name = value;
            }
        }

        public Dough Dough
        {
            get { return dough; }
            set { dough = value; }
        }
        private List<Topping> Toppings
        {
            get => toppings;
            set
            {
                if (value.Count > 10)
                {
                    throw new ArgumentException("Number of toppings should be in range [0..10].");
                }

                toppings = value;
            }
        }

        public int ToppingCount => Toppings.Count;
        public double Calories => dough.Calories + toppings.Sum(a => a.Calories);
        public void AddTopping(Topping topping)
        {
            if (ToppingCount == 10)
            {
                throw new ArgumentException("Number of toppings should be in range [0..10].");
            }
            else
            {
                toppings.Add(topping);
            }
        }
    }
}