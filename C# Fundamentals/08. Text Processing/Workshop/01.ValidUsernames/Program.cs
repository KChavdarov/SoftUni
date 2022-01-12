using System;
using System.Collections.Generic;

namespace _01.ValidUsernames
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] usernames = Console.ReadLine().Split(", ");
            List<string> validNames = new List<string>();

            foreach (string name in usernames)
            {
                if (name.Length < 3 || name.Length > 16)
                {
                    continue;
                }

                bool isValidName = true;

                foreach (var letter in name)
                {
                    if (char.IsLetterOrDigit(letter))
                    {
                        continue;
                    }
                    else if (letter == '-')
                    {
                        continue;
                    }
                    else if (letter == '_')
                    {
                        continue;
                    }

                    isValidName = false;
                    break;
                }

                if (isValidName)
                {
                    validNames.Add(name);
                }
            }

            Console.WriteLine(String.Join("\n", validNames));
        }
    }
}
