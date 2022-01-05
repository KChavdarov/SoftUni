using System;
using System.Collections.Generic;

namespace _03.HouseParty
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            List<string> guestlist = new List<string>();

            for (int i = 0; i < count; i++)
            {
                var tokens = Console.ReadLine().Split(' ');
                string name = tokens[0];

                if (tokens.Length == 3)
                {
                    guestlist = AddGuest(guestlist, name);
                }
                else if (tokens.Length == 4)
                {
                    guestlist = RemoveGuest(guestlist, name);
                }
            }

            PrintGuestList(guestlist);
        }

        static List<string> AddGuest(List<string> guestList, string guest)
        {
            if (guestList.Contains(guest))
            {
                Console.WriteLine($"{guest} is already in the list!");
            }
            else
            {
                guestList.Add(guest);
            }
            return guestList;
        }

        static List<string> RemoveGuest(List<string> guestList, string guest)
        {
            if (!guestList.Contains(guest))
            {
                Console.WriteLine($"{guest} is not in the list!");
            }
            else
            {
                guestList.Remove(guest);
            }
            return guestList;
        }

        static void PrintGuestList(List<string> guestlist)
        {
            foreach (string guest in guestlist)
            {
                Console.WriteLine(guest);
            }
        }
    }
}
