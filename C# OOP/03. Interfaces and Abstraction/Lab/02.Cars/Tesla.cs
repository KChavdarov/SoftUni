using System;
using System.Collections.Generic;
using System.Text;

namespace _02.Cars
{
    internal class Tesla : Car, IElectric
    {
        private int battery;

        public Tesla(string model, string color, int battery) : base(model, color)
        {
            Battery = battery;
        }

        public int Battery { get => battery; private set => battery = value; }

        public override string Start()
        {
            return $"Tesla {Model} started. Batteries charged: {Battery}";
        }

        public override string Stop()
        {
            return $"Tesla {Model} turned off.";
        }

        public override string ToString()
        {
            return $"{Color} Tesla {Model}";
        }
    }
}
