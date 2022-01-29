using System.IO;

namespace CopyBinaryFile
{
    public class CopyBinaryFile
    {
        static void Main(string[] args)
        {
            string inputPath = @"..\..\..\copyMe.png";
            string outputPath = @"..\..\..\copyMe-copy.png";

            CopyFile(inputPath, outputPath);
        }

        public static void CopyFile(string inputFilePath, string outputFilePath)
        {
            using FileStream input = new FileStream(inputFilePath, FileMode.OpenOrCreate, FileAccess.Read);
            byte[] buffer = new byte[4096];
            int readCount = input.Read(buffer);
            using FileStream output = new FileStream(outputFilePath, FileMode.OpenOrCreate, FileAccess.Write);

            while (readCount != 0)
            {
                output.Write(buffer);
                readCount = input.Read(buffer);
            }
        }
    }
}
