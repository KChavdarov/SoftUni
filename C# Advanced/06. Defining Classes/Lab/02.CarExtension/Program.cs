using System;
using System.Text;

namespace _02.CarExtension
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


        public Car(string make, string model, int year, double fuelQuantity, double fuelConsumption) : this(make, model, year)
        {
            FuelQuantity = fuelQuantity;
            FuelConsumption = fuelConsumption;
        }
        public Car(string make, string model, int year)
        {
            Make = make;
            Model = model;
            Year = year;
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
            result.AppendLine($"Make: {make}");
            result.AppendLine($"Model: {model}");
            result.AppendLine($"Year: {year}");
            result.AppendLine($"Fuel: {FuelQuantity:f2}");
            return result.ToString();
        }
    }
}

