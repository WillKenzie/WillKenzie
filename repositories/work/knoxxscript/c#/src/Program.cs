using System;

namespace KnoxxScript
{
    class Program
    {
        static void Main(string[] args)
        {
            // Declare Variables
            string input;
            // Done Declaring
            Console.WriteLine("Welcome to KnoxxScript Console");
            string r = "0";
            do
            {
                Console.WriteLine("KS>");
                input = Console.ReadLine();
                string command = input.Split('(')[0].ToString();
                int start = input.IndexOf("(") + 1;
                int end = input.IndexOf(")", start);
                string args2 = input.Substring(start, end - start);
                string args3 = args2.Split(',');
                Console.WriteLine("command: " + command + "\n" + "args: " + args3);
            } while (r == "0");
        }
    }
}
