Miner();

void SumMatrixElements()
{
    int[] dimensions = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
    int x = dimensions[0];
    int y = dimensions[1];
    int[,] table = new int[x, y];

    for (int i = 0; i < x; i++)
    {
        int[] ints = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
        for (int j = 0; j < y; j++)
        {
            table[i, j] = ints[j];
        }
    }

    int sum = 0;
    for (int row = 0; row < table.GetLength(0); row++)
    {
        for (int col = 0; col < table.GetLength(1); col++)
        {
            sum += table[row, col];
        }
    }

    Console.WriteLine(table.GetLength(0));
    Console.WriteLine(table.GetLength(1));
    Console.WriteLine(sum);

}

void SumMatrixColumns()
{
    int[] dimensions = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
    int x = dimensions[0];
    int y = dimensions[1];
    int[,] table = new int[x, y];

    for (int i = 0; i < x; i++)
    {
        int[] ints = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
        for (int j = 0; j < y; j++)
        {
            table[i, j] = ints[j];
        }
    }

    for (int col = 0; col < table.GetLength(1); col++)
    {
        int sum = 0;
        for (int row = 0; row < table.GetLength(0); row++)
        {
            sum += table[row, col];
        }
        Console.WriteLine(sum);
    }
}

void PrimaryDiagonal()
{
    int x = int.Parse(Console.ReadLine());
    int[,] table = new int[x, x];

    for (int row = 0; row < x; row++)
    {
        int[] values = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

        for (int col = 0; col < x; col++)
        {
            table[row, col] = values[col];
        }
    }

    int sum = 0;
    for (int i = 0; i < table.GetLength(0); i++)
    {
        sum += table[i, i];
    }

    Console.WriteLine(sum);
}

void SymbolInMatrix()
{
    int x = int.Parse(Console.ReadLine());
    char[,] table = new char[x, x];

    for (int row = 0; row < x; row++)
    {
        var symbols = Console.ReadLine().ToCharArray();

        for (int col = 0; col < x; col++)
        {
            table[row, col] = symbols[col];
        }
    }

    char symbol = Console.ReadLine()[0];

    for (int row = 0; row < table.GetLength(0); row++)
    {
        for (int col = 0; col < table.GetLength(1); col++)
        {
            if (table[row, col] == symbol)
            {
                Console.WriteLine($"({row}, {col})");
                return;
            }
        }
    }

    Console.WriteLine($"{symbol} does not occur in the matrix");
}

void SquareWithMaximumSum()
{
    int[] dimensions = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
    int x = dimensions[0];
    int y = dimensions[1];
    int[,] table = new int[x, y];

    for (int i = 0; i < x; i++)
    {
        int[] ints = Console.ReadLine().Split(", ").Select(int.Parse).ToArray();
        for (int j = 0; j < y; j++)
        {
            table[i, j] = ints[j];
        }
    }

    int maxSum = int.MinValue;
    int maxRow = 0;
    int maxCol = 0;

    for (int row = 0; row < table.GetLength(0) - 1; row++)
    {
        for (int col = 0; col < table.GetLength(1) - 1; col++)
        {
            int sum = table[row, col] + table[row, col + 1] + table[row + 1, col] + table[row + 1, col + 1];
            if (sum > maxSum)
            {
                maxSum = sum;
                maxRow = row;
                maxCol = col;
            }
        }
    }

    Console.WriteLine($"{table[maxRow, maxCol]} {table[maxRow, maxCol + 1]}");
    Console.WriteLine($"{table[maxRow + 1, maxCol]} {table[maxRow + 1, maxCol + 1]}");
    Console.WriteLine(maxSum);
}

void JaggedArrayModification()
{
    int rows = int.Parse(Console.ReadLine());
    int[][] table = new int[rows][];

    for (int i = 0; i < rows; i++)
    {
        int[] data = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
        table[i] = data;
    }

    string input = Console.ReadLine();

    while (input != "END")
    {
        string[] tokens = input.Split(" ");
        string command = tokens[0];
        int row = int.Parse(tokens[1]);
        int col = int.Parse(tokens[2]);
        int value = int.Parse(tokens[3]);

        switch (command)
        {
            case "Add":
                if (isValidIndex(row, col))
                {
                    table[row][col] += value;
                }
                break;
            case "Subtract":
                if (isValidIndex(row, col))
                {
                    table[row][col] -= value;
                }
                break;
        }

        input = Console.ReadLine();
    }

    foreach (var row in table)
    {
        Console.WriteLine(string.Join(" ", row));
    }

    bool isValidIndex(int row, int col)
    {
        if (row >= 0 && row < table.Length)
        {
            if (col >= 0 && col < table[row].Length)
            {
                return true;
            }
        }
        Console.WriteLine("Invalid coordinates");
        return false;
    }
}

void PascalTriangle()
{
    int n = int.Parse(Console.ReadLine());
    int[][] triangle = new int[n][];

    for (int i = 0; i < triangle.Length; i++)
    {
        triangle[i] = new int[i + 1];
        for (int j = 0; j < i + 1; j++)
        {
            int x = 1;
            if (i - 1 >= 0 && j - 1 >= 0 && j < i)
            {
                int a = triangle[i - 1][j - 1];
                int b = triangle[i - 1][j];
                x = a + b;
            }
            triangle[i][j] = x;
        }
    }

    for (int i = 0; i < triangle.Length; i++)
    {
        Console.WriteLine($"{new string(' ', triangle.Length - i)}{string.Join(" ", triangle[i])}");
    }
}

void DiagonalDifference()
{
    int x = int.Parse(Console.ReadLine());
    int[,] table = new int[x, x];

    for (int row = 0; row < x; row++)
    {
        int[] values = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();

        for (int col = 0; col < x; col++)
        {
            table[row, col] = values[col];
        }
    }

    int diagA = 0;
    int diagB = 0;
    for (int i = 0; i < table.GetLength(0); i++)
    {
        diagA += table[i, i];
        diagB += table[i, table.GetLength(1) - i - 1];
    }

    Console.WriteLine(Math.Abs(diagB - diagA));
}

void SquaresInMatrix()
{
    int[] dimensions = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    int x = dimensions[0];
    int y = dimensions[1];
    int squareSize = 2;
    string[,] table = new string[x, y];
    int equalCount = 0;

    for (int i = 0; i < x; i++)
    {
        string[] values = Console.ReadLine().Split(" ");
        for (int j = 0; j < y; j++)
        {
            table[i, j] = values[j];
        }
    }

    for (int row = 0; row < table.GetLength(0) - (squareSize - 1); row++)
    {
        for (int col = 0; col < table.GetLength(1) - (squareSize - 1); col++)
        {
            string[,] square = new string[squareSize, squareSize];
            for (int i = 0; i < square.GetLength(0); i++)
            {
                for (int j = 0; j < square.GetLength(1); j++)
                {
                    square[i, j] = table[row + i, col + j];
                }
            }
            if (isConsistent(square))
            {
                equalCount++;
            }

        }
    }

    Console.WriteLine(equalCount);

    bool isConsistent(string[,] square)
    {
        string a = square[0, 0];
        foreach (var b in square)
        {
            if (b != a)
            {
                return false;
            }
        }
        return true;
    }

}

void SnakeMoves()
{
    int[] dimensions = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    int n = dimensions[0];
    int m = dimensions[1];

    char[,] table = new char[n, m];
    Queue<char> snake = new Queue<char>(Console.ReadLine().ToCharArray());

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            int x = i % 2 == 0 ? j : m - j - 1;
            var ch = snake.Dequeue();
            snake.Enqueue(ch);
            table[i, x] = ch;
        }
    }

    PrintTable(table);

    void PrintTable<T>(T[,] table)
    {
        for (int i = 0; i < table.GetLength(0); i++)
        {
            for (int j = 0; j < table.GetLength(1); j++)
            {
                Console.Write(table[i, j] + " ");
            }
            Console.WriteLine();
        }
    }
}

void JaggedArrayManipulator()
{
    int n = int.Parse(Console.ReadLine());
    int[][] table = new int[n][];

    for (int i = 0; i < n; i++)
    {
        table[i] = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
    }

    for (int i = 0; i < table.Length - 1; i++)
    {
        if (table[i].Length == table[i + 1].Length)
        {
            table[i] = table[i].Select(a => a * 2).ToArray();
            table[i + 1] = table[i + 1].Select(a => a * 2).ToArray();
        }
        else
        {
            table[i] = table[i].Select(a => a / 2).ToArray();
            table[i + 1] = table[i + 1].Select(a => a / 2).ToArray();
        }
    }

    string input = Console.ReadLine();

    while (input != "End")
    {
        string[] tokens = input.Split();
        string action = tokens[0];
        int row = int.Parse(tokens[1]);
        int col = int.Parse(tokens[2]);
        int value = int.Parse(tokens[3]);

        if (IsValid(row, col))
        {
            switch (action)
            {
                case "Add":

                    table[row][col] += value;

                    break;
                case "Subtract":
                    table[row][col] -= value;
                    break;
            }
        }
        input = Console.ReadLine();
    }

    PrintTable(table);

    bool IsValid(int row, int col)
    {
        return !(row < 0 || row >= table.Length || col < 0 || col >= table[row].Length);
    }

    void PrintTable(int[][] table)
    {
        foreach (var row in table)
        {
            Console.WriteLine(string.Join(" ", row));
        }
    }
}

void Miner()
{
    int size = int.Parse(Console.ReadLine());
    string[,] field = new string[size, size];
    Queue<string> directions = new Queue<string>(Console.ReadLine().Split(" "));
    int coal = 0;
    int row = 0;
    int col = 0;

    for (int i = 0; i < size; i++)
    {
        string[] values = Console.ReadLine().Split(" ");
        for (int j = 0; j < size; j++)
        {
            string value = values[j];
            field[i, j] = value;
            if (value == "s")
            {
                row = i;
                col = j;
            }
            else if (value == "c")
            {
                coal++;
            }
        }
    }

    while (directions.Any())
    {
        string direction = directions.Dequeue();
        if (Move(direction))
        {
            Console.WriteLine($"Game over! ({row}, {col})");
            return;
        }

        if (coal == 0)
        {
            Console.WriteLine($"You collected all coals! ({row}, {col})");
            return;
        }
    }

    Console.WriteLine($"{coal} coals left. ({row}, {col})");

    bool Move(string direction)
    {
        bool isGameOver = false;
        int nextRow = row;
        int nextCol = col;
        switch (direction)
        {
            case "up":
                nextRow--;
                break;
            case "down":
                nextRow++;
                break;
            case "right":
                nextCol++;
                break;
            case "left":
                nextCol--;
                break;
        }

        if (IsValid(nextRow, nextCol))
        {
            string next = field[nextRow, nextCol];
            switch (next)
            {
                case "e":
                    isGameOver = true;
                    break;
                case "c":
                    coal--;
                    break;
            }

            field[row, col] = "*";
            field[nextRow, nextCol] = "s";
            row = nextRow;
            col = nextCol;
        }
        return isGameOver;
    }

    bool IsValid(int row, int col)
    {
        return !(row < 0 || row >= field.GetLength(0) || col < 0 || col >= field.GetLength(1));
    }
}