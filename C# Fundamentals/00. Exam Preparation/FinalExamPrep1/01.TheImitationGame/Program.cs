using System;
using System.Text;

namespace _01.TheImitationGame
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string message = Console.ReadLine();
            string input = Console.ReadLine();
            StringBuilder sb = new StringBuilder(message);

            while (input != "Decode")
            {
                string[] tokens = input.Split('|');
                string command = tokens[0];

                switch (command)
                {
                    case "Move":
                        int count = int.Parse(tokens[1]);
                        for (int i = 0; i < count; i++)
                        {
                            var temp = sb[0];
                            sb.Remove(0, 1);
                            sb.Append(temp);
                        }
                        break;
                    case "Insert":
                        int index = int.Parse(tokens[1]);
                        string value = tokens[2];
                        sb.Insert(index, value);
                        break;
                    case "ChangeAll":
                        string substring = tokens[1];
                        string replacement = tokens[2];
                        sb.Replace(substring, replacement);
                        break;
                }

                input = Console.ReadLine();
            }

            Console.WriteLine($"The decrypted message is: {sb.ToString()}");
        }
    }
}
