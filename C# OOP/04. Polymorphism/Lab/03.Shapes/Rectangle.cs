using System;
using System.Collections.Generic;
using System.Text;

namespace _03.Shapes
{
    internal class Rectangle : Shape
    {
        private int length;
        private int width;

        public Rectangle(int length, int width)
        {
            Length = length;
            Width = width;
        }

        public int Length
        {
            get => length; private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException();
                }

                length = value;
            }
        }
        public int Width
        {
            get => width; private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException();
                }

                width = value;
            }
        }
        public override double CalculateArea() => Length * Width;

        public override double CalculatePerimeter() => 2 * (length + width);

        public override string Draw()
        {
            StringBuilder result = new StringBuilder();
            for (int i = 1; i <= Width; i++)
            {
                result.AppendLine(new string('-', Length));
            }

            return result.ToString().Trim();
        }
    }
}
