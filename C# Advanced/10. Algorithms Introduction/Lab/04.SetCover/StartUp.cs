namespace SetCover
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class StartUp
    {
        static void Main(string[] args)
        {
            int[] universe = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
            int n = int.Parse(Console.ReadLine());
            List<int[]> sets = new List<int[]>();

            for (int i = 0; i < n; i++)
            {
                int[] set = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
                sets.Add(set);
            }

            List<int[]> result = ChooseSets(sets, universe.ToList());

            Console.WriteLine($"Sets to take ({result.Count}):");
            foreach (var set in result)
            {
                Console.WriteLine($"{{ {String.Join(", ", set)} }}");
            }
        }

        public static List<int[]> ChooseSets(IList<int[]> sets, IList<int> universe)
        {
            List<int[]> selectedSets = new List<int[]>();

            while (universe.Count > 0)
            {
                int[] longestSet = sets.OrderByDescending(s => s.Count(x => universe.Contains(x))).FirstOrDefault();
                selectedSets.Add(longestSet);
                sets.Remove(longestSet);
                foreach (var item in longestSet)
                {
                    universe.Remove(item);
                }
            }

            return selectedSets;
        }
    }
}
