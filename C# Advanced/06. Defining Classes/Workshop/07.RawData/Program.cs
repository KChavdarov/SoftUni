using System;
using System.Linq;
using System.Collections.Generic;

namespace _07.RawData
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<Car> cars = new List<Car>();
            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                string model = tokens[0];
                int engineSpeed = int.Parse(tokens[1]);
                int enginePower = int.Parse(tokens[2]);
                Engine engine = new Engine(engineSpeed, enginePower);
                int cargoWeight = int.Parse(tokens[3]);
                string cargoType = tokens[4];
                Cargo cargo = new Cargo(cargoWeight, cargoType);
                Tire tire1 = new Tire(double.Parse(tokens[5]), int.Parse(tokens[6]));
                Tire tire2 = new Tire(double.Parse(tokens[7]), int.Parse(tokens[8]));
                Tire tire3 = new Tire(double.Parse(tokens[9]), int.Parse(tokens[10]));
                Tire tire4 = new Tire(double.Parse(tokens[11]), int.Parse(tokens[12]));
                Tire[] tires = new Tire[] { tire1, tire2, tire3, tire4 };
                Car car = new Car(model, engine, cargo, tires);
                cars.Add(car);
            }

            string type = Console.ReadLine();
            switch (type)
            {
                case "fragile":
                    cars.FindAll(a => a.Cargo.Type == "fragile" && a.Tires.Any(t => t.Pressure < 1)).ForEach(a => Console.WriteLine(a.Model));
                    break;
                case "flammable":
                    cars.FindAll(a => a.Cargo.Type == "flammable" && a.Engine.Power > 250).ForEach(a => Console.WriteLine(a.Model));
                    break;
                default:
                    break;
            }
        }
    }
}
