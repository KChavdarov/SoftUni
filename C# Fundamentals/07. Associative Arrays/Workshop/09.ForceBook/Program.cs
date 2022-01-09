using System;
using System.Collections.Generic;
using System.Linq;

namespace _09.ForceBook
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ForceBook forceBook = new ForceBook();
            string input = Console.ReadLine();

            while (input != "Lumpawaroo")
            {
                if (input.Contains("|"))
                {
                    string[] tokens = input.Split(" | ");
                    string side = tokens[0];
                    string user = tokens[1];
                    forceBook.AddUser(user, side);
                }
                else if (input.Contains("->"))
                {
                    string[] tokens = input.Split(" -> ");
                    string side = tokens[1];
                    string user = tokens[0];
                    forceBook.ChangeSide(user, side);
                }

                input = Console.ReadLine();
            }

            forceBook.PrintUsers();
        }
    }

    public class ForceBook
    {
        public ForceBook()
        {
            Users = new Dictionary<string, string>();
        }

        public static Dictionary<string, string> Users { get; set; }
        public void AddUser(string user, string side)
        {
            if (!Users.ContainsKey(user))
            {
                Users[user] = side;
            }
        }

        public void ChangeSide(string user, string side)
        {
            if (Users.ContainsKey(user))
            {
                Users[user] = side;
            }
            else
            {
                AddUser(user, side);
            }
            Console.WriteLine($"{user} joins the {side} side!");
        }

        public void PrintUsers()
        {
            Dictionary<string, List<string>> pivoted = new Dictionary<string, List<string>>();

            foreach (var entry in Users)
            {
                if (!pivoted.ContainsKey(entry.Value))
                {
                    pivoted[entry.Value] = new List<string>();
                }
                pivoted[entry.Value].Add(entry.Key);
            }

            var sorted = pivoted.OrderBy(x => x.Value.Count).ThenBy(a => a.Key);

            foreach (var entry in sorted)
            {
                Console.WriteLine($"Side: {entry.Key}, Members: {entry.Value.Count}");
                var sortedUsers = entry.Value.OrderBy(a => a);
                foreach (var user in sortedUsers)
                {
                    Console.WriteLine($"! {user}");
                }
            }
        }
    }
}
