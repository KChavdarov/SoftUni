using System;
using System.Collections.Generic;

namespace _06.SpeedRacing
{
    public class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, Car> cars = new Dictionary<string, Car>();

            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ');
                Car car = new Car(tokens[0], double.Parse(tokens[1]), double.Parse(tokens[2]));
                cars[tokens[0]] = car;
            }

            string input = Console.ReadLine();
            while (input != "End")
            {
                string[] tokens = input.Split(' ');
                string model = tokens[1];
                double distance = double.Parse(tokens[2]);
                cars[model].Drive(distance);
                input = Console.ReadLine();
            }

            Console.WriteLine(String.Join(Environment.NewLine, cars.Values));
        }
    }
}
