using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.Students
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            List<Student> students = new List<Student>();

            while (input != "end")
            {
                string[] tokens = input.Split(' ');
                if (tokens.Length > 0)
                {
                    string firstName = tokens[0];
                    string lastName = tokens[1];
                    int age = int.Parse(tokens[2]);
                    string homeTown = tokens[3];

                    Student student = new Student(firstName, lastName, age, homeTown);

                    students.Add(student);
                }
                input = Console.ReadLine();
            }
            string town = Console.ReadLine();

            students.Where(student => student.HomeTown == town).ToList().ForEach(student => Console.WriteLine(student.ToString()));
        }
    }

    class Student
    {
        public Student(string firstName, string lastName, int age, string homeTown)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            HomeTown = homeTown;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string HomeTown { get; set; }

        override public string ToString()
        {
            return $"{FirstName} {LastName} is {Age} years old.";
        }
    }
}
