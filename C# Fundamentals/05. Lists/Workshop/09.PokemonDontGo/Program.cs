using System;
using System.Collections.Generic;
using System.Linq;

namespace _09.PokemonDontGo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> data = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int result = 0;

            while (data.Count > 0)
            {
                int index = int.Parse(Console.ReadLine());
                int removed;

                if (index < 0)
                {
                    int last = data[data.Count - 1];
                    removed = data[0];
                    data.RemoveAt(0);
                    data.Insert(0, last);
                }
                else if (index >= data.Count)
                {
                    int first = data[0];
                    removed = data[data.Count - 1];
                    data.RemoveAt(data.Count - 1);
                    data.Add(first);
                }
                else
                {
                    removed = data[index];
                    data.RemoveAt(index);
                }

                result += removed;
                IncreaseLowerDecreaseHigher(data, removed);
            }

            Console.WriteLine(result);
        }

        static List<int> IncreaseLowerDecreaseHigher(List<int> data, int delta)
        {
            for (int i = 0; i < data.Count; i++)
            {
                if (data[i] > delta)
                {
                    data[i] -= delta;
                }
                else
                {
                    data[i] += delta;
                }
            }
            return data;
        }
    }
}
