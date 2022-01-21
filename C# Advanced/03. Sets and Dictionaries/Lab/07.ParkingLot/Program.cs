using System;
using System.Collections.Generic;

namespace _07.ParkingLot
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();
            HashSet<string> parking = new HashSet<string>();

            while (input != "END")
            {
                string[] tokens = input.Split(", ");
                switch (tokens[0])
                {
                    case "IN":
                        parking.Add(tokens[1]);
                        break;
                    case "OUT":
                        parking.Remove(tokens[1]);
                        break;
                }

                input = Console.ReadLine();
            }

            if (parking.Count > 0)
            {
                foreach (var car in parking)
                {
                    Console.WriteLine(car);
                }
            }
            else
            {
                Console.WriteLine("Parking Lot is Empty");
            }
        }
    }
}
