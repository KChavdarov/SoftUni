using System;

namespace _04.ReverseArrayOfStrings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var arr = Console.ReadLine().Split(' ');

            for (int i = 0; i < arr.Length / 2; i++)
            {
                var temp = arr[i];
                arr[i] = arr[arr.Length - 1 - i];
                arr[arr.Length - 1 - i] = temp;
            }
            Console.WriteLine(String.Join(' ', arr));
        }
    }
}
