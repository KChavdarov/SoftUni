using System;
using System.Collections.Generic;

namespace BorderControlBirthdays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*  04.BorderControl
             * 
            List<Inhabitant> inhabitants = new List<Inhabitant>();

            string input = Console.ReadLine();

            while (input != "End")
            {
                string[] tokens = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                if (tokens.Length == 2)
                {
                    inhabitants.Add(new Robot(tokens[0], tokens[1]));
                }
                else if (tokens.Length == 3)
                {
                    inhabitants.Add(new Citizen(tokens[0], int.Parse(tokens[1]), tokens[2]));
                }

                input = Console.ReadLine();
            }

            string fragment = Console.ReadLine();
            foreach (var inhabitant in inhabitants.FindAll(a => a.ValidateId(fragment)))
            {
                Console.WriteLine(inhabitant.Id);
            }
            */

            // 05.Birthdays

            List<IBirthdayable> creatures = new List<IBirthdayable>();

            string input = Console.ReadLine();

            while (input != "End")
            {
                string[] tokens = input.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                if (tokens[0] == "Citizen")
                {
                    creatures.Add(new Citizen(tokens[1], int.Parse(tokens[2]), tokens[3], tokens[4]));
                }
                else if (tokens[0] == "Pet")
                {
                    creatures.Add(new Pet(tokens[1], tokens[2]));
                }

                input = Console.ReadLine();
            }

            string year = Console.ReadLine();
            foreach (var creature in creatures.FindAll(a => a.Birthday.EndsWith(year)))
            {
                Console.WriteLine(creature.Birthday);
            };
        }
    }
}
