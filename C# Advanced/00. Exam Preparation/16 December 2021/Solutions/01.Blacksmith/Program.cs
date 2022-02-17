using System;
using System.Collections.Generic;
using System.Linq;

namespace _01.Blacksmith
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Queue<int> steel = new Queue<int>(Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Stack<int> carbon = new Stack<int>(Console.ReadLine().Split(' ', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse));
            Dictionary<int, string> swords = new Dictionary<int, string>
            {
                { 70, "Gladius"},
                { 80, "Shamshir" },
                { 90, "Katana" },
                { 110, "Sabre" },
                { 150, "Broadsword" },
            };
            SortedDictionary<string, int> crafted = new SortedDictionary<string, int>();

            while (steel.Count > 0 && carbon.Count > 0)
            {
                int currentSteel = steel.Dequeue();
                int currentCarbon = carbon.Pop();
                int sum = currentCarbon + currentSteel;

                if (swords.ContainsKey(sum))
                {
                    string name = swords[sum];
                    if (!crafted.ContainsKey(name))
                    {
                        crafted[name] = 0;
                    }
                    crafted[name]++;
                }
                else
                {
                    carbon.Push(currentCarbon + 5);
                }
            }

            if (crafted.Count > 0)
            {
                Console.WriteLine($"You have forged {crafted.Sum(a => a.Value)} swords.");
            }
            else
            {
                Console.WriteLine("You did not have enough resources to forge a sword.");
            }

            Console.WriteLine($"Steel left: {(steel.Count > 0 ? String.Join(", ", steel) : "none")}");
            Console.WriteLine($"Carbon left: {(carbon.Count > 0 ? String.Join(", ", carbon) : "none")}");

            foreach (var entry in crafted)
            {
                Console.WriteLine($"{entry.Key}: {entry.Value}");
            }
        }
    }
}
