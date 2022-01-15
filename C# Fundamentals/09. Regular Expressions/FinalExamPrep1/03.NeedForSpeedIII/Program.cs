using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.NeedForSpeedIII
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, int>> cars = new Dictionary<string, Dictionary<string, int>>();
            int count = int.Parse(Console.ReadLine());
            for (int i = 0; i < count; i++)
            {
                string[] tokens = Console.ReadLine().Split('|');
                if (tokens.Length > 0)
                {
                    string name = tokens[0];
                    int mileage = int.Parse(tokens[1]);
                    int fuel = int.Parse(tokens[2]);
                    if (!cars.ContainsKey(name))
                    {
                        cars.Add(name, new Dictionary<string, int> { { "mileage", 0 }, { "fuel", 0 } });
                    }
                    cars[name]["mileage"] += mileage;
                    cars[name]["fuel"] += fuel;
                }
            }

            string input = Console.ReadLine();

            while (input != "Stop")
            {
                string[] tokens = input.Split(" : ");

                if (tokens.Length > 0)
                {
                    string command = tokens[0];
                    string name = tokens[1];
                    if (cars.ContainsKey(name))
                    {
                        var car = cars[name];

                        switch (command)
                        {
                            case "Drive":
                                {
                                    int distance = int.Parse(tokens[2]);
                                    int fuel = int.Parse(tokens[3]);
                                    if (car["fuel"] < fuel)
                                    {
                                        Console.WriteLine("Not enough fuel to make that ride");
                                    }
                                    else
                                    {
                                        car["mileage"] += distance;
                                        car["fuel"] -= fuel;
                                        Console.WriteLine($"{name} driven for {distance} kilometers. {fuel} liters of fuel consumed.");

                                        if (car["mileage"] >= 100000)
                                        {
                                            cars.Remove(name);
                                            Console.WriteLine($"Time to sell the {name}!");
                                        }
                                    }
                                    break;
                                }
                            case "Refuel":
                                {
                                    int fuel = int.Parse(tokens[2]);
                                    int currentFuel = car["fuel"];
                                    car["fuel"] = Math.Min(75, currentFuel + fuel);
                                    int delta = car["fuel"] - currentFuel;
                                    Console.WriteLine($"{name} refueled with {delta} liters");
                                }
                                break;
                            case "Revert":
                                {
                                    int distance = int.Parse(tokens[2]);
                                    car["mileage"] = car["mileage"] - distance;
                                    if (car["mileage"] < 10000)
                                    {
                                        car["mileage"] = 10000;
                                    }
                                    else
                                    {
                                        Console.WriteLine($"{name} mileage decreased by {distance} kilometers");
                                    }
                                }
                                break;
                        }
                    }
                }

                input = Console.ReadLine();
            }

            foreach (var car in cars.OrderByDescending(a => a.Value["mileage"]).ThenBy(a => a.Key))
            {
                Console.WriteLine($"{car.Key} -> Mileage: {car.Value["mileage"]} kms, Fuel in the tank: {car.Value["fuel"]} lt.");
            }
        }
    }
}
