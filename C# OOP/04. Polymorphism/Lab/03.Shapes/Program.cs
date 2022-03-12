using System;
using System.Collections.Generic;

namespace _03.Shapes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Shape> shapes = new List<Shape>();

            shapes.Add(new Rectangle(4, 2));
            shapes.Add(new Square(3));
            shapes.Add(new Triangle(5));

            shapes.ForEach(a => Console.WriteLine(a.Draw()));
        }
    }
}
