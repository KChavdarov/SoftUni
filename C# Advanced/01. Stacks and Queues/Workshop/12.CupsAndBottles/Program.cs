using System;
using System.Collections.Generic;
using System.Linq;

namespace _12.CupsAndBottles
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<int> cups = new Queue<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            Stack<int> bottles = new Stack<int>(Console.ReadLine().Split().Select(int.Parse).ToArray());
            int wastedWater = 0;

            while (cups.Count > 0 && bottles.Count > 0)
            {
                int cup = cups.Dequeue();
                int bottle = bottles.Pop();

                while (cup > 0)
                {
                    cup -= bottle;
                    bottle = -cup;

                    if (cup <= 0)
                    {
                        wastedWater += bottle;
                    }
                    else
                    {
                        if (bottles.Count > 0)
                        {
                            bottle = bottles.Pop();
                        }
                        else
                        {
                            break;
                        }
                    }
                }
            }

            if (cups.Count > 0 && bottles.Count == 0)
            {
                Console.WriteLine($"Cups: {String.Join(' ', cups)}");
            }
            else
            {
                Console.WriteLine($"Bottles: {String.Join(' ', bottles)}");
            }

            Console.WriteLine($"Wasted litters of water: {wastedWater}");
        }
    }
}
