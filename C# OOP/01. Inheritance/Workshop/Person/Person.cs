using System;
using System.Collections.Generic;
using System.Text;

namespace Person
{
    public class Person
    {
        private string name;
        protected int age;

        public Person(string name, int age)
        {
            Age = age;
            Name = name;
        }

        public int Age
        {
            get => age;
            set
            {
                if (age < 0)
                {
                    throw new Exception("age cannot be negative");
                }
                else
                {
                    age = value;
                }
            }
        }
        public string Name { get => name; set => name = value; }

        public override string ToString()
        {
            return $"Name: {Name}, Age: {Age}";
        }
    }
}
