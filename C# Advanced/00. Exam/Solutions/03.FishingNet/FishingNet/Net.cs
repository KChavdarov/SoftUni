using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace FishingNet
{
    public class Net
    {
        private readonly List<Fish> fish;

        public string Material { get; set; }
        public int Capacity { get; set; }
        public List<Fish> Fish { get => fish; }
        public int Count => fish.Count;

        public Net(string material, int capacity)
        {
            fish = new List<Fish>();
            Material = material;
            Capacity = capacity;
        }

        public string AddFish(Fish fish)
        {
            if (Count < Capacity)
            {
                if (!String.IsNullOrWhiteSpace(fish.FishType) && fish.Length > 0 && fish.Weight > 0)
                {
                    Fish.Add(fish);
                    return $"Successfully added {fish.FishType} to the fishing net.";
                }
                else
                {
                    return "Invalid fish.";
                }
            }
            else
            {
                return "Fishing net is full.";
            }
        }

        public bool ReleaseFish(double weight)
        {
            Fish fish = Fish.FirstOrDefault(a => a.Weight == weight);
            return Fish.Remove(fish);
        }

        public Fish GetFish(string fishType)
        {
            return Fish.FirstOrDefault(a => a.FishType == fishType);
        }

        public Fish GetBiggestFish()
        {
            return Fish.OrderByDescending(a => a.Length).FirstOrDefault();
        }

        public string Report()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine($"Into the {Material}:");

            foreach (Fish fish in Fish.OrderByDescending(a => a.Length))
            {
                result.AppendLine(fish.ToString().Trim());
            }

            return result.ToString().Trim();
        }
    }
}
