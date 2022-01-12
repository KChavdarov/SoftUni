using System;

namespace _02.CharacterMultiplier
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split(' ');
            string strA = input[0];
            string strB = input[1];
            int sum = 0;
            int maxLength = Math.Max(strA.Length, strB.Length);

            for (int i = 0; i < maxLength; i++)
            {
                int multiplierA = 1;
                int multiplierB = 1;

                if (i < strA.Length)
                {
                    multiplierA = strA[i];
                }

                if (i < strB.Length)
                {
                    multiplierB = strB[i];
                }

                sum += multiplierA * multiplierB;
            }

            Console.WriteLine(sum);
        }
    }
}
