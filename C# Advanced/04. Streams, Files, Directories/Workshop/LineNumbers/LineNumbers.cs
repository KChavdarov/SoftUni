namespace LineNumbers
{
    using System;
    using System.IO;
    using System.Linq;
    using System.Text;

    public class LineNumbers
    {
        static void Main(string[] args)
        {
            string inputPath = @"..\..\..\text.txt";
            string outputPath = @"..\..\..\output.txt";

            ProcessLines(inputPath, outputPath);
        }

        public static void ProcessLines(string inputFilePath, string outputFilePath)
        {
            string[] lines = File.ReadAllLines(inputFilePath);
            int count = 1;
            lines = lines.Select(line => $"Line {count++}: {line}({line.ToCharArray().Count(a => Char.IsLetter(a))})({line.ToCharArray().Count(a => Char.IsPunctuation(a))})").ToArray();
            File.WriteAllLines(outputFilePath, lines);
        }
    }
}
