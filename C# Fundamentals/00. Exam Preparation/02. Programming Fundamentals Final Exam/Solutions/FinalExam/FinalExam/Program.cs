using System.Text.RegularExpressions;

PlantDiscovery();

void WorldTour()
{
    string destinations = Console.ReadLine();

    string input = Console.ReadLine();

    while (input != "Travel")
    {
        string[] tokens = input.Split(":");
        string action = tokens[0];

        switch (action)
        {
            case "Add Stop":
                int index = int.Parse(tokens[1]);
                string stop = tokens[2];
                if (IsValidIndex(index))
                {
                    destinations = destinations.Insert(index, stop);
                }
                break;
            case "Remove Stop":
                int start = int.Parse(tokens[1]);
                int end = int.Parse(tokens[2]);

                if (IsValidIndex(start) && IsValidIndex(end))
                {
                    destinations = destinations.Remove(start, end - start + 1);
                }
                break;
            case "Switch":
                string value = tokens[1];
                string replacement = tokens[2];
                if (destinations.Contains(value))
                {
                    destinations = destinations.Replace(value, replacement);
                }
                break;
        }

        Console.WriteLine(destinations);
        input = Console.ReadLine();
    }

    Console.WriteLine($"Ready for world tour! Planned stops: {destinations}");

    bool IsValidIndex(int index)
    {
        return index >= 0 && index < destinations.Length;
    }
}

void DestinationMapper()
{
    string input = Console.ReadLine();
    var pattern = new Regex(@"([=\/])(?<name>[A-Z][A-Za-z]{2,})\1");
    var destinations = pattern.Matches(input).Select(a => a.Groups["name"].Value).ToList();

    Console.WriteLine($"Destinations: {string.Join(", ", destinations)}");
    Console.WriteLine($"Travel Points: {destinations.Sum(a => a.Length)}");
}

void PlantDiscovery()
{
    int count = int.Parse(Console.ReadLine());
    var plants = new Dictionary<string, Plant>();

    for (int i = 0; i < count; i++)
    {
        string[] tokens = Console.ReadLine().Split("<->");
        string name = tokens[0];
        int rarity = int.Parse(tokens[1]);

        if (plants.ContainsKey(name))
        {
            plants[name].Update(rarity);
        }
        else
        {
            var plant = new Plant(name, rarity);
            plants.Add(name, plant);
        }
    }

    string input = Console.ReadLine();

    while (input != "Exhibition")
    {
        string[] tokens = input.Split(new string[] { ": ", " - " }, StringSplitOptions.RemoveEmptyEntries);
        string action = tokens[0];
        string name = tokens[1];

        if (!plants.ContainsKey(name))
        {
            Console.WriteLine("error");
        }
        else
        {
            var plant = plants[name];

            switch (action)
            {
                case "Rate":
                    int rating = int.Parse(tokens[2]);
                    plant.Rate(rating);
                    break;
                case "Update":
                    int rarity = int.Parse(tokens[2]);
                    plant.Update(rarity);
                    break;
                case "Reset":
                    plant.Reset();
                    break;
            }
        }

        input = Console.ReadLine();
    }

    Console.WriteLine("Plants for the exhibition:");
    Console.WriteLine(string.Join("\n", plants.Values.ToList().Select(a => a.ToString())));
}

class Plant
{
    public Plant(string name, int rairty)
    {
        Name = name;
        Rarity = rairty;
        Ratings = new List<int>();
    }
    public string Name { get; private set; }
    public int Rarity { get; private set; }
    public List<int> Ratings { get; }

    public void Rate(int rate)
    {
        Ratings.Add(rate);
    }

    public void Update(int rarity)
    {
        Rarity = rarity;
    }

    public void Reset()
    {
        Ratings.Clear();
    }

    public override string ToString()
    {
        return $"- {Name}; Rarity: {Rarity}; Rating: {(Ratings.Count > 0 ? Ratings.Average() : 0):f2}";
    }
}