using _08._Generics;

var textBox = new GenericBox<string>("test");
var intBox = new GenericBox<int>(123);
Console.WriteLine(textBox);
Console.WriteLine(intBox);

var testList = new List<int>(new int[] { 1, 2, 3 });
SwapElements(testList, 0, 2);
Console.WriteLine(testList[0]);
Console.WriteLine(testList[2]);

void SwapElements<T>(List<T> list, int a, int b)
{
    if (isValidIndex(a) && isValidIndex(b))
    {
        T temp = list[a];
        list[a] = list[b];
        list[b] = temp;
    }
    else
    {
        throw new IndexOutOfRangeException();
    }

    bool isValidIndex(int index)
    {
        return index >= 0 && index < list.Count;
    }
}

int CountGreater<T>(List<T> list, T item)
    where T : IComparable
{
    return list.Count(a => a.CompareTo(item) > 0);
}