using System;

namespace _07.VendingMachine
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double credit = 0;
            var input = Console.ReadLine().ToLower();

            while (input != "start")
            {
                double coin = double.Parse(input);
                if (coin == 0.1 || coin == 0.2 || coin == 0.5 || coin == 1 || coin == 2)
                {
                    credit += coin;
                }
                else
                {
                    Console.WriteLine($"Cannot accept {coin}");
                }
                input = Console.ReadLine().ToLower();
            }

            input = Console.ReadLine().ToLower();
            while (input != "end")
            {
                double price = 0;
                switch (input)
                {
                    case "nuts":
                        price = 2.0;
                        break;
                    case "water":
                        price = 0.7;
                        break;
                    case "crisps":
                        price = 1.5;
                        break;
                    case "soda":
                        price = 0.8;
                        break;
                    case "coke":
                        price = 1.0;
                        break;
                    default:
                        Console.WriteLine("Invalid product");
                        break;
                }

                if (price != 0)
                {
                    if (price > credit)
                    {
                        Console.WriteLine("Sorry, not enough money");
                    }
                    else
                    {
                        credit -= price;
                        Console.WriteLine($"Purchased {input}");
                    }
                }
                input = Console.ReadLine().ToLower();
            }
            Console.WriteLine($"Change: {credit:f2}");
        }
    }
}