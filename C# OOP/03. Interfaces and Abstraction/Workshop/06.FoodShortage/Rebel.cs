using System;
using System.Collections.Generic;
using System.Text;

namespace _06.FoodShortage
{
    internal class Rebel : IBuyer
    {
        private string name;
        private int age;
        private string group;
        private int food;

        public Rebel(string name, int age, string group)
        {
            food = 0;
            Name = name;
            Age = age;
            Group = group;
        }

        public string Name { get => name; private set => name = value; }
        public int Age { get => age; private set => age = value; }
        public string Group { get => group; private set => group = value; }
        public int Food { get => food; private set => food = value; }

        public void BuyFood()
        {
            Food += 5;
        }
    }
}
