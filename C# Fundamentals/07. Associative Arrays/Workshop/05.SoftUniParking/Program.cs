using System;
using System.Collections.Generic;

namespace _05.SoftUniParking
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> parkingLot = new Dictionary<string, string>();
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string command = tokens[0];
                string name = tokens[1];

                switch (command)
                {
                    case "register":
                        string licensePlate = tokens[2];
                        parkingLot = Register(parkingLot, name, licensePlate);
                        break;
                    case "unregister":
                        parkingLot = Unregister(parkingLot, name);
                        break;
                }
            }

            foreach (var entry in parkingLot)
            {
                Console.WriteLine($"{entry.Key} => {entry.Value}");
            }
        }

        static Dictionary<string, string> Register(Dictionary<string, string> parkingLot, string name, string licensePlate)
        {
            if (parkingLot.ContainsKey(name))
            {
                Console.WriteLine($"ERROR: already registered with plate number {parkingLot[name]}");
            }
            else
            {
                parkingLot.Add(name, licensePlate);
                Console.WriteLine($"{name} registered {licensePlate} successfully");
            }
            return parkingLot;
        }
        static Dictionary<string, string> Unregister(Dictionary<string, string> parkingLot, string name)
        {
            if (parkingLot.ContainsKey(name))
            {
                parkingLot.Remove(name);
                Console.WriteLine($"{name} unregistered successfully");
            }
            else
            {
                Console.WriteLine($"ERROR: user {name} not found");
            }
            return parkingLot;
        }
    }
}
