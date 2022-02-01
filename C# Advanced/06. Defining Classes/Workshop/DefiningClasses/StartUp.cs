using System;
using System.Collections.Generic;
using System.Linq;

namespace DefiningClasses
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            // 05.Date Modifier
            string dateA = Console.ReadLine();
            string dateB = Console.ReadLine();

            Console.WriteLine(DateModifier.GetDaysBetweenDates(dateA, dateB));


            // 04. Opinion Poll
            //List<Person> people = new List<Person>();

            //int n = int.Parse(Console.ReadLine());
            //for (int i = 0; i < n; i++)
            //{
            //    string[] tokens = Console.ReadLine().Split(' ');
            //    Person person = new Person(tokens[0], int.Parse(tokens[1]));
            //    people.Add(person);
            //}

            //people.Where(a => a.Age > 30).OrderBy(a => a.Name).ToList().ForEach(Console.WriteLine);


            // 03. Oldest Family Member
            //Family family = new Family();

            //int n = int.Parse(Console.ReadLine());
            //for (int i = 0; i < n; i++)
            //{
            //    string[] tokens = Console.ReadLine().Split(' ');
            //    Person person = new Person(tokens[0], int.Parse(tokens[1]));
            //    family.AddMember(person);
            //}

            //Console.WriteLine(family.GetOldestMember());
        }
    }
}
