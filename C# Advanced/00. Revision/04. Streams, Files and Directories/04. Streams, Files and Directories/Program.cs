using System.Text.RegularExpressions;

FolderSize();
void Demo()
{
    using (StreamWriter writer = new StreamWriter("test.txt"))
    {
        string line = Console.ReadLine();
        writer.WriteLine("Edited by program");
        writer.WriteLine(line);
    }

    StreamReader reader = new StreamReader("test.txt");
    Console.WriteLine(reader.ReadLine());
    Console.WriteLine(reader.ReadLine());
    reader.Close();
}

void OddLines()
{
    string inputFilePath = @"..\..\..\Files\OddCountriesInput.txt";
    string outputFilePath = @"..\..\..\Files\OddCountriesInput.txt";

    using var sr = new StreamReader(inputFilePath);
    using var sw = new StreamWriter(outputFilePath);
    int index = 0;
    while (!sr.EndOfStream)
    {
        string line = sr.ReadLine();
        if (index % 2 == 1)
        {
            sw.WriteLine(line);
        }
        index++;
    }
}

void LineNumbers()
{
    string inputFilePath = @"..\..\..\Files\LineNumbersInput.txt";
    string outputFilePath = @"..\..\..\Files\LineNumbersOutput.txt";

    using var sr = new StreamReader(inputFilePath);
    using var sw = new StreamWriter(outputFilePath);
    int row = 1;

    while (!sr.EndOfStream)
    {
        sw.WriteLine($"{row}. {sr.ReadLine()}");
        row++;
    }
}

void WordCount()
{
    string wordFilePath = @"..\..\..\Files\words.txt";
    string textFilePath = @"..\..\..\Files\text.txt";
    using var wordReader = new StreamReader(wordFilePath);
    string[] words = wordReader.ReadToEnd().Split(" ");
    var counts = new Dictionary<string, int>();
    using var sr = new StreamReader(textFilePath);
    string text = sr.ReadToEnd();
    foreach (var word in words)
    {
        counts[word] = 0;
        var pattern = new Regex($@"\b{word}\b", RegexOptions.IgnoreCase);
        if (pattern.IsMatch(text))
        {
            var matches = pattern.Matches(text);
            counts[word] = matches.Count();
        }
    }

    foreach ((var word, var count) in counts.OrderByDescending(a => a.Value))
    {
        Console.WriteLine($"{word} - {count}");
    }
}

void SplitFile()
{
    string inputPath = @"..\..\..\Files\Countries.txt";
    using FileStream reader = new FileStream(inputPath, FileMode.Open);
    int parts = 4;
    byte[] buffer = new byte[(int)Math.Ceiling(reader.Length / (double)parts)];
    for (int i = 0; i < parts; i++)
    {
        reader.Read(buffer);
        string outputPath = @$"..\..\..\Files\Countries-part{i + 1}.txt";
        using var writer = new FileStream(outputPath, FileMode.Create);
        writer.Write(buffer);
    }
}

void FolderSize()
{
    string folderPath = @"..\..\..\Files";
    Console.WriteLine(GetSize(folderPath));

    long GetSize(string path)
    {
        long size = 0;
        var files = Directory.GetFiles(path);
        foreach (var file in files)
        {
            size += new FileInfo(file).Length;
        }

        var directories = Directory.GetDirectories(path);
        foreach (var directory in directories)
        {
            size += GetSize(directory);
        }

        return size;
    }
}