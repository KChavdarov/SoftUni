using System;
using System.Collections.Generic;

namespace _09.PredicateParty
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> guests = new List<string>(Console.ReadLine().Split(' '));
            string input = Console.ReadLine();

            while (input != "Party!")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];
                Predicate<string> predicate = CreatePrеdicate(tokens[1], tokens[2]);
                switch (command)
                {
                    case "Remove":
                        guests.RemoveAll(predicate);
                        break;
                    case "Double":
                        foreach (var name in guests.FindAll(predicate))
                        {
                            int index = guests.IndexOf(name);
                            guests.Insert(index, name);
                        }
                        break;
                }

                input = Console.ReadLine();
            }

            PrintGuests(guests);
        }
        static Predicate<string> CreatePrеdicate(string type, string criteria)
        {
            switch (type)
            {
                case "StartsWith":
                    return x => x.StartsWith(criteria);
                case "EndsWith":
                    return x => x.EndsWith(criteria);
                case "Length":
                    return x => x.Length == int.Parse(criteria);
                default:
                    return x => true;
            }
        }

        static void PrintGuests(List<string> guests)
        {
            if (guests.Count > 0)
            {
                Console.WriteLine($"{String.Join(", ", guests)} are going to the party!");
            }
            else
            {
                Console.WriteLine("Nobody is going to the party!");
            }
        }
    }
}
