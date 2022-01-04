using System;
using System.Linq;

namespace _11.ArrayManipulator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            string input = Console.ReadLine().ToLower();

            while (input != "end")
            {
                string[] tokens = input.Split(' ');
                string command = tokens[0];

                switch (command)
                {
                    case "exchange":
                        int index = int.Parse(tokens[1]);
                        numbers = ExchangeNumbers(numbers, index);
                        break;
                    case "max":
                        {
                            string type = tokens[1];
                            Max(numbers, type);
                        }
                        break;
                    case "min":
                        {
                            string type = tokens[1];
                            Min(numbers, type);
                        }
                        break;
                    case "first":
                        {
                            int count = int.Parse(tokens[1]);
                            string type = tokens[2];
                            First(numbers, count, type);
                        }
                        break;
                    case "last":
                        {
                            int count = int.Parse(tokens[1]);
                            string type = tokens[2];
                            Last(numbers, count, type);
                        }
                        break;
                }

                input = Console.ReadLine().ToLower();
            }

            Console.WriteLine($"[{string.Join(", ", numbers)}]");
        }

        static int[] ExchangeNumbers(int[] numbers, int index)
        {
            if (index < 0 || index > numbers.Length - 1)
            {
                Console.WriteLine("Invalid index");
                return numbers;
            }

            int[] result = new int[numbers.Length];

            int currentIndex = 0;
            for (int i = index + 1; i < result.Length; i++)
            {
                result[currentIndex] = numbers[i];
                currentIndex++;
            }

            for (int i = 0; i <= index; i++)
            {
                result[currentIndex] = numbers[i];
                currentIndex++;
            }
            return result;
        }

        static void Max(int[] numbers, string type)
        {
            int remainder = 0;
            if (type == "odd")
            {
                remainder = 1;
            }

            int maxIndex = -1;
            int maxValue = int.MinValue;

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 2 == remainder)
                {
                    if (numbers[i] >= maxValue)
                    {
                        maxValue = numbers[i];
                        maxIndex = i;
                    }
                }
            }
            if (maxIndex == -1)
            {
                Console.WriteLine("No matches");
            }
            else
            {
                Console.WriteLine(maxIndex);
            }
        }

        static void Min(int[] numbers, string type)
        {
            int remainder = 0;
            if (type == "odd")
            {
                remainder = 1;
            }

            int maxIndex = -1;
            int minValue = int.MaxValue;

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 2 == remainder)
                {
                    if (numbers[i] <= minValue)
                    {
                        minValue = numbers[i];
                        maxIndex = i;
                    }
                }
            }
            if (maxIndex == -1)
            {
                Console.WriteLine("No matches");
            }
            else
            {
                Console.WriteLine(maxIndex);
            }
        }

        static void First(int[] numbers, int count, string type)
        {
            if (count > numbers.Length || count < 1)
            {
                Console.WriteLine("Invalid count");
                return;
            }

            int remainder = 0;
            if (type == "odd")
            {
                remainder = 1;
            }

            int[] result = new int[0];

            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 2 == remainder)
                {
                    result = result.Append(numbers[i]).ToArray();
                }

                if (result.Length == count)
                {
                    break;
                }
            }

            Console.WriteLine($"[{string.Join(", ", result)}]");
        }

        static void Last(int[] numbers, int count, string type)
        {
            if (count > numbers.Length || count < 1)
            {
                Console.WriteLine("Invalid count");
                return;
            }

            int remainder = 0;
            if (type == "odd")
            {
                remainder = 1;
            }

            int[] result = new int[0];

            for (int i = numbers.Length - 1; i >= 0; i--)
            {
                if (numbers[i] % 2 == remainder)
                {
                    result = result.Append(numbers[i]).ToArray();
                }

                if (result.Length == count)
                {
                    break;
                }
            }

            Console.WriteLine($"[{string.Join(", ", result.Reverse())}]");
        }
    }
}
