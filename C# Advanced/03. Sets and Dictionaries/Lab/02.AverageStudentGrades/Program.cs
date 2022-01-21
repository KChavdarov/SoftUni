using System;
using System.Collections.Generic;
using System.Linq;

namespace _02.AverageStudentGrades
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            Dictionary<string, List<decimal>> grades = new Dictionary<string, List<decimal>>();

            for (int i = 0; i < count; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string name = tokens[0];
                decimal grade = decimal.Parse(tokens[1]);

                if (!grades.ContainsKey(name))
                {
                    grades[name] = new List<decimal>();
                }

                grades[name].Add(grade);
            }

            foreach (var entry in grades)
            {
                Console.Write($"{entry.Key} -> ");

                foreach (var grade in entry.Value)
                {
                    Console.Write($"{grade:f2} ");
                }

                Console.Write($"(avg: {entry.Value.Average():f2})");
                Console.WriteLine();
            }
        }
    }
}
