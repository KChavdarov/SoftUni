TrafficJam();

void ReverseStrings()
{
    string input = Console.ReadLine();
    var reversed = new Stack<char>();

    foreach (var ch in input)
    {
        reversed.Push(ch);
    }

    while (reversed.Count > 0)
    {
        Console.Write(reversed.Pop());
    }
}

void StackSum()
{
    int[] initialInts = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    Stack<int> ints = new Stack<int>();

    foreach (var el in initialInts)
    {
        ints.Push(el);
    }

    string input = Console.ReadLine().ToLower();

    while (input != "end")
    {
        string[] tokens = input.Split(" ");
        string action = tokens[0];

        switch (action)
        {
            case "add":
                int a = int.Parse(tokens[1]);
                int b = int.Parse(tokens[2]);
                ints.Push(a);
                ints.Push(b);
                break;
            case "remove":
                int count = int.Parse(tokens[1]);

                if (ints.Count >= count)
                {
                    for (int i = 0; i < count; i++)
                    {
                        ints.Pop();
                    }
                }
                break;
        }

        input = Console.ReadLine().ToLower();
    }

    int sum = 0;

    while (ints.Count > 0)
    {
        sum += ints.Pop();
    }

    Console.WriteLine($"Sum: {sum}");
}

void SimpleCalculator()
{
    string[] input = Console.ReadLine().Split(" ");
    Stack<int> operands = new Stack<int>();
    Stack<string> operators = new Stack<string>();

    for (int i = input.Length - 1; i >= 0; i--)
    {
        var s = input[i];

        if (s == "+" || s == "-")
        {
            operators.Push(s);
        }
        else
        {
            operands.Push(int.Parse(s));
        }
    }

    int result = operands.Pop();

    while (operands.Count > 0)
    {
        int a = operands.Pop();
        string op = operators.Pop();

        if (op == "+")
        {
            result += a;
        }
        else if (op == "-")
        {
            result -= a;
        }
    }

    Console.WriteLine(result);
}

void MatchingBrackets()
{
    // 1 + (2 - (2 + 3) * 4 / (3 + 1)) * 5
    string input = Console.ReadLine();
    var openinig = new Stack<int>();

    for (int i = 0; i < input.Length; i++)
    {
        char c = input[i];
        if (c == '(')
        {
            openinig.Push(i);
        }
        else if (c == ')')
        {
            int start = openinig.Pop();
            int length = i - start + 1;

            Console.WriteLine(input.Substring(start, length));

        }
    }
}

void PrintEvenNumbers()
{
    int[] input = Console.ReadLine().Split(" ").Select(int.Parse).Where(a => a % 2 == 0).ToArray();
    Queue<int> numbers = new Queue<int>();

    foreach (var num in input)
    {
        numbers.Enqueue(num);
    }

    while (numbers.Count > 0)
    {
        Console.Write(numbers.Dequeue());
        if (numbers.Count != 0)
        {
            Console.Write(", ");
        }
    }
}

void Supermarket()
{
    string input = Console.ReadLine();
    var queue = new Queue<string>();

    while (input != "End")
    {
        if (input == "Paid")
        {
            EmptyQueue();
        }
        else
        {
            queue.Enqueue(input);
        }

        input = Console.ReadLine();
    }

    Console.WriteLine($"{queue.Count} people remaining.");

    void EmptyQueue()
    {
        while (queue.Count > 0)
        {
            Console.WriteLine(queue.Dequeue());
        }
    }
}

void HotPotato()
{
    var queue = new Queue<string>(Console.ReadLine().Split(" "));
    int n = int.Parse(Console.ReadLine());

    while (queue.Count > 1)
    {
        for (int i = 1; i < n; i++)
        {
            queue.Enqueue(queue.Dequeue());
        }

        Console.WriteLine($"Removed {queue.Dequeue()}");
    }

    Console.WriteLine($"Last is {queue.Dequeue()}");

}

void TrafficJam()
{
    int n = int.Parse(Console.ReadLine());
    string input = Console.ReadLine();
    var traffic = new Queue<string>();
    int counter = 0;

    while (input != "end")
    {
        if (input != "green")
        {
            traffic.Enqueue(input);
        }
        else
        {
            for (int i = 0; i < n; i++)
            {
                if (traffic.Count == 0) break;

                Console.WriteLine($"{traffic.Dequeue()} passed!");
                counter++;
            }
        }

        input = Console.ReadLine();
    }

    Console.WriteLine($"{counter} cars passed the crossroads.");
}