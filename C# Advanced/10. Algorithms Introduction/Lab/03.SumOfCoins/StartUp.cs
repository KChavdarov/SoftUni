namespace SumOfCoins
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class StartUp
    {
        public static void Main(string[] args)
        {
            int[] coins = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
            int result = int.Parse(Console.ReadLine());
            var totalCoins = ChooseCoins(coins, result);

            Console.WriteLine($"Number of coins to take: {totalCoins.Sum(a => a.Value)}");
            foreach (var entry in totalCoins)
            {
                Console.WriteLine($"{entry.Value} coin(s) with value {entry.Key}");
            }

        }

        public static Dictionary<int, int> ChooseCoins(IList<int> coins, int targetSum)
        {
            Stack<int> coinStack = new Stack<int>(coins.OrderBy(x => x));
            int currentSum = targetSum;
            Dictionary<int, int> result = new Dictionary<int, int>();

            while (coinStack.Count > 0 && currentSum > 0)
            {
                int coin = coinStack.Pop();
                result[coin] = currentSum / coin;
                currentSum -= result[coin] * coin;

                //while (currentSum >= coin)
                //{
                //    currentSum -= coin;
                //    if (!result.ContainsKey(coin))
                //    {
                //        result[coin] = 0;
                //    }
                //    result[coin]++;
                //}
            }

            if (currentSum != 0)
            {
                throw new InvalidOperationException();
            }

            return result;
        }
    }
}