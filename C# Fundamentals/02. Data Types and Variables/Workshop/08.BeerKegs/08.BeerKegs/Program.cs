using System;

namespace _08.BeerKegs
{
    internal class Program
    {
        static void Main(string[] args)
        {
            byte count = byte.Parse(Console.ReadLine());
            double maxVolume = 0;
            string maxName = "";

            for (int i = 0; i < count; i++)
            {
                string kegName = Console.ReadLine();
                double radius = double.Parse(Console.ReadLine());
                int height = int.Parse(Console.ReadLine());

                double kegVolume = Math.PI * Math.Pow(2, radius) * height;

                if (kegVolume > maxVolume)
                {
                    maxVolume = kegVolume;
                    maxName = kegName;
                }
            }
            Console.WriteLine(maxName);
        }
    }
}
