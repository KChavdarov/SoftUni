using System.Text;

CarSalesman();
void OpinionPoll()
{
    List<Person> people = new List<Person>();
    int n = int.Parse(Console.ReadLine());
    for (int i = 0; i < n; i++)
    {
        string[] tokens = Console.ReadLine().Split(" ");
        string name = tokens[0];
        int age = int.Parse(tokens[1]);
        var person = new Person(name, age);
        people.Add(person);
    }

    people
        .Where(a => a.Age > 30)
        .OrderBy(a => a.Name)
        .ToList()
        .ForEach(Console.WriteLine);
}
void GetDateDifference()
{
    Console.WriteLine(DateModifier.CalculateDifference(Console.ReadLine(), Console.ReadLine()));
}
void SpeedRacer()
{
    var cars = new Dictionary<string, SpeedRacerCar>();
    int n = int.Parse(Console.ReadLine());
    for (int i = 0; i < n; i++)
    {
        string[] tokens = Console.ReadLine().Split(" ");
        string model = tokens[0];
        double fuelAmount = double.Parse(tokens[1]);
        double fuelConsumption = double.Parse(tokens[2]);
        var car = new SpeedRacerCar(model, fuelAmount, fuelConsumption);
        cars[model] = car;
    }

    string input = Console.ReadLine();
    while (input != "End")
    {
        string[] tokens = input.Split(" ");
        string model = tokens[1];
        int distance = int.Parse(tokens[2]);
        cars[model].Drive(distance);
        input = Console.ReadLine();
    }

    cars.Values.ToList().ForEach(Console.WriteLine);
}
void RawData()
{
    var cars = new List<RawDataCar>();
    int n = int.Parse(Console.ReadLine());
    for (int i = 0; i < n; i++)
    {
        string[] tokens = Console.ReadLine().Split(" ");
        string model = tokens[0];
        int engineSpeed = int.Parse(tokens[1]);
        int enginePower = int.Parse(tokens[2]);
        RawDataEngine engine = new RawDataEngine(engineSpeed, enginePower);
        int cargoWeight = int.Parse(tokens[3]);
        string cargoType = tokens[4];
        RawDataCargo cargo = new RawDataCargo(cargoWeight, cargoType);
        RawDataTire tire1 = new RawDataTire(double.Parse(tokens[5]), int.Parse(tokens[6]));
        RawDataTire tire2 = new RawDataTire(double.Parse(tokens[7]), int.Parse(tokens[8]));
        RawDataTire tire3 = new RawDataTire(double.Parse(tokens[9]), int.Parse(tokens[10]));
        RawDataTire tire4 = new RawDataTire(double.Parse(tokens[11]), int.Parse(tokens[12]));
        RawDataTire[] tires = new RawDataTire[] { tire1, tire2, tire3, tire4 };
        RawDataCar car = new RawDataCar(model, engine, cargo, tires);
        cars.Add(car);
    }

    string type = Console.ReadLine().ToLower();
    switch (type)
    {
        case "fragile":
            cars
                .Where(a => a.Cargo.Type == type && a.Tires.Any(a => a.Pressure < 1)).ToList()
                .ForEach(a => Console.WriteLine(a.Model));
            break;
        case "flammable":
            cars.Where(a => a.Cargo.Type == type && a.Engine.Power > 250).ToList()
                .ForEach(a => Console.WriteLine(a.Model));
            break;
    }
}
void CarSalesman()
{
    var engines = ParseEngineData();
    var cars = ParseCarData(engines);
    cars.Values.ToList().ForEach(Console.WriteLine);

    Dictionary<string, CarSalesmanEngine> ParseEngineData()
    {
        int n = int.Parse(Console.ReadLine());
        var engines = new Dictionary<string, CarSalesmanEngine>();
        for (int i = 0; i < n; i++)
        {
            string[] tokens = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string model = tokens[0];
            int power = int.Parse(tokens[1]);
            var engine = new CarSalesmanEngine(model, power);
            int displacement;
            string efficiency;
            if (tokens.Length == 3)
            {
                var success = int.TryParse(tokens[2], out displacement);
                if (success)
                {
                    engine.Displacement = displacement;
                }
                else
                {
                    efficiency = tokens[2];
                    engine.Efficiency = efficiency;
                }
            }
            else if (tokens.Length == 4)
            {
                displacement = int.Parse(tokens[2]);
                efficiency = tokens[3];
                engine.Displacement = displacement;
                engine.Efficiency = efficiency;
            }
            engines.Add(model, engine);
        }

        return engines;
    }

    Dictionary<string, CarSalesmanCar> ParseCarData(Dictionary<string, CarSalesmanEngine> engines)
    {
        var cars = new Dictionary<string, CarSalesmanCar>();
        int n = int.Parse(Console.ReadLine());
        for (int i = 0; i < n; i++)
        {
            string[] tokens = Console.ReadLine().Split(" ", StringSplitOptions.RemoveEmptyEntries);
            string model = tokens[0];
            string engineModel = tokens[1];
            CarSalesmanEngine engine = engines[engineModel];
            var car = new CarSalesmanCar(model, engine);
            int weight;
            string color;
            if (tokens.Length == 3)
            {
                var success = int.TryParse(tokens[2], out weight);
                if (success)
                {
                    car.Weight = weight;
                }
                else
                {
                    color = tokens[2];
                    car.Color = color;
                }
            }
            else if (tokens.Length == 4)
            {
                weight = int.Parse(tokens[2]);
                color = tokens[3];
                car.Weight = weight;
                car.Color = color;
            }
            cars.Add(model, car);
        }

        return cars;
    }
}
public class LabCar
{
    public LabCar()
    {
        Make = "VW";
        Model = "Golf";
        Year = 2025;
        FuelQuantity = 200;
        FuelConsumption = 10;
        Engine = new LabEngine(100, 1.6);
        Tires = new LabTire[]
        {
            new LabTire(2025,2.3),
            new LabTire(2025,2.3),
            new LabTire(2025,2.3),
            new LabTire(2025,2.3),
        };
    }
    public LabCar(string make, string model, int year) : this()
    {
        Make = make;
        Model = model;
        Year = year;
    }
    public LabCar(string make, string model, int year, double fuelQuantity, double fuelConsumption) : this(make, model, year)
    {
        FuelQuantity = fuelQuantity;
        FuelConsumption = fuelConsumption;
    }
    public LabCar(string make, string model, int year, double fuelQuantity, double fuelConsumption, LabEngine engine, LabTire[] tires) : this(make, model, year, fuelQuantity, fuelConsumption)
    {
        Engine = engine;
        Tires = tires;
    }

    private string make;
    private string model;
    private int year;
    private double fuelQuantity;
    private double fuelConsumption;
    private LabEngine engine;
    private LabTire[] tires;

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

    public LabEngine Engine
    {
        get => engine;
        set => engine = value;
    }
    public LabTire[] Tires
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
public class LabEngine
{
    public LabEngine(int horsePower, double cubicCapacity)
    {
        HorsePower = horsePower;
        CubicCapacity = cubicCapacity;
    }
    public int HorsePower { get; set; }
    public double CubicCapacity { get; set; }
}
public class LabTire
{
    public LabTire(int year, double pressure)
    {
        Year = year;
        Pressure = pressure;
    }
    public int Year { get; set; }
    public double Pressure { get; set; }
}
public class Person
{
    public Person()
    {
        Name = "No name";
        Age = 1;
    }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    private string name;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }
    private int age;

    public int Age
    {
        get { return age; }
        set { age = value; }
    }

    public override string ToString()
    {
        return $"{Name} - {Age}";
    }
}
public class Family
{
    public Family()
    {
        people = new List<Person>();
    }

    private List<Person> people;

    public void AddMember(Person person)
    {
        people.Add(person);
    }

    public Person GetOldestMember()
    {
        return people.OrderByDescending(a => a.Age).FirstOrDefault();
    }
}
public static class DateModifier
{
    public static int CalculateDifference(string dateStringA, string dateStringB)
    {
        var dateA = DateTime.Parse(dateStringA);
        var dateB = DateTime.Parse(dateStringB);

        return Math.Abs((int)(dateA - dateB).TotalDays);
    }
}
public class SpeedRacerCar
{
    public SpeedRacerCar(string model, double fuel, double fuelConsumption)
    {
        Model = model;
        FuelAmount = fuel;
        FuelConsumptionPerKilometer = fuelConsumption;
    }
    public string Model { get; set; }
    public double FuelAmount { get; set; }
    public double FuelConsumptionPerKilometer { get; set; }
    public double DistanceTravelled { get; set; }
    public void Drive(int distance)
    {
        double requirement = distance * FuelConsumptionPerKilometer;

        if (FuelAmount < requirement)
        {
            Console.WriteLine("Insufficient fuel for the drive");
        }
        else
        {
            FuelAmount -= requirement;
            DistanceTravelled += distance;
        }
    }

    public override string ToString()
    {
        return $"{Model} {FuelAmount:f2} {DistanceTravelled}";
    }
}
public class RawDataCar
{
    public RawDataCar(string model, RawDataEngine engine, RawDataCargo cargo, RawDataTire[] tires)
    {
        Model = model;
        Engine = engine;
        Cargo = cargo;
        Tires = tires;
    }
    public string Model { get; set; }
    public RawDataEngine Engine { get; set; }
    public RawDataCargo Cargo { get; set; }
    public RawDataTire[] Tires { get; set; }
}
public class RawDataEngine
{
    public RawDataEngine(int speed, int power)
    {
        Speed = speed;
        Power = power;
    }
    public int Speed { get; set; }
    public int Power { get; set; }
}
public class RawDataCargo
{
    public RawDataCargo(int weight, string type)
    {
        Weight = weight;
        Type = type;
    }
    public int Weight { get; set; }
    public string Type { get; set; }
}
public class RawDataTire
{
    public RawDataTire(double pressure, int age)
    {
        Pressure = pressure;
        Age = age;
    }
    public double Pressure { get; set; }
    public int Age { get; set; }
}
public class CarSalesmanCar
{
    public CarSalesmanCar(string model, CarSalesmanEngine engine)
    {
        Model = model;
        Engine = engine;
    }
    public CarSalesmanCar(string model, CarSalesmanEngine engine, int weight, string color) : this(model, engine)
    {
        Weight = weight;
        Color = color;
    }

    public string Model { get; set; }
    public CarSalesmanEngine Engine { get; set; }
    public int Weight { get; set; }
    public string Color { get; set; }
    public override string ToString()
    {
        var weight = Weight != 0 ? Weight.ToString() : "n/a";
        var color = Color ?? "n/a";
        var result = new StringBuilder();
        result.AppendLine($"{Model}:");
        result.AppendLine($"    {Engine}");
        result.AppendLine($"    Weight: {weight}");
        result.AppendLine($"    Color: {color}");
        return result.ToString().Trim();
    }
}
public class CarSalesmanEngine
{
    public CarSalesmanEngine(string model, int power)
    {
        Model = model;
        Power = power;
    }
    public CarSalesmanEngine(string model, int power, int displacement, string efficiency) : this(model, power)
    {
        Displacement = displacement;
        Efficiency = efficiency;
    }
    public string Model { get; set; }
    public int Power { get; set; }
    public int Displacement { get; set; }
    public string Efficiency { get; set; }
    public override string ToString()
    {
        var displacement = Displacement != 0 ? Displacement.ToString() : "n/a";
        var efficiency = Efficiency ?? "n/a";
        var result = new StringBuilder();
        result.AppendLine($"    {Model}:");
        result.AppendLine($"       Power: {Power}");
        result.AppendLine($"      Displacement: {displacement}");
        result.AppendLine($"     Efficiency: {efficiency}");
        return result.ToString().Trim();
    }
}