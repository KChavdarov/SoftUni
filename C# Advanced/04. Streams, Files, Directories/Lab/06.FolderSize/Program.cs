using System;
using System.IO;

namespace _06.FolderSize
{
    internal class Program
    {
        static void Main(string[] args)
        {
            long size = GetFileSize("TestFolder");
            Console.WriteLine(size);
        }

        static long GetFileSize(string name)
        {
            long size = 0;
            string[] folders = Directory.GetDirectories(name);
            foreach (var folder in folders)
            {
                size += GetFileSize(folder);
            }

            foreach (var file in Directory.GetFiles(name))
            {
                size += new FileInfo(file).Length;
            }
            return size;
        }
    }
}
