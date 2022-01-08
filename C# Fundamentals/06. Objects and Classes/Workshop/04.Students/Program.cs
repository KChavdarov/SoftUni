using System;
using System.Collections.Generic;

namespace _04.Students
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Student> students = new List<Student>();

            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string firsName = tokens[0];
                string lastName = tokens[1];
                double grade = double.Parse(tokens[2]);

                Student student = new Student(firsName, lastName, grade);

                students.Add(student);
            }

            students.Sort((x, y) => y.Grade.CompareTo(x.Grade));

            foreach (var student in students)
            {
                Console.WriteLine(student);
            }
        }

        public class Student
        {
            string _firstName;
            string _lastName;
            double _grade;

            public Student(string firstName, string lastName, double grade)
            {
                FirstName = firstName;
                LastName = lastName;
                Grade = grade;
            }
            public string FirstName
            {
                get => _firstName;
                set => _firstName = value;
            }
            public string LastName
            {
                get => _lastName;
                set => _lastName = value;
            }
            public double Grade
            {
                get => _grade;
                set => _grade = value;
            }

            public override string ToString()
            {
                return $"{FirstName} {LastName}: {Grade:f2}";
            }
        }
    }
}
