using System;

namespace _03.Vacation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int group = int.Parse(Console.ReadLine());
            string type = Console.ReadLine().ToLower();
            string day = Console.ReadLine().ToLower();
            double price = 0;

            switch (type)
            {
                case "students":
                    switch (day)
                    {
                        case "friday":
                            price = 8.45;
                            break;
                        case "saturday":
                            price = 9.8;
                            break;
                        case "sunday":
                            price = 10.46;
                            break;
                    }
                    if (group >= 30)
                    {
                        price *= 0.85;
                    }
                    break;
                case "business":
                    switch (day)
                    {
                        case "friday":
                            price = 10.9;
                            break;
                        case "saturday":
                            price = 15.6;
                            break;
                        case "sunday":
                            price = 16;
                            break;
                    }
                    if (group >= 100)
                    {
                        group -= 10;
                    }
                    break;
                case "regular":
                    switch (day)
                    {
                        case "friday":
                            price = 15;
                            break;
                        case "saturday":
                            price = 20;
                            break;
                        case "sunday":
                            price = 22.5;
                            break;
                    }
                    if (group >= 10 && group <= 20)
                    {
                        price *= 0.95;
                    }
                    break;
                default:
                    break;
            }

            Console.WriteLine($"Total price: {(price * group):f2}");
        }
    }
}