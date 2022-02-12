using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace EqualityLogic
{
    internal class Person : IComparable<Person>
    {
        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }

        public int CompareTo(Person other)
        {
            int result = Name.CompareTo(other.Name);
            if (result == 0)
            {
                result = Age.CompareTo(other.Age);
            }

            return result;
        }

        public override bool Equals(object obj)
        {
            var other = obj as Person;
            return CompareTo(other) == 0;
        }

        public override int GetHashCode()
        {
            return Name.GetHashCode() + Age.GetHashCode();
        }
    }
}
