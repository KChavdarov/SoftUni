using System;
using System.Collections.Generic;

namespace _02.Animals
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Animal> animals = new List<Animal>();

            animals.Add(new Cat("Kiro", "bob"));
            animals.Add(new Dog("Roki", "bob"));

            animals.ForEach(a => Console.WriteLine(a.ExplainSelf()));
        }
    }
}
