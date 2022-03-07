using System;
using System.Collections.Generic;
using System.Text;

namespace BorderControlBirthdays
{
    internal class Robot : Inhabitant
    {
        private string model;
        public Robot(string model, string id) : base(id)
        {
            Model = model;
        }

        public string Model { get => model; private set => model = value; }
    }
}
