using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Lootbox
{
    internal class Program
    {
        static void Main(string[] args)
        {
            static void Main(string[] args)
            {
                int loot = 0;
                Queue<int> lootBoxA = new Queue<int>(Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
                Stack<int> lootBoxB = new Stack<int>(Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));

                while (true)
                {
                    int lootA = lootBoxA.Peek();
                    int lootB = lootBoxB.Pop();
                    int sum = lootA + lootB;

                    if (sum % 2 == 0)
                    {
                        loot += sum;
                        lootBoxA.Dequeue();
                    }
                    else
                    {
                        lootBoxA.Enqueue(lootB);
                    }

                    if (lootBoxA.Count == 0)
                    {
                        Console.WriteLine("First lootbox is empty");
                        break;
                    }
                    else if (lootBoxB.Count == 0)
                    {
                        Console.WriteLine("Second lootbox is empty");
                        break;
                    }
                }

                if (loot < 100)
                {
                    Console.WriteLine($"Your loot was poor... Value: {loot}");
                }
                else
                {
                    Console.WriteLine($"Your loot was epic! Value: {loot}");
                }
            }

        }
    }
}
