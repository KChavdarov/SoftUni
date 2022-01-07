using System;
using System.Collections.Generic;

namespace _07.VehicleCatalogue
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Catalog vehicles = new Catalog();
            var input = Console.ReadLine();

            while (input != "end")
            {
                string[] tokens = input.Split('/');
                string type = tokens[0];
                string brand = tokens[1];
                string model = tokens[2];

                switch (type)
                {
                    case "Car":
                        int power = int.Parse(tokens[3]);
                        Car car = new Car(brand, model, power);
                        vehicles.addVehicle(car);
                        break;
                    case "Truck":
                        int weight = int.Parse(tokens[3]);
                        Truck truck = new Truck(brand, model, weight);
                        vehicles.addVehicle(truck);
                        break;
                }

                input = Console.ReadLine();
            }

            vehicles.Summarize();
        }

        public class Catalog
        {
            public Catalog()
            {
                CarCollection = new List<Car>();
                TruckCollection = new List<Truck>();
            }

            public List<Car> CarCollection { get; set; }
            public List<Truck> TruckCollection { get; set; }

            public void addVehicle<T>(T vehicle)
            {
                if (typeof(Car).IsInstanceOfType(vehicle))
                {
                    CarCollection.Add(vehicle as Car);
                }
                else if (typeof(Truck).IsInstanceOfType(vehicle))
                {
                    TruckCollection.Add(vehicle as Truck);
                }
            }
            public void Summarize()
            {
                if (CarCollection.Count > 0)
                {
                    Console.WriteLine("Cars:");
                    CarCollection.Sort((x, y) => x.Brand.CompareTo(y.Brand));
                    CarCollection.ForEach(car => Console.WriteLine(car));
                }
                if (TruckCollection.Count > 0)
                {
                    Console.WriteLine("Trucks:");
                    TruckCollection.Sort((x, y) => x.Brand.CompareTo(y.Brand));
                    TruckCollection.ForEach(truck => Console.WriteLine(truck));
                }
            }
        }

        public class Car
        {
            public Car(string brand, string model, int power)
            {
                Brand = brand;
                Model = model;
                Power = power;

            }

            public string Brand { get; set; }
            public string Model { get; set; }
            public int Power { get; set; }

            public override string ToString()
            {
                return $"{Brand}: {Model} - {Power}hp";
            }

        }
        public class Truck
        {
            public Truck(string brand, string model, int weight)
            {
                Brand = brand;
                Model = model;
                Weight = weight;

            }

            public string Brand { get; set; }
            public string Model { get; set; }
            public int Weight { get; set; }

            public override string ToString()
            {
                return $"{Brand}: {Model} - {Weight}kg";
            }
        }

    }
}
