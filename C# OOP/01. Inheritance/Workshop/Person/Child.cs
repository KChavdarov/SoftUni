using System;
using System.Collections.Generic;
using System.Text;

namespace Person
{
    internal class Child : Person
    {
        public new int Age
        {
            get => age;
            set
            {
                if (age < 0 || age > 15)
                {
                    throw new Exception("age must be between 0 and 15");
                }
                else
                {
                    age = value;
                }
            }
        }
        public Child(string name, int age) : base(name, age)
        {
            Age = age;
        }
    }
}
