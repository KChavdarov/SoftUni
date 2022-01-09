using System;
using System.Collections.Generic;
using System.Linq;

namespace _06.Courses
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, List<string>> courses = new Dictionary<string, List<string>>();
            string input = Console.ReadLine();

            while (input != "end")
            {
                var tokens = input.Split(" : ");
                string courseName = tokens[0];
                string studentName = tokens[1];

                if (!courses.ContainsKey(courseName))
                {
                    courses[courseName] = new List<string>();
                }
                courses[courseName].Add(studentName);

                input = Console.ReadLine();
            }

            var sorted = courses.OrderByDescending(x => x.Value.Count);
            foreach (var entry in sorted)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value.Count}");
                var sortedStudents = entry.Value.OrderBy(a => a);
                foreach (var student in sortedStudents)
                {
                    Console.WriteLine($"-- {student}");
                }
            }
        }
    }
}
