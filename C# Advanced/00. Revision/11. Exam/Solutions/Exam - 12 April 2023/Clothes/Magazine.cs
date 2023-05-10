using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ClothesMagazine
{
    public class Magazine
    {
        public Magazine(string type, int capacity)
        {
            Type = type;
            Capacity = capacity;
            Clothes = new List<Cloth>(capacity);
        }
        public string Type { get; set; }
        public int Capacity { get; set; }
        public List<Cloth> Clothes { get; set; }
        public void AddCloth(Cloth cloth)
        {
            if (Clothes.Count < Capacity)
            {
                Clothes.Add(cloth);
            }
        }
        public bool RemoveCloth(string color)
        {
            var cloth = Clothes.FirstOrDefault(x => x.Color == color);
            if (cloth != null)
            {
                return Clothes.Remove(cloth);
            }
            return false;
        }

        public Cloth GetSmallestCloth()
        {
            return Clothes.OrderBy(a => a.Size).FirstOrDefault();
        }

        public Cloth GetCloth(string color)
        {
            return Clothes.FirstOrDefault(a => a.Color == color);
        }

        public int GetClothCount()
        {
            return Clothes.Count;
        }

        public string Report()
        {
            var result = new StringBuilder();
            result.AppendLine($"{Type} magazine contains:");
            foreach (var cloth in Clothes.OrderBy(a => a.Size))
            {
                result.AppendLine(cloth.ToString());
            }
            return result.ToString().Trim();
        }
    }
}
