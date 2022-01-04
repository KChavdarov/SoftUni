using System;

namespace _05.Orders
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string product = Console.ReadLine().ToLower();
            int quantity = int.Parse(Console.ReadLine());

            Console.WriteLine($"{GetTotal(product, quantity):f2}");
        }
        static decimal GetTotal(string product, int quantity)
        {
            decimal price = 0;
            switch (product)
            {
                case "coffee":
                    price = 1.5m;
                    break;
                case "water":
                    price = 1.0m;
                    break;
                case "coke":
                    price = 1.4m;
                    break;
                case "snacks":
                    price = 2.0m;
                    break;
            }
            return price * quantity;
        }
    }
}
