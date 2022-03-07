using System;
using System.Collections.Generic;
using System.Text;

namespace _02.Cars
{
    internal class Seat : Car
    {

        public Seat(string model, string color) : base(model, color) { }

        public override string Start()
        {
            return $"Seat {Model}'s engine cranked";
        }

        public override string Stop()
        {
            return $"Seat {Model}'s engine turned off.";
        }
        public override string ToString()
        {
            return $"{Color} Seat {Model}";
        }
    }
}
