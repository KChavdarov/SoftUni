using System;
using System.Collections.Generic;
using System.Linq;

namespace _07.TruckTour
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<string> queue = new Queue<string>();
            int n = int.Parse(Console.ReadLine());
            Queue<string> pumps = new Queue<string>();

            for (int i = 0; i < n; i++)
            {
                pumps.Enqueue(Console.ReadLine());
            }

            for (int i = 0; i < n; i++)
            {
                queue = new Queue<string>(pumps);
                int fuel = 0;

                while (queue.Count > 0)
                {
                    int[] tokens = queue.Peek().Split(' ').Select(int.Parse).ToArray();
                    if (fuel + tokens[0] >= tokens[1])
                    {
                        fuel += tokens[0];
                        fuel -= tokens[1];
                        queue.Dequeue();
                    }
                    else
                    {
                        break;
                    }
                }

                if (queue.Count == 0)
                {
                    Console.WriteLine(i);
                    break;
                }

                pumps.Enqueue(pumps.Dequeue());
            }
        }
    }
}
