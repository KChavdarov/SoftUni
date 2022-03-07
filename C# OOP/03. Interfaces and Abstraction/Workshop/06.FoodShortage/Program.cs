using System;
using System.Collections.Generic;
using System.Linq;

namespace _06.FoodShortage
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, IBuyer> buyers = new Dictionary<string, IBuyer>();
            int n = int.Parse(Console.ReadLine());
            int foodBought = 0;

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split();

                if (tokens.Length == 3)
                {
                    buyers.Add(tokens[0], new Rebel(tokens[0], int.Parse(tokens[1]), tokens[2]));
                }
                else if (tokens.Length == 4)
                {
                    buyers.Add(tokens[0], new Citizen(tokens[0], int.Parse(tokens[1]), tokens[2], tokens[3]));
                }
            }

            string input = Console.ReadLine();
            while (input != "End")
            {
                if (buyers.ContainsKey(input))
                {
                    IBuyer buyer = buyers[input];
                    buyer.BuyFood();
                }

                input = Console.ReadLine();
            }

            Console.WriteLine(buyers.Values.Sum(a => a.Food));
        }
    }
}
