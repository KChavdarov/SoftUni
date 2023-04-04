using System;
using System.Linq;

namespace _09.CaminoFactory
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int length = int.Parse(Console.ReadLine());
            string input = Console.ReadLine();
            int[] bestDna = input.Split('!', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            int bestIndex = -1;
            int bestCount = -1;
            int bestSum = 0;



            while (input != "Clone them!")
            {
                int[] dna = Console.ReadLine().Split('!', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
                int currentIndex = 0;
                int currentCount = 0;
                int sum = dna.Sum();

                for (int i = currentIndex; i < dna.Length; i++)
                {
                    if (dna[i] == 1)
                    {
                        currentIndex = i;
                        currentCount++;
                        for (int j = i + 1; j < dna.Length; j++)
                        {
                            if (dna[j] == 1)
                            {
                                currentCount++;
                            }
                            else
                            {
                                break;
                            }
                        }

                        if (currentCount > bestCount)
                        {
                            bestIndex = currentIndex
                            bestCount = currentCount;
                            bestDna = dna;
                        }
                    }
                }

                input = Console.ReadLine();
            }


            //int length = int.Parse(Console.ReadLine());
            //string input = Console.ReadLine();
            //int[] bestDna = input.Split('!', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            //int bestIndex = -1;
            //int bestCount = -1;
            //int bestSum = 0;
            //int bestSample = 0;
            //int sample = 0;

            //while (input != "Clone them!")
            //{
            //    sample++;
            //    int[] dna = input.Split('!', StringSplitOptions.RemoveEmptyEntries).Select(int.Parse).ToArray();
            //    int sum = dna.Sum();
            //    int count = 0;
            //    int startIndex = 0;
            //    int endIndex = 0;

            //    int currentCount = 0;
            //    for (int i = 0; i < dna.Length; i++)
            //    {
            //        if (dna[i] == 1)
            //        {
            //            currentCount++;

            //            if (currentCount > count)
            //            {
            //                count = currentCount;
            //                endIndex = i;
            //            }
            //        }
            //        else
            //        {
            //            currentCount = 0;
            //        }
            //    }

            //    startIndex = endIndex - count + 1;

            //    bool isBetter = (count > bestCount)
            //        || ((count == bestCount) && (startIndex < bestIndex))
            //        || ((count == bestCount) && (startIndex == bestIndex) && (sum > bestSum));

            //    if (isBetter)
            //    {
            //        bestDna = dna;
            //        bestCount = count;
            //        bestIndex = startIndex;
            //        bestSum = sum;
            //        bestSample = sample;
            //    }

            //    input = Console.ReadLine();
            //}

            //Console.WriteLine($"Best DNA sample {bestSample} with sum: {bestSum}.");
            //Console.WriteLine(String.Join(' ', bestDna));
        }
    }
}
