using System;

namespace _04.PrintAndSum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int start = int.Parse(Console.ReadLine());
            int end = int.Parse(Console.ReadLine());
            int sum = 0;
            string sequence = "";

            for (int i = start; i <= end; i++)
            {
                sequence += $"{i} ";
                sum += i;
            }
            
            sequence = sequence.Trim();
            Console.WriteLine(sequence);
            Console.WriteLine($"Sum: {sum}");
        }
    }
}