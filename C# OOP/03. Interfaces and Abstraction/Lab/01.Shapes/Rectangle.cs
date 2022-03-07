using System;
using System.Collections.Generic;
using System.Text;

namespace _01.Shapes
{
    internal class Rectangle : IDrawable
    {
        private int length;
        private int width;

        public Rectangle(int length, int width)
        {
            Length = length;
            Width = width;
        }

        public int Length { get => length; private set => length = value; }
        public int Width { get => width; private set => width = value; }
        public void Draw()
        {
            for (int i = 0; i < width; i++)
            {
                Console.WriteLine(new String('-', length * 2));
            }
        }

        public void DrawShape()
        {
            Console.WriteLine(new String('-', length * 2));
            for (int i = 0; i < width - 2; i++)
            {
                Console.Write("-");
                Console.Write(new String(' ', length * 2 - 2));
                Console.WriteLine("-");
            }
            Console.WriteLine(new String('-', length * 2));
        }
    }
}
