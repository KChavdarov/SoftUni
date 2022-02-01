using System;
using System.Collections.Generic;
using System.Text;

namespace _08.CarSalesman
{
    internal class Car
    {
        public string Model { get; set; }
        public Engine Engine { get; set; }
        public int Weight { get; set; }
        public string Color { get; set; }

        public Car(string model, Engine engine)
        {
            Model = model;
            Engine = engine;
        }

        public Car(string model, Engine engine, int weight, string color) : this(model, engine)
        {
            Weight = weight;
            Color = color;
        }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine($"{Model}:");
            result.AppendLine($"  {Engine}");
            string weight = Weight == 0 ? "n/a" : Weight.ToString();
            result.AppendLine($"  Weight: {weight}");
            string color = Color == null ? "n/a" : Color;
            result.AppendLine($"  Color: {color}");
            return result.ToString().Trim();
        }
    }
}
