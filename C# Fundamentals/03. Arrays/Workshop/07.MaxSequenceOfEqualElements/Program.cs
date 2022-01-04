using System;
using System.Linq;

namespace _07.MaxSequenceOfEqualElements
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int currentSequence = 1;
            int maxSequence = 1;
            int current = numbers[0];
            int max = numbers[0];

            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] == current)
                {
                    currentSequence++;
                }
                else
                {
                    currentSequence = 1;
                    current = numbers[i];
                }

                if (currentSequence > maxSequence)
                {
                    maxSequence = currentSequence;
                    max = current;
                }
            }

            int[] results = new int[maxSequence];
            for (int i = 0; i < maxSequence; i++)
            {
                results[i] = max;
            }

            Console.WriteLine(String.Join(' ', results));
        }
    }
}
