using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _05.SpecialCars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var tires = new List<List<Tire>>();
            string input = Console.ReadLine();
            int count = 0;
            while (input != "No more tires")
            {
                string[] tokens = input.Split(' ');
                tires.Add(new List<Tire>());

                for (int i = 0; i < tokens.Length; i++)
                {
                    int year = int.Parse(tokens[i]);
                    double pressure = double.Parse(tokens[++i]);
                    Tire tire = new Tire(year, pressure);
                    tires[count].Add(tire);
                }

                count++;
                input = Console.ReadLine();
            }

            List<Engine> engines = new List<Engine>();
            input = Console.ReadLine();
            while (input != "Engines done")
            {
                string[] tokens = input.Split(' ');
                int horsePower = int.Parse(tokens[0]);
                double capacity = double.Parse(tokens[1]);
                Engine engine = new Engine(horsePower, capacity);
                engines.Add(engine);
                input = Console.ReadLine();
            }

            input = Console.ReadLine();
            List<Car> cars = new List<Car>();
            while (input != "Show special")
            {
                string[] tokens = input.Split(' ');
                string make = tokens[0];
                string model = tokens[1];
                int year = int.Parse(tokens[2]);
                int fuelQuantity = int.Parse(tokens[3]);
                double fuelConsumtion = double.Parse(tokens[4]);
                Engine engine = engines[int.Parse(tokens[5])];
                Tire[] tireSet = tires[int.Parse(tokens[6])].ToArray();
                Car car = new Car(make, model, year, fuelQuantity, fuelConsumtion, engine, tireSet);
                cars.Add(car);

                input = Console.ReadLine();
            }
            Func<double, bool> isBetween9and10 = num => num > 9 && num < 10;

            var specialCars = cars.Where(a => a.Year == 2017 && a.Engine.HorsePower > 330 && isBetween9and10(a.Tires.Sum(a => a.Pressure))).ToList();
            specialCars.ForEach(a => a.Drive(20));
            specialCars.ForEach(Console.WriteLine);
        }
    }

    class Engine
    {
        public int HorsePower { get; set; }
        public double CubicCapacity { get; set; }

        public Engine(int horsePower, double cubicCapacity)
        {
            HorsePower = horsePower;
            CubicCapacity = cubicCapacity;
        }
        public Engine()
        {
            HorsePower = 100;
            CubicCapacity = 1600;
        }
    }

    class Tire
    {
        public int Year { get; set; }
        public double Pressure { get; set; }

        public Tire(int year, double pressure)
        {
            Year = year;
            Pressure = pressure;
        }

        public Tire()
        {
            Year = DateTime.Now.Year;
            Pressure = 2.1;
        }
    }

    class Car
    {
        string make;
        string model;
        int year;

        public string Make { get => make; set => make = value; }
        public string Model { get => model; set => model = value; }
        public int Year { get => year; set => year = value; }
        public double FuelQuantity { get; set; } = 50;
        public double FuelConsumption { get; set; } = 10;
        public Engine Engine { get; set; }
        public Tire[] Tires { get; set; }

        public Car(string make, string model, int year, double fuelQuantity, double fuelConsumption, Engine engine, Tire[] tires) : this(make, model, year, fuelQuantity, fuelConsumption)
        {
            Engine = engine;
            Tires = tires;
        }

        public Car(string make, string model, int year, double fuelQuantity, double fuelConsumption) : this(make, model, year)
        {
            FuelQuantity = fuelQuantity;
            FuelConsumption = fuelConsumption;
        }

        public Car(string make, string model, int year) : this()
        {
            Make = make;
            Model = model;
            Year = year;
        }

        public Car()
        {
            Make = "VW";
            Model = "Golf";
            Year = 2025;
            FuelQuantity = 200;
            FuelConsumption = 10;
            Engine = new Engine();
            Tires = new Tire[]
            {
                new Tire(),
                new Tire(),
                new Tire(),
                new Tire(),
            };
        }

        public void Drive(double distance)
        {
            double total = FuelConsumption / 100 * distance;

            if (FuelQuantity - total < 0)
            {
                Console.WriteLine("Not enough fuel to perform this trip!");
            }
            else
            {
                FuelQuantity -= total;
            }
        }
        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine($"Make: {Make}");
            result.AppendLine($"Model: {Model}");
            result.AppendLine($"Year: {Year}");
            result.AppendLine($"Horse Power: {Engine.HorsePower}");
            result.AppendLine($"Fuel: {FuelQuantity:f2}");
            return result.ToString();


        }
    }
}