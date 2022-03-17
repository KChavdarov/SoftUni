using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles.Models
{
    internal class Bus : Vehicle
    {
        private const double AirconConsumptionAdder = 1.4;
        public Bus(double fuel, double fuelConsumption, double fuelTankCapacity) : base(fuel, fuelConsumption, fuelTankCapacity) { }
        public override double FuelConsumption => base.FuelConsumption + AirconConsumptionAdder;
    }
}
