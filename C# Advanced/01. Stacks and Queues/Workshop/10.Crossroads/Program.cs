using System;
using System.Collections.Generic;

namespace _10.Crossroads
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int GreenLightDuration = int.Parse(Console.ReadLine());
            int freeWindowDuration = int.Parse(Console.ReadLine());
            Queue<string> cars = new Queue<string>();
            Queue<char> crossroad = new Queue<char>();
            string input = Console.ReadLine();
            int carCount = 0;

            while (input != "END")
            {
                if (input != "green")
                {
                    cars.Enqueue(input);
                }
                else
                {
                    string car = "";
                    for (int i = 0; i < GreenLightDuration; i++)
                    {
                        if (crossroad.Count == 0)
                        {
                            if (cars.Count > 0)
                            {
                                car = cars.Dequeue();
                                carCount++;
                                crossroad = new Queue<char>(car.ToCharArray());
                                crossroad.Dequeue();
                            }
                        }
                        else
                        {
                            crossroad.Dequeue();
                        }
                    }

                    if (crossroad.Count > 0)
                    {
                        for (int i = 0; i < freeWindowDuration; i++)
                        {
                            crossroad.Dequeue();

                            if (crossroad.Count == 0)
                            {
                                break;
                            }
                        }
                    }

                    if (crossroad.Count > 0)
                    {
                        Console.WriteLine("A crash happened!");
                        Console.WriteLine($"{car} was hit at {crossroad.Dequeue()}.");
                        return;
                    }

                }

                input = Console.ReadLine();
            }

            Console.WriteLine("Everyone is safe.");
            Console.WriteLine($"{carCount} total cars passed the crossroads.");
        }
    }
}
