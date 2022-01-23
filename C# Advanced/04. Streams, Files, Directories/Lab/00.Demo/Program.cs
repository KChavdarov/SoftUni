using System;
using System.IO;
using System.Text;

namespace _00.Demo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //using StreamWriter demo = new StreamWriter("demo.txt", false, Encoding.Unicode);
            //for (int i = 1; i <= 10; i++)
            //{
            //    demo.WriteLine(i);
            //}

            //using FileStream fileWriter = new FileStream("demo.txt", FileMode.OpenOrCreate, FileAccess.Write);
            //if (fileWriter.CanWrite)
            //{
            //    byte[] buffer = new byte[100];
            //    buffer[0] = (byte)'K';
            //    buffer[1] = (byte)'i';
            //    buffer[2] = (byte)'r';
            //    buffer[3] = (byte)'o';
            //}

            //fileWriter.Write(buffer, 0, buffer.Length);

            using FileStream fileReader = new FileStream("demo.txt", FileMode.OpenOrCreate, FileAccess.Read);
            byte[] buffer = new byte[100];
            //fileReader.Seek(2, SeekOrigin.Begin);
            fileReader.Seek(-2, SeekOrigin.End);
            fileReader.Read(buffer, 0, buffer.Length);
        }
    }
}
