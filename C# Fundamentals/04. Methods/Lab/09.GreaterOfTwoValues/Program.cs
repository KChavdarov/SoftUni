using System;

namespace _09.GreaterOfTwoValues
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine().ToLower();
            string a = Console.ReadLine();
            string b = Console.ReadLine();

            switch (type)
            {
                case "int":
                    Console.WriteLine(GetMax(int.Parse(a), int.Parse(b)));
                    break;
                case "char":
                    Console.WriteLine(GetMax(char.Parse(a), char.Parse(b)));
                    break;
                case "string":
                    Console.WriteLine(GetMax(a,b));
                    break;
            }
        }

        static int GetMax(int a, int b)
        {
            if (a > b)
            {
                return a;
            }
            else
            {
                return b;
            }
        }

        static char GetMax(char a, char b)
        {
            if (a > b)
            {
                return a;
            }
            else
            {
                return b;
            }
        }

        static string GetMax(string a, string b)
        {
            if (a.CompareTo(b) > 0)
            {
                return a;
            }
            else
            {
                return b;
            };
        }
    }
}
