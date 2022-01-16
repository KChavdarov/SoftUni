using System;
using System.Collections.Generic;

namespace _08.TrafficJam
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<string> trafficJam = new Queue<string>();
            int n = int.Parse(Console.ReadLine());
            string input = Console.ReadLine();
            int count = 0;

            while (input != "end")
            {
                if (input == "green")
                {
                    for (int i = 0; i < n; i++)
                    {
                        if (trafficJam.Count > 0)
                        {
                            string car = trafficJam.Dequeue();
                            Console.WriteLine($"{car} passed!");
                            count++;
                        }
                        else
                        {
                            break;
                        }
                    }
                }
                else
                {
                    trafficJam.Enqueue(input);
                }

                input = Console.ReadLine();
            }

            Console.WriteLine($"{count} cars passed the crossroads.");
        }
    }
}
