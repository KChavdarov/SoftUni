using System;
using System.Collections.Generic;

namespace _01.Shapes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Rectangle rect = new Rectangle(18, 11);
            //rect.DrawShape();
            //rect.Draw();

            Circle circle = new Circle(10);
            //circle.DrawShape();
            //circle.Draw();

            List<IDrawable> shapes = new List<IDrawable>();
            shapes.Add(circle);
            shapes.Add(rect);

            foreach (var shape in shapes)
            {
                shape.Draw();
                shape.DrawShape();
            }
        }
    }
}
