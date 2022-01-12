using System;
using System.Text;

namespace _07.StringExplosion
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string text = Console.ReadLine();
            StringBuilder result = new StringBuilder(text);

            for (int i = 0; i < result.Length; i++)
            {
                if (result[i] == '>')
                {
                    i++;
                    int power = int.Parse(result[i].ToString());

                    while (power > 0 && i < result.Length)
                    {
                        if (result[i] != '>')
                        {
                            result.Remove(i, 1);
                            power--;
                        }
                        else
                        {
                            i++;
                            power += int.Parse(result[i].ToString());
                        }
                    }

                    i--;
                }
            }

            Console.WriteLine(result.ToString());
        }
    }
}
