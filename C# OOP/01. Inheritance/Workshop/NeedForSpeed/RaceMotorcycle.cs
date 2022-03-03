using System;
using System.Collections.Generic;
using System.Text;

namespace NeedForSpeed
{
    public class RaceMotorcycle : Motorcycle
    {
        private const double DefaultFuelConsumption = 8;

        public RaceMotorcycle(double fuel, int horsePower) : base(fuel, horsePower)
        {
        }

        public override double FuelConsumption => DefaultFuelConsumption;
    }
}
