using System;
using System.Collections.Generic;

namespace _04.ListOfProducts
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<string> list = new List<string>();

            for (int i = 0; i < n; i++)
            {
                string item = Console.ReadLine();
                list.Add(item);
            }

            list = SortList(list);

            for (int i = 0; i < list.Count; i++)
            {
                Console.WriteLine($"{i + 1}.{list[i]}");
            }
        }

        static List<string> SortList(List<string> list)
        {
            for (int i = 0; i < list.Count; i++)
            {
                int min = i;
                for (int j = i + 1; j < list.Count; j++)
                {
                    if (list[j].CompareTo(list[min]) < 0)
                    {
                        min = j;
                    }
                }

                string temp = list[i];
                list[i] = list[min];
                list[min] = temp;
            }
            return list;
        }
    }
}
