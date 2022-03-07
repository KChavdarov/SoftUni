using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControlBirthdays
{
    internal class Citizen : Inhabitant, IBirthdayable
    {
        private string name;
        private int age;
        private string birthday;
        public Citizen(string name, int age, string id, string birthday) : base(id)
        {
            Name = name;
            Age = age;
            Birthday = birthday;
        }

        public string Name { get => name; private set => name = value; }
        public int Age { get => age; private set => age = value; }
        public string Birthday { get => birthday; private set => birthday = value; }
    }
}
