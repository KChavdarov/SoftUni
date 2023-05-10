//SumOfCoins(923, 1, 2, 5, 10, 20, 50);
//SumOfCoins(11, 7, 3);
//SumOfCoins(27, 1, 9, 10);
//SetCover();
//Print(5);
//Console.WriteLine(ArraySum(new int[] { 1, 2, 3, 4, 5 }));
//Console.WriteLine(Factorial(5));

var testArr = new int[] { 5, 4, 3, 2, 1, 0 };
var testArr2 = new int[] { 5, 1, -4, 3, 8, 21, 9, 1 };

//SelectionSort(testArr);
//BubbleSort(testArr);
//MergeSort(new int[0]);
//MergeSort(testArr);
//QuickSort(testArr2);
Console.WriteLine(string.Join(", ", testArr2));
Console.WriteLine(BinarySeachIndex(testArr2, 8));
Console.WriteLine(BinarySeachIndex(testArr2, 13));

void Print(int n)
{
    if (n == 0)
    {
        return;
    }

    Console.WriteLine($"Before recursion {n}");
    Print(n - 1);
    Console.WriteLine($"After recursion {n}");
}
int ArraySum(int[] arr, int index = 0)
{
    if (index == arr.Length)
    {
        return 0;
    }

    return arr[index] + ArraySum(arr, index + 1);
}
int Factorial(int n)
{
    if (n == 1) return 1;

    return n * Factorial(n - 1);
}
void SumOfCoins(int sum, params int[] coins)
{
    var coinCounts = new Dictionary<int, int>();
    foreach (var coin in coins)
    {
        coinCounts[coin] = 0;
    }

    foreach (int coin in coinCounts.Keys.OrderByDescending(a => a))
    {
        int n = sum / coin;
        coinCounts[coin] = n;
        sum -= n * coin;

        if (sum == 0)
        {
            break;
        }
    }
    if (sum == 0)
    {
        var usedCoins = coinCounts
            .Where(a => a.Value > 0)
            .ToDictionary(a => a.Key, a => a.Value)
            .OrderByDescending(a => a.Key);

        Console.WriteLine($"Number of coins to take: {usedCoins.Sum(a => a.Value)}");
        foreach (var entry in usedCoins)
        {
            Console.WriteLine($"{entry.Value} coins with a value of {entry.Key}");
        }
    }
    else
    {
        Console.WriteLine("Error");
    }
}
void SetCover()
{
    var universe = new HashSet<int>() { 1, 3, 5, 7, 9, 11, 20, 30, 40 };
    var sets = new HashSet<int>[]
    {
        new HashSet<int> { 6 },
        new HashSet<int> { 20 },
        new HashSet<int> { 1, 5, 20, 30 },
        new HashSet<int> { 3, 7, 20, 30, 40 },
        new HashSet<int> { 9, 30 },
        new HashSet<int> { 11, 20, 30, 40 },
        new HashSet<int> { 3, 7, 40 },
    };
    var selectedSets = new List<HashSet<int>>();

    while (universe.Count > 0)
    {
        var maxIntersect = sets.OrderByDescending(a => a.Count(x => universe.Contains(x))).FirstOrDefault();
        universe.ExceptWith(maxIntersect);
        selectedSets.Add(maxIntersect);
    }

    Console.WriteLine($"Sets to take: ({selectedSets.Count})");
    foreach (var set in selectedSets)
    {
        Console.WriteLine($"{{ {string.Join(", ", set)} }}");
    }
}
void Swap<T>(T[] elements, int a, int b)
{
    T temp = elements[a];
    elements[a] = elements[b];
    elements[b] = temp;
}
void SelectionSort<T>(T[] elements)
    where T : IComparable
{
    for (int i = 0; i < elements.Length; i++)
    {
        //int minIndex = i;
        //for (int j = i + 1; j < elements.Length; j++)
        //{
        //    if (elements[j].CompareTo(elements[minIndex]) < 0)
        //    {
        //        minIndex = j;
        //    }
        //}

        //if (i != minIndex)
        //{
        //    Swap(elements, i, minIndex);
        //}

        for (int j = i + 1; j < elements.Length; j++)
        {
            if (elements[i].CompareTo(elements[j]) > 0)
            {
                Swap(elements, i, j);
            }
        }
    }
}
void BubbleSort<T>(T[] elements)
    where T : IComparable
{
    bool swapped = true;
    int max = elements.Length - 1;
    while (swapped)
    {
        swapped = false;
        for (int i = 0; i < max; i++)
        {
            T A = elements[i];
            T B = elements[i + 1];

            if (A.CompareTo(B) > 0)
            {
                Swap(elements, i, i + 1);
                swapped = true;
            }
        }
        max--;
    }
}
void MergeSort<T>(T[] elements)
    where T : IComparable
{
    Sort(elements);

    T[] Sort(T[] elements)
    {
        if (elements.Length <= 1)
        {
            return elements;
        }

        int mid = elements.Length / 2;
        T[] left = elements.Take(mid).ToArray();
        T[] right = elements.Skip(mid).ToArray();

        return Merge(Sort(left), Sort(right));
    }

    T[] Merge(T[] left, T[] right)
    {
        T[] sorted = new T[left.Length + right.Length];
        int sortedIndex = 0;
        int leftIndex = 0;
        int rightIndex = 0;

        while (leftIndex < left.Length && rightIndex < right.Length)
        {
            if (left[leftIndex].CompareTo(right[rightIndex]) < 0)
            {
                sorted[sortedIndex++] = left[leftIndex++];
            }
            else
            {
                sorted[sortedIndex++] = right[rightIndex++];
            }
        }

        while (leftIndex < left.Length)
        {
            sorted[sortedIndex++] = left[leftIndex++];
        }

        while (rightIndex < right.Length)
        {
            sorted[sortedIndex++] = right[rightIndex++];
        }

        return sorted;
    }
}
void QuickSort<T>(T[] elements)
    where T : IComparable
{
    int startIndex = 0;
    int endIndex = elements.Length - 1;
    Sort(elements, startIndex, endIndex);

    void Sort(T[] elements, int startIndex, int endIndex)
    {
        if (startIndex >= endIndex) return;

        int pivot = Partition(startIndex, endIndex);
        Sort(elements, startIndex, pivot - 1);
        Sort(elements, pivot + 1, endIndex);
    }

    int Partition(int startIndex, int endIndex)
    {
        int pivotIndex = startIndex;
        T pivot = elements[pivotIndex];
        int storeIndex = pivotIndex + 1;

        for (int i = storeIndex; i <= endIndex; i++)
        {
            T currentElement = elements[i];
            if (currentElement.CompareTo(pivot) < 0)
            {
                Swap(elements, i, storeIndex++);
            }
        }

        Swap(elements, pivotIndex, storeIndex - 1);
        return storeIndex - 1;
    }
}
int BinarySeachIndex<T>(T[] SortedElements, T item)
    where T : IComparable
{
    int start = 0;
    int end = SortedElements.Length - 1;

    while (start < end)
    {
        int mid = (start + end) / 2;
        T currentElement = SortedElements[mid];
        if (currentElement.CompareTo(item) > 0)
        {
            end = mid - 1;
        }
        else if (currentElement.CompareTo(item) < 0)
        {
            start = mid + 1;
        }
        else
        {
            return mid;
        }
    }
    return -1;
}