using System;
using System.Collections.Generic;
using System.Linq;

namespace _04.FastFood
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int supply = int.Parse(Console.ReadLine());
            Queue<int> orders = new Queue<int>(Console.ReadLine().Split(' ').Select(int.Parse).ToArray());
            Console.WriteLine(orders.Max());

            while (orders.Count > 0)
            {
                if (supply >= orders.Peek())
                {
                    int order = orders.Dequeue();
                    supply -= order;
                }
                else
                {
                    break;
                }
            }

            if (orders.Count > 0)
            {
                Console.Write("Orders left: ");
                while (orders.Count > 0)
                {
                    int order = orders.Dequeue();
                    Console.Write(order);
                    if (orders.Count != 0)
                    {
                        Console.Write(" ");
                    }
                }
            }
            else
            {
                Console.WriteLine("Orders complete");
            }
        }
    }
}
