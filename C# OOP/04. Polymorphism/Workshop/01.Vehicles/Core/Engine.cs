using _01.Vehicles.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles.Core
{
    internal class Engine
    {
        private Dictionary<string, Vehicle> VehicleMap;

        public Engine()
        {
            VehicleMap = new Dictionary<string, Vehicle>();
        }

        public void Run()
        {
            for (int i = 0; i < 3; i++)
            {
                string[] tokens = Console.ReadLine().Split(" ");
                string vehicleType = tokens[0];
                double fuel = double.Parse(tokens[1]);
                double fuelConsumption = double.Parse(tokens[2]);
                double fuelCapacity = double.Parse(tokens[3]);

                if (i == 0)
                {
                    VehicleMap.Add(vehicleType, new Car(fuel, fuelConsumption, fuelCapacity));
                }
                else if (i == 1)
                {
                    VehicleMap.Add(vehicleType, new Truck(fuel, fuelConsumption, fuelCapacity));
                }
                else if (i == 2)
                {
                    VehicleMap.Add(vehicleType, new Bus(fuel, fuelConsumption, fuelCapacity));

                }
            }

            int count = int.Parse(Console.ReadLine());

            for (int i = 0; i < count; i++)
            {
                string[] tokens = Console.ReadLine().Split(" ");
                string command = tokens[0];
                string vehicleType = tokens[1];
                Vehicle vehicle = VehicleMap[vehicleType];

                switch (command)
                {
                    case "Drive":
                        {
                            vehicle.isAirconOn = true;
                            double distance = double.Parse(tokens[2]);
                            Console.WriteLine(vehicle.Drive(distance));
                        }
                        break;
                    case "DriveEmpty":
                        {
                            vehicle.isAirconOn = false;
                            double distance = double.Parse(tokens[2]);
                            Console.WriteLine(vehicle.Drive(distance));
                        }
                        break;
                    case "Refuel":
                        double amount = double.Parse(tokens[2]);
                        if (vehicle.CanRefuel(amount))
                        {
                            vehicle.Refuel(amount);
                        }
                        else
                        {
                            Console.WriteLine($"Cannot fit {amount} fuel in the tank");
                        }
                        break;
                    default:
                        break;
                }
            }

            printVehicles();
        }

        private void printVehicles()
        {
            foreach (var vehicle in VehicleMap.Values)
            {
                Console.WriteLine($"{vehicle.GetType().Name}: {vehicle.Fuel:F2}");
            }
        }
    }
}
