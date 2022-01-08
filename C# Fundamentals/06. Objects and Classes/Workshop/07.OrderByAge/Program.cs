using System;
using System.Collections.Generic;

namespace _07.OrderByAge
{
    internal class Program
    {
        static void Main(string[] args)
        {

            List<Person> people = new List<Person>();
            string input = Console.ReadLine();

            while (input != "End")
            {
                string[] tokens = input.Split(' ');
                string name = tokens[0];
                string id = tokens[1];
                int age = int.Parse(tokens[2]);

                Person person = people.Find(x => x.ID == id);

                if (person == null)
                {
                    Person newPerson = new Person(name, id, age);
                    people.Add(newPerson);
                }
                else
                {
                    person.Name = name;
                    person.Age = age;
                }

                input = Console.ReadLine();
            }

            people.Sort((x, y) => x.Age.CompareTo(y.Age));
            people.ForEach(Console.WriteLine);
        }
    }

    public class Person
    {
        public Person(string name, string id, int age)
        {
            Name = name;
            ID = id;
            Age = age;
        }

        public string Name { get; set; }
        public string ID { get; set; }
        public int Age { get; set; }

        public override string ToString()
        {
            return $"{Name} with ID: {ID} is {Age} years old.";
        }
    }
}
