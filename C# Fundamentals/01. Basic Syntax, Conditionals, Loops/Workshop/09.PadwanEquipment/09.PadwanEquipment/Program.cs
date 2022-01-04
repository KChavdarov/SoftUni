using System;

namespace _09.PadwanEquipment
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double credit = double.Parse(Console.ReadLine());
            int students = int.Parse(Console.ReadLine());
            double lightSaberPrice = double.Parse(Console.ReadLine());
            double robePrice = double.Parse(Console.ReadLine());
            double beltPrice = double.Parse(Console.ReadLine());

            double lightsabers = lightSaberPrice * Math.Ceiling(students * 1.1);
            double robes = robePrice * students;
            double belts = beltPrice * (students - students / 6);

            double total = lightsabers + robes + belts;

            if (total > credit)
            {
                Console.WriteLine($"John will need {(total - credit):f2}lv more.");
            }
            else
            {
                Console.WriteLine($"The money is enough - it would cost {total:f2}lv.");
            }
        }
    }
}