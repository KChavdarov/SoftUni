using System;
using System.IO;

namespace _01.OddLines
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using StreamReader sr = new StreamReader("input.txt");
            using StreamWriter sw = new StreamWriter("output.txt");

            int lineNumber = 0;
            while (!sr.EndOfStream)
            {
                string line = sr.ReadLine();
                if (lineNumber % 2 == 0)
                {
                    sw.WriteLine(line);
                }

                lineNumber++;
            }
        }
    }
}
