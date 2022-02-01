using System;
using System.Collections.Generic;

namespace _08.CarSalesman
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Dictionary<string, Engine> engines = new Dictionary<string, Engine>();
            for (int i = 0; i < n; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
                string model = tokens[0];
                int power = int.Parse(tokens[1]);
                Engine engine = new Engine(model, power);
                if (tokens.Length > 2)
                {
                    int displacement;
                    bool success = int.TryParse(tokens[2], out displacement);
                    if (success)
                    {
                        engine.Displacement = displacement;
                    }
                    else
                    {
                        string efficiency = tokens[2];
                        engine.Efficiency = efficiency;
                    }
                }
                if (tokens.Length > 3)
                {
                    string efficiency = tokens[3];
                    engine.Efficiency = efficiency;
                }
                engines[model] = engine;
            }

            int m = int.Parse(Console.ReadLine());
            List<Car> cars = new List<Car>();
            for (int i = 0; i < m; i++)
            {
                string[] tokens = Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries);
                string model = tokens[0];
                string engineModel = tokens[1];
                Engine engine = engines[engineModel];
                Car car = new Car(model, engine);
                if (tokens.Length > 2)
                {
                    int weight;
                    bool success = int.TryParse(tokens[2], out weight);
                    if (success)
                    {
                        car.Weight = weight;
                    }
                    else
                    {
                        string color = tokens[2];
                        car.Color = color;
                    }
                }
                if (tokens.Length > 3)
                {
                    string color = tokens[3];
                    car.Color = color;
                }
                cars.Add(car);
            }

            Console.WriteLine(String.Join(Environment.NewLine, cars));
        }
    }
}
