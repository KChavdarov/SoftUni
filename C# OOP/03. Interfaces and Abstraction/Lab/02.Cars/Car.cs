using System;
using System.Collections.Generic;
using System.Text;

namespace _02.Cars
{
    internal abstract class Car
    {
        private string model;
        private string color;

        protected Car(string model, string color)
        {
            Model = model;
            Color = color;
        }

        public string Model { get => model; private set => model = value; }
        public string Color { get => color; private set => color = value; }

        public abstract string Start();
        public abstract string Stop();

    }
}
