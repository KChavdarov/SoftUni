using System.Text;

var car = new Car();

public class Car
{
    public Car()
    {
        Make = "VW";
        Model = "Golf";
        Year = 2025;
        FuelQuantity = 200;
        FuelConsumption = 10;
        Engine = new Engine(100, 1.6);
        Tires = new Tire[]
        {
            new Tire(2025,2.3),
            new Tire(2025,2.3),
            new Tire(2025,2.3),
            new Tire(2025,2.3),
        };
    }
    public Car(string make, string model, int year) : this()
    {
        Make = make;
        Model = model;
        Year = year;
    }
    public Car(string make, string model, int year, double fuelQuantity, double fuelConsumption) : this(make, model, year)
    {
        FuelQuantity = fuelQuantity;
        FuelConsumption = fuelConsumption;
    }
    public Car(string make, string model, int year, double fuelQuantity, double fuelConsumption, Engine engine, Tire[] tires) : this(make, model, year, fuelQuantity, fuelConsumption)
    {
        Engine = engine;
        Tires = tires;
    }

    private string make;
    private string model;
    private int year;
    private double fuelQuantity;
    private double fuelConsumption;
    private Engine engine;
    private Tire[] tires;

    public string Make
    {
        get => make;
        set => make = value;
    }

    public string Model
    {
        get => model;
        set => model = value;
    }

    public int Year
    {
        get => year;
        set => year = value;
    }


    public double FuelQuantity
    {
        get => fuelQuantity;
        set => fuelQuantity = value;
    }


    public double FuelConsumption
    {
        get => fuelConsumption;
        set => fuelConsumption = value;
    }

    public Engine Engine
    {
        get => engine;
        set => engine = value;
    }
    public Tire[] Tires
    {
        get => tires;
        set => tires = value;
    }

    public void Drive(double distance)
    {
        double requirement = distance / 100 * FuelConsumption;

        if (FuelQuantity < requirement)
        {
            Console.WriteLine("Not enough fuel to perform this trip!");
        }
        else
        {
            FuelQuantity -= requirement;
        }
    }

    public override string ToString()
    {
        var result = new StringBuilder();
        result.AppendLine($"Make: {Make}");
        result.AppendLine($"Model: {Model}");
        result.AppendLine($"Year: {Year}");
        result.AppendLine($"Fuel: {FuelQuantity}");
        return result.ToString();
    }
}

public class Engine
{
    public Engine(int horsePower, double cubicCapacity)
    {
        HorsePower = horsePower;
        CubicCapacity = cubicCapacity;
    }
    public int HorsePower { get; set; }
    public double CubicCapacity { get; set; }
}

public class Tire
{
    public Tire(int year, double pressure)
    {
        Year = year;
        Pressure = pressure;
    }
    public int Year { get; set; }
    public double Pressure { get; set; }
}