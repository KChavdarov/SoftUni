using System;

namespace _02.Cars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Tesla tesla = new Tesla("Model 3", "black", 3);
            Console.WriteLine(tesla.Start());
            Console.WriteLine(tesla.Stop());
            Seat seat = new Seat("Ibiza", "red");
            Console.WriteLine(tesla);
            Console.WriteLine(seat);
        }
    }
}
