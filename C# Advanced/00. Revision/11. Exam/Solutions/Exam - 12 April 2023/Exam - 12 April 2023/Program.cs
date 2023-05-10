RubberDuckDebuggers();
void RubberDuckDebuggers()
{
    var duckies = new Dictionary<string, int>()
                {
                    {"Darth Vader Ducky", 0},
                    {"Thor Ducky", 0},
                    {"Big Blue Rubber Ducky", 0},
                    { "Small Yellow Rubber Ducky", 0},
                };

    var programmerTimes = new Queue<int>(Console.ReadLine()
        .Split(" ")
        .Select(int.Parse));
    var tasks = new Stack<int>(Console.ReadLine()
        .Split(" ")
        .Select(int.Parse));

    while (programmerTimes.Count > 0 && tasks.Count > 0)
    {
        int time = programmerTimes.Dequeue();
        int task = tasks.Pop();
        if (!assignDuck(time * task))
        {
            tasks.Push(task - 2);
            programmerTimes.Enqueue(time);
        }
    }

    Console.WriteLine("Congratulations, all tasks have been completed! Rubber ducks rewarded:");
    foreach (var ducky in duckies)
    {
        Console.WriteLine($"{ducky.Key}: {ducky.Value}");
    }

    bool assignDuck(int value)
    {
        if (value >= 0 && value <= 60) { duckies["Darth Vader Ducky"]++; }
        else if (value >= 61 && value <= 120) { duckies["Thor Ducky"]++; }
        else if (value >= 121 && value <= 180) { duckies["Big Blue Rubber Ducky"]++; }
        else if (value >= 181 && value <= 240) { duckies["Small Yellow Rubber Ducky"]++; }
        else { return false; }
        return true;
    }
}

TheSquirrel();
void TheSquirrel()
{
    int hazelnuts = 0;
    int size = int.Parse(Console.ReadLine());
    var field = new char[size, size];
    var commands = new Queue<string>(Console.ReadLine().ToLower().Split(", ", StringSplitOptions.RemoveEmptyEntries));
    int row = 0;
    int col = 0;

    for (int i = 0; i < size; i++)
    {
        var line = Console.ReadLine().ToLower().ToCharArray();
        for (int j = 0; j < size; j++)
        {
            field[i, j] = line[j];
            if (line[j] == 's')
            {
                row = i;
                col = j;
            }
        }
    }

    while (commands.Any() && hazelnuts < 3)
    {
        var command = commands.Dequeue();
        Move(command);
        if (isInRange())
        {
            var step = field[row, col];
            switch (step)
            {
                case 'h': hazelnuts++; break;
                case '*': continue;
                case 't':
                    Console.WriteLine("Unfortunately, the squirrel stepped on a trap...");
                    Console.WriteLine($"Hazelnuts collected: {hazelnuts}");
                    return;
            }

            field[row, col] = '*';
        }
        else
        {
            Console.WriteLine("The squirrel is out of the field.");
            Console.WriteLine($"Hazelnuts collected: {hazelnuts}");
            return;
        }

    }

    if (hazelnuts < 3)
    {
        Console.WriteLine("There are more hazelnuts to collect.");
        Console.WriteLine($"Hazelnuts collected: {hazelnuts}");
    }
    else
    {
        Console.WriteLine("Good job! You have collected all hazelnuts!");
        Console.WriteLine($"Hazelnuts collected: {hazelnuts}");
    }

    void Move(string direction)
    {
        field[row, col] = '*';
        switch (direction)
        {
            case "left": col--; break;
            case "right": col++; break;
            case "up": row--; break;
            case "down": row++; break;
        }
    }

    bool isInRange()
    {
        return row >= 0 && row < size && col >= 0 && col < size;
    }
}