using _04.WildFarm.Animals;
using _04.WildFarm.Animals.Mammals;
using _04.WildFarm.Factories;
using _04.WildFarm.Foods;
using System;
using System.Collections.Generic;

namespace _04.WildFarm
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Animal> animals = new List<Animal>();
            string input = Console.ReadLine();

            while (input != "End")
            {
                string[] tokens = input.Split(' ');
                Animal animal = AnimalFactory.Create(tokens);
                animals.Add(animal);

                tokens = Console.ReadLine().Split(' ');
                Food food = FoodFactory.Create(tokens[0], int.Parse(tokens[1]));

                try
                {
                    Console.WriteLine(animal.MakeSound());
                    animal.Eat(food);
                }
                catch (Exception err)
                {
                    Console.WriteLine(err.Message);
                }

                input = Console.ReadLine();
            }

            Console.WriteLine(String.Join(Environment.NewLine, animals));
        }
    }
}
