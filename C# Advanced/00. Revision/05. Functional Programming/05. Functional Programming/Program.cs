TriFunction();

void SortEvenNumbers()
{
    string[] input = Console.ReadLine().Split(", ");
    Console.WriteLine(string.Join(", ", input.Select(int.Parse).Where(x => x % 2 == 0).OrderBy(x => x)));
}

void SumNumbers()
{
    int[] input = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
    Console.WriteLine(input.Count());
    Console.WriteLine(input.Sum());
}

void CountUpperCase()
{
    string input = Console.ReadLine();
    input.Split(" ").Where(a => char.IsUpper(a.First())).ToList().ForEach(a => Console.WriteLine(a));
}

void AddVAT()
{
    Console.ReadLine()
        .Split(", ")
        .Select(decimal.Parse)
        .Select(a => a * 1.2m)
        .ToList()
        .ForEach(a => Console.WriteLine($"{a:f2}"));
}

void FilterByAge()
{
    int n = int.Parse(Console.ReadLine());
    var people = new List<Person>();
    for (int i = 0; i < n; i++)
    {
        string[] tokens = Console.ReadLine().Split(", ");
        var person = new Person(tokens[0], int.Parse(tokens[1]));
        people.Add(person);
    }

    string condition = Console.ReadLine();
    int age = int.Parse(Console.ReadLine());
    Func<Person, bool> filter;
    switch (condition)
    {
        case "younger":
            filter = a => a.Age < age; break;
        case "older":
            filter = a => a.Age > age; break;
        default: filter = a => true; break;
    }

    var filteredPeople = people.Where(filter).ToList();

    string format = Console.ReadLine();
    Action<Person> print = null;
    switch (format)
    {
        case "name": print = a => Console.WriteLine(a.Name); break;
        case "age": print = a => Console.WriteLine(a.Age); break;
        case "name age": print = a => Console.WriteLine($"{a.Name} - {a.Age}"); break;
    }

    filteredPeople.ForEach(print);
}

void ActionPoint()
{
    Action<string> print = text => Console.WriteLine(text);
    Console.ReadLine()
        .Split(" ")
        .ToList()
        .ForEach(print);
}

void KnightsOfHonor()
{
    Action<string> print = text => Console.WriteLine($"Sir {text}");
    Console.ReadLine()
        .Split(" ")
        .ToList()
        .ForEach(print);
}

void CustomMinFunction()
{
    Func<IEnumerable<int>, int> getMin = numbers =>
    {
        int min = int.MaxValue;

        foreach (var num in numbers)
        {
            if (num < min)
            {
                min = num;
            }
        }

        return min;
    };

    var numbers = Console.ReadLine().Split().Select(int.Parse);
    Console.WriteLine(getMin(numbers));
}

void FindEvensOrOdds()
{
    int[] tokens = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    int start = tokens[0];
    int end = tokens[1];
    string type = Console.ReadLine();
    Func<int, bool> test = null;
    switch (type)
    {
        case "even": test = a => a % 2 == 0; break;
        case "odd": test = a => a % 2 == 1; break;
        default: test = a => true; break;
    }

    int[] numbers = Enumerable.Range(start, end - start + 1).Where(test).ToArray();
    Console.WriteLine(string.Join(" ", numbers));
}

void AppliedArithmetics()
{
    var numbers = Console.ReadLine().Split(" ").Select(int.Parse);
    string command = Console.ReadLine();
    while (command != "end")
    {
        if (command == "print")
        {
            Console.WriteLine(string.Join(" ", numbers));
        }
        else
        {
            numbers = numbers.Select(GetOperation(command));
        }

        command = Console.ReadLine();
    }

    Func<int, int> GetOperation(string command)
    {
        switch (command)
        {
            case "add": return a => a + 1;
            case "multiply": return a => a * 2;
            case "subtract": return a => a - 1;
            default: return a => a;
        }
    }

}

void ReverseAndExclude()
{
    var numbers = Console.ReadLine().Split(" ").Select(int.Parse);
    int divisor = int.Parse(Console.ReadLine());

    var result = numbers.Where(a => a % divisor != 0).Reverse();
    Console.WriteLine(string.Join(" ", result));

}

void PredicateForNames()
{
    int n = int.Parse(Console.ReadLine());
    var names = Console.ReadLine().Split();
    names.Where(a => a.Length <= n).ToList().ForEach(a => Console.WriteLine(a));
}

void ListOfPredicates()
{
    int n = int.Parse(Console.ReadLine());
    var numbers = Enumerable.Range(1, n);
    var predicates = Console.ReadLine()
        .Split(" ")
        .Select(int.Parse)
        .Distinct()
        .Where(a => a != 0)
        .Select(Func<int, bool> (a) => (int x) => x % a == 0);

    foreach (var predicate in predicates)
    {
        numbers = numbers.Where(predicate);
    }

    Console.WriteLine(string.Join(" ", numbers));

}

void PredicateParty()
{
    IEnumerable<string> people = Console.ReadLine().Split();

    string input = Console.ReadLine();
    while (input != "Party!")
    {
        string[] tokens = input.Split();
        string command = tokens[0];
        string filter = tokens[1];
        string criterion = tokens[2];

        if (command == "Remove")
        {
            people = people.Except(people.Where(GetPredicate(filter, criterion)));
        }
        else if (command == "Double")
        {
            people = people.Concat(people.Where(GetPredicate(filter, criterion)));
        }

        input = Console.ReadLine();
    }

    Console.WriteLine(people.Count() > 0 ? $"{string.Join(", ", people)} are going to the party!" : "Nobody is going to the party!");

    Func<string, bool> GetPredicate(string filter, string criterion)
    {
        switch (filter)
        {
            case "StartsWith": return a => a.StartsWith(criterion);
            case "EndsWith": return a => a.EndsWith(criterion);
            case "Length": return a => a.Length == int.Parse(criterion);
            default: return a => true;
        }
    }
}

void PRFM()
{
    var people = Console.ReadLine().Split(" ").ToList();
    var filters = new List<Filter>();

    string input = Console.ReadLine();
    while (input != "Print")
    {
        string[] tokens = input.Split(";");
        string command = tokens[0];
        string type = tokens[1];
        string criterion = tokens[2];

        switch (command)
        {
            case "Add filter":
                var filter = new Filter(type, criterion);
                filters.Add(filter);
                break;
            case "Remove filter":
                filter = filters.Find(a => a.Type == type && a.Criterion == criterion);
                filters.Remove(filter);
                break;
        }

        input = Console.ReadLine();
    }

    filters.ForEach(a => people.RemoveAll(a.Predicate));
    Console.WriteLine(string.Join(" ", people));
}

void TriFunction()
{
    int n = int.Parse(Console.ReadLine());
    var names = Console.ReadLine().Split().ToList();

    Predicate<string> matcher = a => a.ToCharArray().Select(a => (int)a).Sum() >= n;

    Console.WriteLine(FindMatch(names, matcher));

    string FindMatch(List<string> items, Predicate<string> matcher)
    {
        return items.Find(matcher);
    }
}

public class Filter
{
    public Filter(string type, string criterion)
    {
        Type = type;
        Criterion = criterion;
        AssignPredicate();
    }
    public string Type { get; private set; }
    public string Criterion { get; private set; }
    public Predicate<string> Predicate { get; private set; }

    private void AssignPredicate()
    {
        switch (Type)
        {
            case "Starts with":
                Predicate = x => x.StartsWith(Criterion); break;
            case "Ends with":
                Predicate = x => x.EndsWith(Criterion); break;
            case "Length":
                Predicate = x => x.Length == int.Parse(Criterion); break;
            case "Contains":
                Predicate = x => x.Contains(Criterion); break;
            default:
                Predicate = x => true; break;
        }
    }
}
public class Person
{
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
    public string Name { get; set; }
    public int Age { get; set; }
}