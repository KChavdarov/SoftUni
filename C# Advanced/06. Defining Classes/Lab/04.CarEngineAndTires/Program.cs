using System;
using System.Text;

namespace _04.CarEngineAndTires
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car("BMW", "330i", 2020);
            car.FuelConsumption = 6;
            car.FuelQuantity = 30;
            car.Drive(200);
            car.Drive(50);
            Console.WriteLine(car);

            Car car2 = new Car();
            car2.Drive(100);
            Console.WriteLine(car2);

            Engine engine = new Engine(200, 3000);
            Tire[] tires = new Tire[]
            {
                new Tire(2021,2.2),
                new Tire(2021,2.2),
                new Tire(2021,2.1),
                new Tire(2021,2.1),
            };

            Car car3 = new Car("BMW", "330d", 2004, 30, 10, engine, tires);
            car3.Drive(200);
            Console.WriteLine(car3);
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
