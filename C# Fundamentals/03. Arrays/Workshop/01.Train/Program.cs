using System;

namespace _01.Train
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int wagons = int.Parse(Console.ReadLine());
            var train = new int[wagons];
            int sum = 0;

            for (int i = 0; i < wagons; i++)
            {
                int passengers = int.Parse(Console.ReadLine());
                train[i] = passengers;
                sum += passengers;
            }

            Console.WriteLine(String.Join(' ', train));
            Console.WriteLine(sum);
        }
    }
}
