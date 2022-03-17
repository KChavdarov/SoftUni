using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles.Models
{
    internal class Car : Vehicle
    {
        private const double AirconConsumptionAdder = 0.9;
        public Car(double fuel, double fuelConsumption, double fuelTankCapacity) : base(fuel, fuelConsumption, fuelTankCapacity) { }
        public override double FuelConsumption => isAirconOn ? base.FuelConsumption + AirconConsumptionAdder : base.FuelConsumption;
    }
}
