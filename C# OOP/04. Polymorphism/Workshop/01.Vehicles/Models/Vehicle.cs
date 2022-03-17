using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Vehicles.Models
{
    internal abstract class Vehicle
    {
        private double fuel;
        private double fuelConsumption;
        private double fuelTankCapacity;
        public bool isAirconOn;

        protected Vehicle(double fuel, double fuelConsumption, double fuelCapacity)
        {
            FuelCapacity = fuelCapacity;
            Fuel = fuel;
            FuelConsumption = fuelConsumption;
        }

        public double Fuel
        {
            get => fuel;
            protected set
            {
                if (value <= 0)
                {
                    Console.WriteLine("Fuel must be a positive number");
                    return;
                }

                if (Fuel + value > FuelCapacity)
                {
                    Console.WriteLine($"Cannot fit {value} fuel in the tank");
                    return;
                }

                fuel = value;
            }
        }
        public virtual double FuelConsumption { get => fuelConsumption; protected set => fuelConsumption = value; }
        public double FuelCapacity { get => fuelTankCapacity; protected set => fuelTankCapacity = value; }
        public virtual string Drive(double distance)
        {
            double fuelRequirement = distance * FuelConsumption;

            if (fuelRequirement > Fuel)
            {
                return $"{GetType().Name} needs refueling";
            }

            Fuel -= fuelRequirement;
            return $"{GetType().Name} travelled {distance} km";
        }

        public bool CanRefuel(double amount)
        {
            return amount + Fuel <= FuelCapacity;
        }
        public virtual void Refuel(double amount)
        {
            Fuel += amount;
        }
    }
}
