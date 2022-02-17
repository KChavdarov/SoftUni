using System.Text;

namespace Drones
{
    public class Drone
    {
        public Drone(string name, string brand, int range)
        {
            Available = true;
            Name = name;
            Brand = brand;
            Range = range;
        }

        public string Name { get; set; }
        public string Brand { get; set; }
        public int Range { get; set; }
        public bool Available { get; set; }

        public void Fly()
        {
            Available = false;
        }
        public override string ToString()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine($"Drone: {Name}");
            result.AppendLine($"Manufactured by: {Brand}");
            result.AppendLine($"Range: {Range} kilometers");
            return result.ToString().Trim();
        }
    }
}
