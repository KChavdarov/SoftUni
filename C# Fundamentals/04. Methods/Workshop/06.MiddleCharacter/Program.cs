using System;

namespace _06.MiddleCharacter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine();

            if (str.Length % 2 == 0)
            {
                int minMiddle = (str.Length - 1) / 2;
                int maxMiddle = (str.Length - 1) / 2 + 1;
                Console.WriteLine($"{str[minMiddle]}{str[maxMiddle]}");
            }
            else
            {
                int middle = (str.Length - 1) / 2;
                Console.WriteLine(str[middle]);
            }

        }
    }
}
