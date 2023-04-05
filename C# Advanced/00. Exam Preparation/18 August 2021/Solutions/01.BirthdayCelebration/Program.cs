using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.BirthdayCelebration
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<int> guests = new Queue<int>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Stack<int> plates = new Stack<int>(Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));

            int waste = 0;

            while (guests.Count > 0 && plates.Count > 0)
            {
                int guest = guests.Peek();

                while (plates.Count > 0)
                {
                    int plate = plates.Pop();
                    guest -= plate;

                    if (guest <= 0)
                    {
                        guests.Dequeue();
                        waste += -guest;
                        break;
                    }
                }
            }

            if (guests.Count == 0)
            {
                Console.WriteLine("Plates: " + String.Join(' ', plates));
            }
            else
            {
                Console.WriteLine("Guests: " + String.Join(' ', guests));
            }

            Console.WriteLine($"Wasted grams of food: {waste}");
        }
    }
}
