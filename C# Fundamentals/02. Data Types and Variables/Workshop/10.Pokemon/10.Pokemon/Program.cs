using System;

namespace _10.Pokemon
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int power = int.Parse(Console.ReadLine());
            int distance = int.Parse(Console.ReadLine());
            int exhaustionFactor = int.Parse(Console.ReadLine());
            decimal specialPower = power / 2m;
            int count = 0;

            while (power >= distance)
            {
                power -= distance;
                count++;
                if (power == specialPower && exhaustionFactor != 0)
                {
                    power /= exhaustionFactor;
                }
            }
            Console.WriteLine(power);
            Console.WriteLine(count);
        }
    }
}
