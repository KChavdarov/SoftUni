using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles.Models
{
    internal class Truck : Vehicle
    {
        private const double AirconConsumptionAdder = 1.6;
        private const double refuelFactor = 0.95;

        public Truck(double fuel, double fuelConsumption, double fuelTankCapacity) : base(fuel, fuelConsumption, fuelTankCapacity) { }

        public override double FuelConsumption => base.FuelConsumption + AirconConsumptionAdder;
        public override void Refuel(double amount)
        {
            base.Refuel(amount * refuelFactor);
        }
    }
}
