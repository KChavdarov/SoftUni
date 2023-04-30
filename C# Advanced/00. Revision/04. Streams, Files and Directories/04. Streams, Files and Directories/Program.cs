using System.Text;
using System.Text.RegularExpressions;

DirectoryTraversal();
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

void EvenLines()
{
    string filePath = @"..\..\..\Files\EvenLinesText.txt";
    using var reader = new StreamReader(filePath);
    int i = 0;

    while (!reader.EndOfStream)
    {
        string line = reader.ReadLine();
        if (i % 2 == 0)
        {
            Console.WriteLine(ReformatText(line));
        }
        i++;
    }

    string ReformatText(string text)
    {
        var replaced = Regex.Replace(text, @"[-,\.!?]", "@");
        return string.Join(" ", replaced.Split(" ", StringSplitOptions.RemoveEmptyEntries).Reverse());
    }
}

void LineNumbers2()
{
    string filePath = @"..\..\..\Files\LineNumbers2Text.txt";
    string[] lines = File.ReadAllLines(filePath);
    int count = 1;
    foreach (var line in lines)
    {
        int letters = line.ToCharArray().Count(a => Char.IsLetter(a));
        int punctuations = line.ToCharArray().Count(a => Char.IsPunctuation(a));
        Console.WriteLine($"Line {count++}: {line}({letters})({punctuations})");
    }
}

void CopyBinaryFile()
{
    string inputFilePath = @"..\..\..\Files\copyMe.png";
    string outputFilePath = @"..\..\..\Files\copyMe-Copied.png";
    byte[] buffer = new byte[4096];
    using var input = new FileStream(inputFilePath, FileMode.Open, FileAccess.Read);
    using var output = new FileStream(outputFilePath, FileMode.OpenOrCreate, FileAccess.Write);
    int read = input.Read(buffer);
    while (read > 0)
    {
        output.Write(buffer);
        read = input.Read(buffer);
    }
}

void DirectoryTraversal()
{
    var directoryPath = @"..\..\..\Files";

    Console.WriteLine(TraverseDirectory(directoryPath));

    string TraverseDirectory(string directoryPath)
    {
        var directorySummary = new Dictionary<string, Dictionary<string, long>>();
        var filesPaths = Directory.GetFiles(directoryPath);

        foreach (var filePath in filesPaths)
        {
            var info = new FileInfo(filePath);
            var name = info.Name;
            var size = info.Length;
            var extension = info.Extension;

            if (!directorySummary.ContainsKey(extension))
            {
                directorySummary[extension] = new Dictionary<string, long>();
            }
            directorySummary[extension].Add(name, size);
        }

        var result = new StringBuilder();

        foreach ((var extension, var files) in directorySummary.OrderByDescending(a => a.Value.Count).ThenBy(a => a.Key))
        {
            result.AppendLine(extension);
            foreach ((var name, var size) in files.OrderBy(a => a.Value))
            {
                result.AppendLine($"--{name} - {size / 1024f:f3}kb");
            }
        }

        return result.ToString();
    }
}