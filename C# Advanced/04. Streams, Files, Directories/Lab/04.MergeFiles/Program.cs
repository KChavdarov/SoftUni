using System;
using System.IO;

namespace _04.MergeFiles
{
    internal class Program
    {
        static void Main(string[] args)
        {
            using StreamReader input1 = new StreamReader("input1.txt");
            using StreamReader input2 = new StreamReader("input2.txt");
            using StreamWriter result = new StreamWriter("result.txt");

            while (!input1.EndOfStream && !input2.EndOfStream)
            {
                if (!input1.EndOfStream)
                {
                    string line = input1.ReadLine();
                    result.WriteLine(line);
                }

                if (!input2.EndOfStream)
                {
                    string line = input2.ReadLine();
                    result.WriteLine(line);
                }
            }
        }
    }
}
