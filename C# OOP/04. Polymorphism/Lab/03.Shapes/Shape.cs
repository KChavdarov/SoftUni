using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Shapes
{
    internal abstract class Shape
    {
        public abstract double CalculatePerimeter();
        public abstract double CalculateArea();
        public abstract string Draw();
    }
}
