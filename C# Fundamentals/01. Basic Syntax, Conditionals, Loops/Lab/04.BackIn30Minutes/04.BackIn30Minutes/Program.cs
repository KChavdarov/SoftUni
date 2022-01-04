using System;

namespace _04.BackIn30Minutes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter hours");
            int hours = int.Parse(Console.ReadLine());
            Console.WriteLine("Please enter minutes");
            int minutes = int.Parse(Console.ReadLine());
            minutes += 30;

            if (minutes >= 60)
            {
                minutes -= 60;
                hours++;
            }

            if (hours >= 24)
            {
                hours -= 24;
            }

            Console.WriteLine($"{hours:d2}:{minutes:d2}");
        }
    }
}
