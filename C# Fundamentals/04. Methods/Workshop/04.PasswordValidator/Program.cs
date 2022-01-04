using System;

namespace _04.PasswordValidator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string password = Console.ReadLine().ToLower();
            ValidatePassword(password);
        }

        static void ValidatePassword(string password)
        {
            bool isValid = true;

            if (password.Length < 6 || password.Length > 10)
            {
                isValid = false;
                Console.WriteLine("Password must be between 6 and 10 characters");
            }

            if (!IsAlphaNumeric(password))
            {
                isValid = false;
                Console.WriteLine("Password must consist only of letters and digits");
            }

            if (!ContainsTwoDigits(password))
            {
                isValid = false;
                Console.WriteLine("Password must have at least 2 digits");
            }

            if (isValid)
            {
                Console.WriteLine("Password is valid");
            }
        }

        static bool IsAlphaNumeric(string password)
        {
            bool isTrue = true;

            for (int i = 0; i < password.Length; i++)
            {
                char c = password[i];
                if ((c < 'a' || c > 'z') && (c < '0' || c > '9'))
                {
                    isTrue = false;
                    break;
                };
            }
            return isTrue;
        }

        static bool ContainsTwoDigits(string password)
        {
            int digitCount = 0;
            for (int i = 0; i < password.Length; i++)
            {
                char c = password[i];
                if ((c >= '0') && (c <= '9'))
                {
                    digitCount++;
                }
            }
            return (digitCount > 2);
        }
    }
}
