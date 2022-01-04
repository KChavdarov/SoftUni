using System;

namespace _04.CenturiesToMinutes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            byte centuries = byte.Parse(Console.ReadLine());
            short years = (short)(centuries * 100);
            int days = (int)(years * 365.2422);
            int hours = days * 24;
            long minutes = hours * 60L;

            Console.WriteLine($"{centuries} centuries = {years} years = {days} days = {hours} hours = {minutes} minutes");
        }
    }
}
