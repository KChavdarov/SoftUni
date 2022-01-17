using System;
using System.Collections.Generic;
using System.Linq;

namespace _03.MaximumAndMinimumElement
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<int> sequence = new Stack<int>();
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                int[] input = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                int action = input[0];

                switch (action)
                {
                    case 1:
                        int num = input[1];
                        sequence.Push(num);
                        break;
                    case 2:
                        sequence.Pop();
                        break;
                    case 3:
                        if (sequence.Count > 0) Console.WriteLine(sequence.Max());
                        break;
                    case 4:
                        if (sequence.Count > 0) Console.WriteLine(sequence.Min());
                        break;
                }
            }

            while (sequence.Count > 0)
            {
                Console.Write(sequence.Pop());
                if (sequence.Count != 0)
                {
                    Console.Write(", ");
                }
            }
        }
    }
}
