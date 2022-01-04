using System;

namespace _01.ConvertMtoKM
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int distanceInMeters = int.Parse(Console.ReadLine());
            decimal distanceInKilometers = distanceInMeters / 1000m;
            Console.WriteLine($"{distanceInKilometers:f2}");
        }
    }
}
