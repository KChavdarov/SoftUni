using System;

namespace _10.RangeExpenses
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int losses = int.Parse(Console.ReadLine());
            double headsetPrice = double.Parse(Console.ReadLine());
            double mousePrice = double.Parse(Console.ReadLine());
            double keyboardPrice = double.Parse(Console.ReadLine());
            double displayPrice = double.Parse(Console.ReadLine());

            int headsets = 0;
            int mice = 0;
            int keyboards = 0;
            int displays = 0;

            for (int i = 1; i <= losses; i++)
            {
                if (i % 2 == 0)
                {
                    headsets++;
                }
                if (i % 3 == 0)
                {
                    mice++;
                }
                if (i % 6 == 0)
                {
                    keyboards++;
                }
                if (i % 12 == 0)
                {
                    displays++;
                }
            }

            double total = headsets * headsetPrice + mice * mousePrice + keyboards * keyboardPrice + displays * displayPrice;

            Console.WriteLine($"Rage expenses: {total:f2} lv.");
        }
    }
}