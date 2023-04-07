PascalTriangle();

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