using System;
using System.Collections.Generic;
using System.IO;

namespace _05.SliceAFile
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Queue<string> lines = new Queue<string>();
            //using StreamReader text = new StreamReader("sample.txt");

            //while (!text.EndOfStream)
            //{
            //    lines.Enqueue(text.ReadLine());
            //}

            //int count = (int)Math.Ceiling(lines.Count / 4.0);
            //int lastCount = lines.Count - 3 * count;

            //for (int i = 1; i <= 4; i++)
            //{
            //    int currentCount = i == 4 ? lastCount : count;

            //    using StreamWriter result = new StreamWriter($"Part-{i}.txt");

            //    for (int j = 0; j < currentCount; j++)
            //    {
            //        result.WriteLine(lines.Dequeue());
            //    }
            //}

            using FileStream fileReader = new FileStream("sample.txt", FileMode.OpenOrCreate);
            //byte[] data = new byte[fileReader.Length];

            int count = (int)Math.Ceiling(data.Length / 4.0);
            int lastCount = data.Length - 3 * count;

            for (int i = 1; i <= 4; i++)
            {
                int currentCount = i == 4 ? lastCount : count;
                byte[] buffer = new byte[currentCount];
                fileReader.Read(buffer, 0, currentCount);

                using FileStream fileWriter = new FileStream($"Part-{i}.txt", FileMode.OpenOrCreate);
                fileWriter.Write(buffer);
            }
        }
    }
}
