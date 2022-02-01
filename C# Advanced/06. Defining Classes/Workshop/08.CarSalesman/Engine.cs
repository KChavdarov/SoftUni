using System;
using System.Collections.Generic;
using System.Text;

namespace _08.CarSalesman
{
    internal class Engine
    {
        public string Model { get; set; }
        public int Power { get; set; }
        public int Displacement { get; set; }
        public string Efficiency { get; set; }

        public Engine(string model, int power)
        {
            Model = model;
            Power = power;
        }

        public Engine(string model, int power, int displacement) : this(model, power)
        {
            Displacement = displacement;
        }

        public Engine(string model, int power, int displacement, string efficiency) : this(model, power, displacement)
        {
            Efficiency = efficiency;
        }

        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine($"  {Model}:");
            result.AppendLine($"    Power: {Power}");
            string displacement = Displacement == 0 ? "n/a" : Displacement.ToString();
            result.AppendLine($"    Displacement: {displacement}");
            string efficiency = Efficiency == null ? "n/a" : Efficiency;
            result.AppendLine($"    Efficiency: {efficiency}");
            return result.ToString().Trim();
        }
    }
}
