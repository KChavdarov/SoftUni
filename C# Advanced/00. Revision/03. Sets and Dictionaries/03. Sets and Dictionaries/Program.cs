SoftUniParty();
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