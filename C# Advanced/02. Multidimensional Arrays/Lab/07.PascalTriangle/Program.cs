using System;

namespace _07.PascalTriangle
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int[][] triangle = new int[n][];

            for (int i = 0; i < triangle.Length; i++)
            {
                triangle[i] = new int[i + 1];
                if (i == 0)
                {
                    triangle[0][0] = 1;
                    continue;
                }

                for (int j = 0; j < triangle[i].Length; j++)
                {
                    int prev = j - 1;

                    if (prev < 0 || j == triangle[i].Length - 1)
                    {
                        triangle[i][j] = 1;
                        continue;
                    }
                    else
                    {
                        triangle[i][j] = triangle[i - 1][prev] + triangle[i - 1][j];
                    }
                }
            }

            foreach (var line in triangle)
            {
                Console.WriteLine(String.Join(' ', line));
            }
        }
    }
}
