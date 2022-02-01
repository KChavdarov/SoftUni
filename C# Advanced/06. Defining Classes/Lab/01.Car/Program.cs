using System;
using System.Text;

namespace _01.Car
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car("BMW", "330i", 2020);
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

        public Car(string make, string model, int year)
        {
            Make = make;
            Model = model;
            Year = year;
        }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine($"Make: {make}");
            result.AppendLine($"Model: {model}");
            result.AppendLine($"Year: {year}");
            return result.ToString();
        }
    }
}
