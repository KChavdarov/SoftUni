using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.WarmWinter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<int> hats = new Stack<int>(Console.ReadLine().Split(" ").Select(int.Parse));
            Queue<int> scarfs = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));
            List<int> sets = new List<int>();

            while (scarfs.Count > 0 && hats.Count > 0)
            {
                int hat = hats.Pop();
                int scarf = scarfs.Dequeue();

                while (true)
                {
                    if (hat > scarf)
                    {
                        sets.Add(hat + scarf);
                        break;
                    }
                    else if (hat < scarf && hats.Count > 0)
                    {
                        hat = hats.Pop();
                        continue;
                    }
                    else if (hat == scarf && scarfs.Count > 0)
                    {
                        scarf = scarfs.Dequeue();
                        hat += 1;
                        continue;
                    }
                    else
                    {
                        break;
                    }
                }
            }

            Console.WriteLine($"The most expensive set is: {sets.Max()}");
            Console.WriteLine(String.Join(" ", sets));
        }
    }
}
