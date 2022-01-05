using System;
using System.Collections.Generic;
using System.Text;

namespace _08.AnonymousThreat
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string> data = new List<string>(Console.ReadLine().Split(' '));
            string input = Console.ReadLine().ToLower();

            while (input != "3:1")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];

                switch (command)
                {
                    case "merge":
                        {
                            int start = int.Parse(tokens[1]);
                            int end = int.Parse(tokens[2]);
                            data = Merge(data, start, end);
                        }
                        break;
                    case "divide":
                        {
                            int index = int.Parse(tokens[1]);
                            int partitions = int.Parse(tokens[2]);
                            data = Divide(data, index, partitions);
                        }
                        break;
                }

                input = Console.ReadLine().ToLower();
            }

            Console.WriteLine(String.Join(' ', data));
        }
        static List<string> Divide(List<string> data, int index, int partitions)
        {
            if (index >= 0 && index < data.Count)
            {
                string element = data[index];
                List<string> divided = new List<string>();
                int partitionLength = Math.Max(element.Length / partitions, 1);

                for (int partition = 0; partition < partitions; partition++)
                {
                    int start = partition * partitionLength;
                    if (partition == partitions - 1)
                    {
                        divided.Add(element.Substring(start));
                        break;
                    }
                    else
                    {
                        divided.Add(element.Substring(start, partitionLength));
                    }
                }

                data.RemoveAt(index);
                data.InsertRange(index, divided);
            }
            return data;
        }

        static List<string> Merge(List<string> data, int start, int end)
        {
            start = Math.Max(start, 0);
            end = Math.Min(end, data.Count - 1);

            if (start < data.Count - 1)
            {
                StringBuilder merged = new StringBuilder();
                for (int i = start; i <= end; i++)
                {
                    merged.Append(data[i]);
                }

                data.RemoveRange(start, (end - start + 1));
                data.Insert(start, merged.ToString());
            }
            return data;
        }
    }
}
