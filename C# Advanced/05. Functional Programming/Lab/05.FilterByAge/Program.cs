using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.FilterByAge
{
    internal class Program
    {
        class Student
        {
            public string Name { get; set; }
            public int Age { get; set; }
            public Student(string name, int age)
            {
                Name = name;
                Age = age;
            }
        }
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            List<Student> students = new List<Student>();

            for (int i = 0; i < count; i++)
            {
                string[] tokens = Console.ReadLine().Split(", ");
                students.Add(new Student(tokens[0], int.Parse(tokens[1])));
            }

            string condition = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());
            string format = Console.ReadLine();

            Func<string, int, Func<Student, bool>> getPredicate = (condition, age) =>
            {
                switch (condition)
                {
                    case "older":
                        return (a) => a.Age >= age;
                    case "younger":
                        return (a) => a.Age < age;
                    default:
                        return (a) => true;
                }
            };

            Func<string, Func<Student, string>> getFormatter = (format) =>
            {
                switch (format)
                {
                    case "name":
                        return a => a.Name;
                    case "age":
                        return a => $"{a.Age}";
                    default:
                        return a => $"{a.Name} - {a.Age}";
                }
            };

            students.Where(getPredicate(condition, age)).Select(getFormatter(format)).ToList().ForEach(Console.WriteLine);
        }
    }
}
