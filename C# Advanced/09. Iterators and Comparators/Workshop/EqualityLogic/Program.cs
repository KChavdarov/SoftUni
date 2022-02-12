using System;
using System.Collections.Generic;

namespace EqualityLogic
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            SortedSet<Person> sortedPeople = new SortedSet<Person>();
            HashSet<Person> setPeople = new HashSet<Person>();

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                var person = new Person(tokens[0], int.Parse(tokens[1]));
                sortedPeople.Add(person);
                setPeople.Add(person);
            }

            Console.WriteLine(sortedPeople.Count);
            Console.WriteLine(setPeople.Count);

        }
    }
}
