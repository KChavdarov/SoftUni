using System;
using System.Collections.Generic;
using System.Linq;

namespace ComparingObjects
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>();
            string input = Console.ReadLine();

            while (input != "END")
            {
                string[] tokens = input.Split(' ');
                string name = tokens[0];
                int age = int.Parse(tokens[1]);
                string town = tokens[2];

                Person person = new Person(name, age, town);
                people.Add(person);

                input = Console.ReadLine();
            }

            int n = int.Parse(Console.ReadLine());

            Person selected = people[n - 1];
            var filtered = people.Where(a => a.CompareTo(selected) == 0).ToList();

            if (filtered.Count <= 1)
            {
                Console.WriteLine("No matches");
            }
            else
            {
                Console.WriteLine($"{filtered.Count} {people.Count - filtered.Count} {people.Count}");
            }
        }
    }
}
