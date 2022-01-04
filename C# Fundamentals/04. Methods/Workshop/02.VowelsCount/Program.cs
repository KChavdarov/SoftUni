using System;

namespace _02.VowelsCount
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string str = Console.ReadLine().ToLower();
            Console.WriteLine(GetVowelsCount(str));
        }

        static int GetVowelsCount(string str)
        {
            int count = 0;
            for (int i = 0; i < str.Length; i++)
            {

                if (isVowel(str[i]))
                {
                    count++;
                }
            }
            return count;
        }

        static bool isVowel(char a)
        {
            return a == 'a'
                || a == 'o'
                || a == 'u'
                || a == 'e'
                || a == 'i'
                || a == 'y';
        }
    }
}
