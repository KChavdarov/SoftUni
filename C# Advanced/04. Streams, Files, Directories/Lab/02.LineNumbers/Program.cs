using System;
using System.IO;

namespace _02.LineNumbers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using StreamReader sr = new StreamReader("input.txt");
            using StreamWriter sw = new StreamWriter("output.txt");

            int count = 1;
            while (!sr.EndOfStream)
            {
                sw.WriteLine($"{count}. {sr.ReadLine()}");
                count++;
            }
        }
    }
}
