using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.FashionBoutique
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<int> clothes = new Stack<int>(Console.ReadLine().Split(' ').Select(int.Parse).ToArray());
            int capacity = int.Parse(Console.ReadLine());
            int racks = 1;
            int current = 0;

            while (clothes.Count > 0)
            {
                if (current + clothes.Peek() <= capacity)
                {
                    current += clothes.Pop();
                }
                else
                {
                    current = 0;
                    racks++;
                }
            }

            Console.WriteLine(racks);
        }
    }
}
