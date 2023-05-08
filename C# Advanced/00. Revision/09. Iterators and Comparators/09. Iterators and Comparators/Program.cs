using _09._Iterators_and_Comparators;

var list = new List<int> { 1, 2, 3, 4, 5 };
foreach (var num in list)
{
    Console.WriteLine(num);
}

Console.WriteLine(new string('-', 20));

var listEnumerator = list.GetEnumerator();
while (listEnumerator.MoveNext())
{
    Console.WriteLine(listEnumerator.Current);
}


Book book1 = new Book("Animal Farm", 2003, "George Orwell");
Book book2 = new Book("The Documents in the Case", 2002, "Dorothy Sayers", "Robert Eustace");
Book book3 = new Book("The Documents in the Case", 1930, "Anonymous");
Book book4 = new Book("Test Book 1", 2023, "Test Author 1");
Book book5 = new Book("Test Book 2", 2023, "Test Author 2");
Book book6 = new Book("Test Book 3", 2023, "Test Author 3");

Library library = new Library(book1, book2, book3);

foreach (var book in library)
{
    Console.WriteLine(book);
}

Console.WriteLine(new string('-', 20));

var testList = new List<Book>(new Book[] { book1, book2, book3, book4, book5, book6 });
testList.Sort(new BookComparer());

foreach (var book in testList)
{
    Console.WriteLine(book);
}

Console.WriteLine(new string('-', 20));

var testList2 = new SortedSet<Book>(new Book[] { book1, book2, book3, book4, book5, book6 });
foreach (var book in testList2)
{
    Console.WriteLine(book);
}