using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.TheFightForGondor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int waves = int.Parse(Console.ReadLine());
            Queue<int> plates = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));

            for (int i = 1; i <= waves; i++)
            {
                Stack<int> orcs = new Stack<int>(Console.ReadLine().Split(" ").Select(int.Parse));
                if (i % 3 == 0)
                {
                    string input = Console.ReadLine();
                    plates.Enqueue(int.Parse(input));
                }

                while (orcs.Count > 0 && plates.Count > 0)
                {
                    int plate = plates.Dequeue();
                    int orc = orcs.Pop();

                    if (plate > orc)
                    {
                        plate -= orc;
                        plates = new Queue<int>(plates.Prepend(plate));
                    }
                    else if (orc > plate)
                    {
                        orc -= plate;
                        orcs.Push(orc);
                    }

                    if (plates.Count == 0)
                    {
                        Console.WriteLine("The orcs successfully destroyed the Gondor's defense.");
                        if (orcs.Count > 0)
                        {
                            Console.WriteLine($"Orcs left: {string.Join(", ", orcs)}");
                        }
                        return;
                    }
                }

            }

            Console.WriteLine("The people successfully repulsed the orc's attack.");
            if (plates.Count > 0)
            {
                Console.WriteLine($"Plates left: {string.Join(", ", plates)}");
            }
        }
    }
}