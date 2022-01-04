using System;

namespace _09.PalindromeIntegers
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine().ToLower();
            while (input != "end")
            {
                Console.WriteLine(IsPalindrome(input));
                input = Console.ReadLine().ToLower();
            }
        }

        static bool IsPalindrome(string str)
        {
            bool isPalindrome = true;

            for (int i = 0; i < str.Length; i++)
            {
                if (str[i] != str[str.Length - i - 1])
                {
                    isPalindrome = false;
                    break;
                }
            }
            return isPalindrome;
        }
    }
}
