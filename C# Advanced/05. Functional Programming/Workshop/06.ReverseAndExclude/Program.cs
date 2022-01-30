using System;
using System.Linq;

namespace _06.ReverseAndExclude
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] nums = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int n = int.Parse(Console.ReadLine());
            Func<int, bool> isNotDivisibleByN = x => x % n != 0;
            Func<int[], int[]> reverse = nums =>
             {
                 int[] result = new int[nums.Length];
                 for (int i = nums.Length - 1; i >= 0; i--)
                 {
                     result[nums.Length - i - 1] = nums[i];
                 }
                 return result;
             };
            Action<int[]> printResult = nums => Console.WriteLine(String.Join(' ', reverse(nums.Where(isNotDivisibleByN).ToArray())));

            printResult(nums);
        }
    }
}
