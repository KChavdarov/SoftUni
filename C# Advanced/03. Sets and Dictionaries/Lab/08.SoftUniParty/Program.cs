using System;
using System.Collections.Generic;

namespace _08.SoftUniParty
{
    internal class Program
    {
        static void Main(string[] args)
        {
            HashSet<string> vip = new HashSet<string>();
            HashSet<string> regular = new HashSet<string>();

            string input = Console.ReadLine();

            while (input != "PARTY")
            {
                if (Char.IsDigit(input[0]))
                {
                    vip.Add(input);
                }
                else
                {
                    regular.Add(input);
                }

                input = Console.ReadLine();
            }

            while (input != "END")
            {
                if (Char.IsDigit(input[0]))
                {
                    vip.Remove(input);
                }
                else
                {
                    regular.Remove(input);
                }

                input = Console.ReadLine();
            }

            Console.WriteLine(regular.Count + vip.Count);
            foreach (var guest in vip)
            {
                Console.WriteLine(guest);
            }

            foreach (var guest in regular)
            {
                Console.WriteLine(guest);
            }
        }
    }
}
