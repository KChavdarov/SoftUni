using System;
using System.Collections.Generic;

namespace _06.VehicleCatalogue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // {typeOfVehicle} {model} {color} {horsepower}

            var catalogue = new Catalogue();
            string input = Console.ReadLine();

            while (input != "End")
            {
                string[] tokens = input.Split(' ');
                string type = tokens[0];
                type = type == "car" ? "Car" : "Truck";
                string model = tokens[1];
                string color = tokens[2];
                int power = int.Parse(tokens[3]);

                catalogue.addVehicle(type, model, color, power);
                input = Console.ReadLine();
            }

            input = Console.ReadLine();

            while (input != "Close the Catalogue")
            {
                var vehicle = catalogue.Vehicles.Find(x => x.Model == input);
                if (vehicle != null)
                {
                    vehicle.GetInfo();
                }
                input = Console.ReadLine();
            }

            catalogue.LogAverages();

        }

        public class Catalogue
        {
            public Catalogue()
            {
                Vehicles = new List<Vehicle>();
            }

            public List<Vehicle> Vehicles { get; }

            public void addVehicle(string type, string model, string color, int power)
            {
                Vehicle vehicle = new Vehicle(type, model, color, power);
                Vehicles.Add(vehicle);
            }
            public void LogAverages()
            {
                GetAveragePower("Car");
                GetAveragePower("Truck");
            }

            private double GetAveragePower(string type)
            {
                var list = Vehicles.FindAll(x => x.Type == type);
                double average = 0;
                list.ForEach(v => average += v.Power / (double)list.Count);
                Console.WriteLine($"{type}s have average horsepower of: {average:f2}.");
                return average;
            }
        }

        public class Vehicle
        {
            public Vehicle(string type, string model, string color, int power)
            {
                Type = type;
                Model = model;
                Color = color;
                Power = power;
            }

            public string Type { get; set; }
            public string Model { get; set; }
            public string Color { get; set; }
            public int Power { get; set; }

            public void GetInfo()
            {
                Console.WriteLine($"Type: {Type}");
                Console.WriteLine($"Model: {Model}");
                Console.WriteLine($"Color: {Color}");
                Console.WriteLine($"Horsepower: {Power}");
            }
        }
    }
}
