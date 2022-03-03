using System;
using System.Collections.Generic;

namespace Animals
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            List<Animal> animals = new List<Animal>();
            string input = Console.ReadLine();

            while (input != "Beast!")
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string name = tokens[0];
                int age = int.Parse(tokens[1]);
                string gender = tokens[2];

                switch (input)
                {
                    case "Dog":
                        animals.Add(new Dog(name, age, gender));
                        break;
                    case "Cat":
                        animals.Add(new Cat(name, age, gender));
                        break;
                    case "Frog":
                        animals.Add(new Frog(name, age, gender));
                        break;
                    case "Tomcat":
                        animals.Add(new Tomcat(name, age, gender));
                        break;
                    case "Kitten":
                        animals.Add(new Kitten(name, age, gender));
                        break;
                    default:
                        break;
                }

                input = Console.ReadLine();
            }

            foreach (var animal in animals)
            {
                Console.WriteLine(animal.GetType().Name);
                Console.WriteLine($"{animal.Name} {animal.Age} {animal.Gender}");
                Console.WriteLine(animal.ProduceSound());
            }
        }
    }
}
