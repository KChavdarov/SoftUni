FilterByAge();

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