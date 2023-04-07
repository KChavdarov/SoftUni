using System.Linq;

CupsAndBottles();

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

void BasicStackOperations()
{
    var nsx = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    int n = nsx[0];
    int s = nsx[1];
    int x = nsx[2];
    var input = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    Stack<int> numbers = new Stack<int>();

    for (int i = 0; i < n; i++)
    {
        numbers.Push(input[i]);
    }

    for (int i = 0; i < s; i++)
    {
        if (numbers.Count > 0)
        {
            numbers.Pop();
        }
        else
        {
            break;
        }
    }

    if (numbers.Contains(x))
    {
        Console.WriteLine("true");
        return;
    }

    if (numbers.Count == 0)
    {
        Console.WriteLine(0);
        return;
    }

    int min = int.MaxValue;
    while (numbers.Count > 0)
    {
        int num = numbers.Pop();
        min = Math.Min(min, num);
    }
    Console.WriteLine(min);
}

void BasicQueueOperations()
{
    var nsx = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    int n = nsx[0];
    int s = nsx[1];
    int x = nsx[2];
    var input = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    Queue<int> numbers = new Queue<int>();

    for (int i = 0; i < n; i++)
    {
        numbers.Enqueue(input[i]);
    }

    for (int i = 0; i < s; i++)
    {
        if (numbers.Count > 0)
        {
            numbers.Dequeue();
        }
        else
        {
            break;
        }
    }

    if (numbers.Contains(x))
    {
        Console.WriteLine("true");
        return;
    }

    if (numbers.Count == 0)
    {
        Console.WriteLine(0);
        return;
    }

    int min = int.MaxValue;
    while (numbers.Count > 0)
    {
        int num = numbers.Dequeue();
        min = Math.Min(min, num);
    }

    Console.WriteLine(min);
}

void FastFood()
{
    int food = int.Parse(Console.ReadLine());
    var orders = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));
    Console.WriteLine(orders.Max());

    while (orders.Count > 0)
    {
        if (food >= orders.Peek())
        {
            food -= orders.Dequeue();
        }
        else
        {
            break;
        }
    }

    if (orders.Count == 0)
    {
        Console.WriteLine("Orders complete");
    }
    else
    {
        Console.Write("Orders left:");
        while (orders.Count > 0)
        {
            Console.Write($" {orders.Dequeue()}");
        }
    }
}

void Crossroads()
{
    var queue = new Queue<string>();
    int greenLightDuration = int.Parse(Console.ReadLine());
    int freeWindowDuration = int.Parse(Console.ReadLine());
    var crossroad = new Queue<char>();
    string input = Console.ReadLine();
    int carsPassed = 0;

    while (input != "END")
    {
        if (input != "green")
        {
            queue.Enqueue(input);
        }
        else
        {
            string car = string.Empty;
            for (int i = 0; i < greenLightDuration; i++)
            {
                if (crossroad.Count > 0)
                {
                    crossroad.Dequeue();
                }
                else
                {
                    if (queue.Count > 0)
                    {
                        carsPassed++;
                        car = queue.Dequeue();
                        crossroad = new Queue<char>(car);
                        crossroad.Dequeue();
                    }
                    else
                    {
                        break;
                    }

                }
            }

            for (int i = 0; i < freeWindowDuration; i++)
            {
                if (crossroad.Count > 0)
                {
                    crossroad.Dequeue();
                }
                else
                {
                    break;
                }
            }

            if (crossroad.Count > 0)
            {
                Console.WriteLine("A crash happened!");
                Console.WriteLine($"{car} was hit at {crossroad.Dequeue()}.");
                return;
            }
        }

        input = Console.ReadLine();
    }

    Console.WriteLine("Everyone is safe.");
    Console.WriteLine($"{carsPassed} total cars passed the crossroads.");
}

void KeyRevolver()
{
    int bulletPrice = int.Parse(Console.ReadLine());
    int barrelSize = int.Parse(Console.ReadLine());
    var bullets = new Stack<int>(Console.ReadLine().Split(" ").Select(int.Parse));
    var locks = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));
    int intel = int.Parse(Console.ReadLine());
    int bulletCount = 0;
    int ammoCount = barrelSize;

    while (locks.Count > 0)
    {
        if (bullets.Count > 0)
        {
            int bulletValue = bullets.Pop();
            bulletCount++;
            ammoCount--;

            int lockValue = locks.Peek();

            if (lockValue >= bulletValue)
            {
                Console.WriteLine("Bang!");
                locks.Dequeue();
            }
            else
            {
                Console.WriteLine("Ping!");
            }
        }
        else
        {
            Console.WriteLine($"Couldn't get through. Locks left: {locks.Count}");
            return;
        }

        if (ammoCount == 0 && bullets.Count > 0)
        {
            ammoCount = barrelSize;
            Console.WriteLine("Reloading!");
        }
    }

    int moneyEarned = intel - bulletCount * bulletPrice;
    Console.WriteLine($"{bullets.Count} bullets left. Earned ${moneyEarned}");

}

void CupsAndBottles()
{
    Queue<int> cups = new Queue<int>(Console.ReadLine().Split(" ").Select(int.Parse));
    Stack<int> bottles = new Stack<int>(Console.ReadLine().Split(" ").Select(int.Parse));
    int wastedWater = 0;

    while (bottles.Any() && cups.Any())
    {
        int cup = cups.Peek();

        while (cup > 0)
        {
            if (bottles.Any())
            {
                int bottle = bottles.Pop();
                if (bottle >= cup)
                {
                    wastedWater += bottle - cup;
                    cup = 0;
                    cups.Dequeue();
                }else
                {
                    cup -= bottle;
                }
            }
            else
            {
                break;
            }
        }
    }

    if (cups.Count > 0 && bottles.Count == 0)
    {
        Console.WriteLine($"Cups: {String.Join(' ', cups)}");
    }
    else
    {
        Console.WriteLine($"Bottles: {String.Join(' ', bottles)}");
    }

    Console.WriteLine($"Wasted litters of water: {wastedWater}");
}