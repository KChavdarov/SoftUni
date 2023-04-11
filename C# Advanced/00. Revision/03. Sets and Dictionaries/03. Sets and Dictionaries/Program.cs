Ranking();
void CountUniqueValuesInArray()
{
    var map = new Dictionary<double, int>();
    var numbers = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();

    foreach (var num in numbers)
    {
        if (!map.ContainsKey(num))
        {
            map[num] = 0;
        }

        map[num]++;
    }

    foreach ((var number, var count) in map)
    {
        Console.WriteLine($"{number} - {count} times");
    }
}

void AverageStudentGrades()
{
    var map = new Dictionary<string, List<double>>();
    int n = int.Parse(Console.ReadLine());
    for (int i = 0; i < n; i++)
    {
        string[] tokens = Console.ReadLine().Split(" ");
        string name = tokens[0];
        double grade = double.Parse(tokens[1]);

        if (!map.ContainsKey(name))
        {
            map[name] = new List<double>();
        }

        map[name].Add(grade);
    }

    foreach ((var name, var grades) in map)
    {
        Console.WriteLine($"{name} -> {string.Join(", ", grades.Select(a => a.ToString("f2")))} (avg. {grades.Average():f2})");
    }
}

void ProductShop()
{
    var products = new SortedDictionary<string, Dictionary<string, decimal>>();
    string input = Console.ReadLine();

    while (input != "Revision")
    {
        string[] tokens = input.Split(", ");
        string shop = tokens[0];
        string product = tokens[1];
        decimal price = decimal.Parse(tokens[2]);
        if (!products.ContainsKey(shop))
        {
            products[shop] = new Dictionary<string, decimal>();
        }

        products[shop][product] = price;

        input = Console.ReadLine();
    }

    foreach ((var shop, var productData) in products)
    {
        Console.WriteLine($"{shop}->");
        foreach ((var name, var price) in productData)
        {
            Console.WriteLine($"Product: {name}, Price: {price}");
        }
    }
}

void CitiesContinentsCountries()
{
    var cities = new Dictionary<string, Dictionary<string, List<string>>>();
    int n = int.Parse(Console.ReadLine());

    for (int i = 0; i < n; i++)
    {
        string[] tokens = Console.ReadLine().Split(" ");
        string continent = tokens[0];
        string country = tokens[1];
        string city = tokens[2];

        if (!cities.ContainsKey(continent))
        {
            cities[continent] = new Dictionary<string, List<string>>();
        }

        if (!cities[continent].ContainsKey(country))
        {
            cities[continent][country] = new List<string>();
        }

        cities[continent][country].Add(city);
    }

    foreach ((var continent, var data) in cities)
    {
        Console.WriteLine($"{continent}:");
        foreach ((var country, var cityList) in data)
        {
            Console.WriteLine($"{country} -> {string.Join(", ", cityList)}");
        }
    }
}

void RecordUniqueNames()
{
    var names = new HashSet<string>();
    int n = int.Parse(Console.ReadLine());

    for (int i = 0; i < n; i++)
    {
        names.Add(Console.ReadLine());
    }

    foreach (var name in names)
    {
        Console.WriteLine(name);
    }
}

void ParkingLot()
{
    var cars = new HashSet<string>();
    string input = Console.ReadLine();

    while (input != "END")
    {
        string[] tokens = Console.ReadLine().Split(", ");
        string command = tokens[0];
        string car = tokens[1];

        if (command == "IN")
        {
            cars.Add(car);
        }
        else if (command == "OUT")
        {
            if (cars.Contains(car))
            {
                cars.Remove(car);
            }
        }
        input = Console.ReadLine();
    }

    if (cars.Count > 0)
    {

        foreach (var car in cars)
        {
            Console.WriteLine(car);
        }
    }
    else
    {
        Console.WriteLine("Parking Lot is Empty");
    }
}

void SoftUniParty()
{
    var reservations = new Dictionary<string, HashSet<string>>()
    {
        { "VIP", new HashSet<string>()},
        { "Regular", new HashSet<string>()}
    };

    string input = Console.ReadLine();
    while (input != "PARTY")
    {
        AddReservation(input);
        input = Console.ReadLine();
    }

    while (input != "END")
    {
        RemoveReservation(input);
        input = Console.ReadLine();
    }

    PrintResult();

    void AddReservation(string reservation)
    {
        if (char.IsDigit(reservation[0]))
        {
            reservations["VIP"].Add(reservation);
        }
        else
        {
            reservations["Regular"].Add(reservation);
        }
    }


    void RemoveReservation(string reservation)
    {
        if (char.IsDigit(reservation[0]))
        {
            if (reservations["VIP"].Contains(reservation))
            {
                reservations["VIP"].Remove(reservation);
            }
        }
        else
        {
            if (reservations["Regular"].Contains(reservation))
            {
                reservations["Regular"].Remove(reservation);
            }
        }
    }

    void PrintResult()
    {
        Console.WriteLine(reservations["VIP"].Count + reservations["Regular"].Count);
        Console.WriteLine(string.Join("\n", reservations["VIP"]));
        Console.WriteLine(string.Join("\n", reservations["Regular"]));
    }
}

void SetsOfElements()
{
    int[] dimension = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    int n = dimension[0];
    int m = dimension[1];
    var a = new HashSet<int>();
    var b = new HashSet<int>();

    for (int i = 0; i < n; i++)
    {
        a.Add(int.Parse(Console.ReadLine()));
    }

    for (int i = 0; i < m; i++)
    {
        b.Add(int.Parse(Console.ReadLine()));
    }

    Console.WriteLine(string.Join(" ", a.Intersect(b)));
}

void periodicTable()
{
    var elements = new SortedSet<string>();
    int n = int.Parse(Console.ReadLine());

    for (int i = 0; i < n; i++)
    {
        string[] tokens = Console.ReadLine().Split(" ");
        foreach (var element in tokens)
        {
            elements.Add(element.Trim());
        }
    }

    Console.WriteLine(string.Join(" ", elements));
}

void EvenTimes()
{
    var counts = new Dictionary<int, int>();
    int n = int.Parse(Console.ReadLine());
    for (int i = 0; i < n; i++)
    {
        int x = int.Parse(Console.ReadLine());

        if (!counts.ContainsKey(x))
        {
            counts[x] = 0;
        }

        counts[x]++;
    }

    Console.WriteLine(counts.FirstOrDefault(a => a.Value % 2 == 0).Value);
}

void CountSymbols()
{
    var counts = new SortedDictionary<char, int>();
    string text = Console.ReadLine();

    foreach (var @char in text)
    {
        if (!counts.ContainsKey(@char))
        {
            counts[@char] = 0;
        }

        counts[@char]++;
    }

    foreach ((var @char, var count) in counts)
    {
        Console.WriteLine($"{@char}: {count}time/s");
    }
}

void Wardrobe()
{
    var wardrobe = new Dictionary<string, Dictionary<string, int>>();
    int n = int.Parse(Console.ReadLine());

    for (int i = 0; i < n; i++)
    {
        string[] input = Console.ReadLine().Split(" -> ");
        string color = input[0];
        string[] clothes = input[1].Split(",");

        if (!wardrobe.ContainsKey(color))
        {
            wardrobe[color] = new Dictionary<string, int>();
        }

        foreach (var item in clothes)
        {
            if (!wardrobe[color].ContainsKey(item))
            {
                wardrobe[color][item] = 0;
            }
            wardrobe[color][item]++;
        }
    }

    string[] queryItem = Console.ReadLine().Split(" ");

    foreach ((var color, var clothes) in wardrobe)
    {
        Console.WriteLine($"{color} clothes:");
        foreach ((var item, var count) in clothes)
        {
            Console.WriteLine($"* {item} - {count}" + (queryItem[0] == color && queryItem[1] == item ? " (found!)" : string.Empty));
        }
    }
}

void TheVlogger()
{
    var vloggers = new Dictionary<string, Vlogger>();
    string input = Console.ReadLine();

    while (input != "Statistics")
    {
        string[] tokens = input.Split(" ");
        string name = tokens[0];
        string action = tokens[1];

        switch (action)
        {
            case "joined":
                if (!vloggers.ContainsKey(name))
                {
                    vloggers.Add(name, new Vlogger(name));
                }
                break;
            case "followed":
                var vlogger = vloggers.GetValueOrDefault(name);
                var target = vloggers.GetValueOrDefault(tokens[2]);

                if (vlogger != null && target != null)
                {
                    vlogger.Follow(target);
                }

                break;
        }

        input = Console.ReadLine();
    }

    Statistics();

    void Statistics()
    {
        int rank = 1;
        Console.WriteLine($"The V-Logger has a total of {vloggers.Count} vloggers in its logs.");
        foreach (var vlogger in vloggers.OrderByDescending(x => x.Value.Followers.Count).ThenBy(x => x.Value.Following.Count).ToDictionary(x => x.Key, x => x.Value).Values)
        {
            Console.WriteLine($"{rank++}. {vlogger.Name} : {vlogger.Followers.Count} followers, {vlogger.Following.Count} following");
            foreach (var follower in vlogger.Followers)
            {
                Console.WriteLine($"* {follower.Name}");
            }
        }


    }
}

void Ranking()
{
    var contests = new Dictionary<string, string>();
    string input = Console.ReadLine();
    while (input != "end of contests")
    {
        string[] tokens = input.Split(":");
        contests[tokens[0]] = tokens[1];
        input = Console.ReadLine();
    }

    var students = new SortedDictionary<string, Dictionary<string, int>>();
    input = Console.ReadLine();
    while (input != "end of submissions")
    {
        string[] tokens = input.Split("=>");
        string contest = tokens[0];
        string password = tokens[1];
        string student = tokens[2];
        int points = int.Parse(tokens[3]);

        if (contests.ContainsKey(contest) && contests[contest] == password)
        {
            if (!students.ContainsKey(student))
            {
                students[student] = new Dictionary<string, int>();
            }

            if (!students[student].ContainsKey(contest))
            {
                students[student][contest] = points;
            }
            else
            {
                students[student][contest] = Math.Max(students[student][contest], points);
            }
        }

        input = Console.ReadLine();
    }

    var best = students.OrderByDescending(a => a.Value.Values.Sum()).FirstOrDefault();
    Console.WriteLine($"Best candidate is {best.Key} with total {best.Value.Values.Sum()} points.");
    Console.WriteLine("Ranking:");
    foreach ((var student, var scores) in students)
    {
        Console.WriteLine(student);
        foreach (var contest in scores.OrderByDescending(x=>x.Value))
        {
            Console.WriteLine($"# {contest.Key} -> {contest.Value}");
        }
    }
}
class Vlogger
{
    public Vlogger(string name)
    {
        Name = name;
        Followers = new SortedSet<Vlogger>(Comparer<Vlogger>.Create((x, y) => x.Name.CompareTo(y.Name)));
        Following = new HashSet<Vlogger>();
    }
    public string Name { get; set; }
    public SortedSet<Vlogger> Followers { get; set; }
    public HashSet<Vlogger> Following { get; set; }
    public void Follow(Vlogger vlogger)
    {
        if (vlogger != this)
        {
            Following.Add(vlogger);
            vlogger.Followers.Add(this);
        }
    }
}