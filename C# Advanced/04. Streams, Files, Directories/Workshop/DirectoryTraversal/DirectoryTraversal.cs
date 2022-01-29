namespace DirectoryTraversal
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Text;

    public class DirectoryTraversal
    {
        static void Main(string[] args)
        {
            string path = Console.ReadLine();
            string reportFileName = @"\report.txt";

            string reportContent = TraverseDirectory(path);
            Console.WriteLine(reportContent);

            WriteReportToDesktop(reportContent, reportFileName);
        }

        public static string TraverseDirectory(string inputFolderPath)
        {
            string[] files = Directory.GetFiles(inputFolderPath);
            Dictionary<string, Dictionary<string, double>> fileMap = new Dictionary<string, Dictionary<string, double>>();

            foreach (string file in files)
            {
                string name = Path.GetFileName(file);
                string extension = Path.GetExtension(file);
                double size = new FileInfo(file).Length;

                if (!fileMap.ContainsKey(extension))
                {
                    fileMap[extension] = new Dictionary<string, double>();
                }

                fileMap[extension].Add(name, size);
            }

            StringBuilder result = new StringBuilder();

            foreach (var entry in fileMap.OrderByDescending(a => a.Value.Count).ThenBy(a => a.Key))
            {
                result.AppendLine(entry.Key);
                foreach (var subentry in entry.Value.OrderByDescending(a => a.Value))
                {
                    result.AppendLine($"--{subentry.Key} - {(subentry.Value / 1024.0):f3}kb");
                }
            }

            return result.ToString();
        }

        public static void WriteReportToDesktop(string textContent, string reportFileName)
        {
            string desktopPath = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);

            File.WriteAllText(desktopPath + $"/{reportFileName}", textContent);
        }
    }
}
