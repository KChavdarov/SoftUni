using System;

namespace _05.Login
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string username = Console.ReadLine();
            string password = "";

            for (int i = username.Length - 1; i >= 0; i--)
            {
                password += username[i];
            }

            string input = Console.ReadLine();
            int count = 1;

            while (count < 4)
            {
                if (input != password)
                {
                    count++;
                    Console.WriteLine("Incorrect password. Try again.");
                    input = Console.ReadLine();
                }
                else
                {
                    break;
                }
            }

            if (count < 4)
            {
                Console.WriteLine($"User {username} logged in.");
            }
            else
            {
                Console.WriteLine($"User {username} blocked!");
            }
        }
    }
}