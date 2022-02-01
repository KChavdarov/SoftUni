using System;
using System.Collections.Generic;
using System.Text;

namespace _06.SpeedRacing
{
    internal class Car
    {
        public string Model { get; set; }
        public double FuelAmount { get; set; }
        public double FuelConsumptionPerKilometer { get; set; }
        public double TravelledDistance { get; set; }

        public Car()
        {
            Model = "Undefined";
            FuelAmount = 0;
            FuelConsumptionPerKilometer = 0;
            TravelledDistance = 0;
        }

        public Car(string model, double fuelAmount, double fuelConsumtion) : this()
        {
            Model = model;
            FuelAmount = fuelAmount;
            FuelConsumptionPerKilometer = fuelConsumtion;
        }

        public void Drive(double distance)
        {
            double fuelNeeded = distance * FuelConsumptionPerKilometer;

            if (fuelNeeded > FuelAmount)
            {
                Console.WriteLine("Insufficient fuel for the drive");
            }
            else
            {
                FuelAmount -= fuelNeeded;
                TravelledDistance += distance;
            }
        }

        public override string ToString()
        {
            return $"{Model} {FuelAmount:F2} {TravelledDistance:F0}";
        }
    }
}
