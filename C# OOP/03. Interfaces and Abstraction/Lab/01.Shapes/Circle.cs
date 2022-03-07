using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Shapes
{
    internal class Circle : IDrawable
    {
        private int radius;

        public Circle(int radius)
        {
            Radius = radius;
        }

        public int Radius
        {
            get => radius;
            private set => radius = value;
        }
        public void Draw()
        {
            for (int i = 0; i < radius * 2 + 1; i++)
            {
                for (int j = 0; j < radius * 2 + 1; j++)
                {
                    var distance = Math.Sqrt(Math.Pow(Radius - i, 2) + Math.Pow(radius - j, 2));
                    if (Math.Ceiling(distance) <= radius)
                    {
                        Console.Write("--");
                    }
                    else
                    {
                        Console.Write("  ");
                    }
                }
                Console.WriteLine();
            }
        }

        public void DrawShape()
        {
            for (int i = 0; i < radius * 2 + 1; i++)
            {
                for (int j = 0; j < radius * 2 + 1; j++)
                {
                    var distance = Math.Sqrt(Math.Pow(Radius - i, 2) + Math.Pow(radius - j, 2));
                    if (Math.Ceiling(distance) == radius)
                    {
                        Console.Write("--");
                    }
                    else
                    {
                        Console.Write("  ");
                    }
                }
                Console.WriteLine();
            }
        }
    }
}
