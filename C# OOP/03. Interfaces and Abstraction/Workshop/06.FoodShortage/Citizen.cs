using System;
using System.Collections.Generic;
using System.Text;

namespace _06.FoodShortage
{
    internal class Citizen : Inhabitant, IBirthdayable, IBuyer
    {
        private string name;
        private int age;
        private string birthday;
        private int food;
        public Citizen(string name, int age, string id, string birthday) : base(id)
        {
            Food = 0;
            Name = name;
            Age = age;
            Birthday = birthday;
        }

        public string Name { get => name; private set => name = value; }
        public int Age { get => age; private set => age = value; }
        public string Birthday { get => birthday; private set => birthday = value; }
        public int Food { get => food; private set => food = value; }

        public void BuyFood()
        {
            Food += 10;
        }
    }
}
