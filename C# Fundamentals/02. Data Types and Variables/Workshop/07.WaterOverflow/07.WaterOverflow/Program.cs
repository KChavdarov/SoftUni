using System;

namespace _07.WaterOverflow
{
    internal class Program
    {
        static void Main(string[] args)
        {
            byte count = byte.Parse(Console.ReadLine());
            byte capacity = 255;

            for (int i = 0; i < count; i++)
            {
                int volume = int.Parse(Console.ReadLine());

                if (volume > capacity)
                {
                    Console.WriteLine("Insufficient capacity!");
                }
                else
                {
                    capacity -= (byte)volume;
                }
            }
            Console.WriteLine(255 - capacity);
        }
    }
}
