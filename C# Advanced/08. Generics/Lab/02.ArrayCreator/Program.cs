using System;

namespace _02.ArrayCreator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] kirils = ArrayCreator.Create(5, "Kiril");
            Console.WriteLine(String.Join(' ', kirils));

            int[] ints = ArrayCreator.Create(5, 2);
            Console.WriteLine(String.Join(' ', ints));
        }
    }
}
