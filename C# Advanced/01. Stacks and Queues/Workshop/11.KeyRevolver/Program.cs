using System;
using System.Collections.Generic;
using System.Linq;

namespace _11.KeyRevolver
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int bulletPrice = int.Parse(Console.ReadLine());
            int barrelSize = int.Parse(Console.ReadLine());
            Stack<int> bullets = new Stack<int>(Console.ReadLine().Split(' ').Select(int.Parse).ToArray());
            Queue<int> locks = new Queue<int>(Console.ReadLine().Split(' ').Select(int.Parse).ToArray());
            int intelValue = int.Parse(Console.ReadLine());
            int bulletsUsed = 0;

            while (locks.Count > 0)
            {
                for (int i = 0; i < barrelSize; i++)
                {
                    if (bullets.Count == 0)
                    {
                        Console.WriteLine($"Couldn't get through. Locks left: {locks.Count}");
                        return;
                    }

                    int bullet = bullets.Pop();
                    bulletsUsed++;
                    if (bullet <= locks.Peek())
                    {
                        Console.WriteLine("Bang!");
                        locks.Dequeue();
                        if (locks.Count == 0)
                        {
                            break;
                        }
                    }
                    else
                    {
                        Console.WriteLine("Ping!");
                    }
                }

                if (bullets.Count > 0)
                {
                    Console.WriteLine("Reloading!");
                }
            }

            int moneyEarned = intelValue - bulletsUsed * bulletPrice;

            Console.WriteLine($"{bullets.Count} bullets left. Earned ${moneyEarned}");
        }
    }
}
