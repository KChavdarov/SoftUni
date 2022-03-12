using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Shapes
{
    internal class Triangle : Shape
    {
        private int side;

        public Triangle(int side)
        {
            Side = side;
        }

        public int Side
        {
            get => side; private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException();
                }

                side = value;
            }
        }

        public override double CalculateArea() => side * side * Math.Sqrt(3) / 4;

        public override double CalculatePerimeter() => 3 * side;

        public override string Draw()
        {
            StringBuilder result = new StringBuilder();
            for (int i = 1; i <= side; i++)
            {
                result.AppendLine(new string('-', i));
            }

            return result.ToString().Trim();
        }
    }
}
