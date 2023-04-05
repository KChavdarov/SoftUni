using System;
using System.Collections.Generic;
using System.Text;

namespace StreetRacing
{
    internal class Car
    {
        public Car(string make, string model, string licensePlate, int horsePower, double weight)
        {
            Make = make;
            Model = model;
            LicensePlate = licensePlate;
            HorsePower = horsePower;
            Weight = weight;
        }

        public string Make { get; set; }
        public string Model { get; set; }
        public string LicensePlate { get; set; }
        public int HorsePower { get; set; }
        public double Weight { get; set; }

        public override string ToString()
        {
            return $"Make: {Make}\nModel: { Model}\nLicense Plate: { LicensePlate}\nHorse Power: { HorsePower}\nWeight: { Weight}";
        }
    }
}
