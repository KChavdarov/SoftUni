using System;
using System.Collections.Generic;
using System.Linq;

namespace _05.MultiplyBigNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<byte> digits = Console.ReadLine().ToCharArray().Select(a => byte.Parse(a.ToString())).ToList();
            byte multiplier = byte.Parse(Console.ReadLine());

            if (multiplier == 0)
            {
                Console.WriteLine(0);
                return;
            }

            byte carryover = 0;
            for (int i = digits.Count - 1; i >= 0; i--)
            {
                byte product = (byte)(digits[i] * multiplier + carryover);
                carryover = (byte)(product / 10);
                digits[i] = (byte)(product % 10);

                if (carryover > 0 && i == 0)
                {
                    digits = digits.Prepend(carryover).ToList();
                }
            }

            Console.WriteLine(String.Join("", digits));
        }
    }
}
