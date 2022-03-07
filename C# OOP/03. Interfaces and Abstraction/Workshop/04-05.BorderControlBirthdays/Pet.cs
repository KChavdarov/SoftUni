using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControlBirthdays
{
    internal class Pet : IBirthdayable
    {
        private string name;
        private string birthday;

        public Pet(string name, string birthday)
        {
            Name = name;
            Birthday = birthday;
        }
        public string Name { get => name; private set => name = value; }
        public string Birthday { get => birthday; private set => birthday = value; }

    }
}
