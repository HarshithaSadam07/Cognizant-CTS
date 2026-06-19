using NUnit.Framework;
using CalcLibrary;

namespace CalculatorTests;

[TestFixture]
public class CalculatorTests
{
    private SimpleCalculator calculator;

    [SetUp]
    public void Setup()
    {
        calculator = new SimpleCalculator();
    }

    [TearDown]
    public void Cleanup()
    {
        calculator.AllClear();
    }

    [Test]
    [TestCase(10, 20, 30)]
    [TestCase(5, 15, 20)]
    [TestCase(100, 200, 300)]
    public void TestAddition(double a, double b, double expected)
    {
        double result = calculator.Addition(a, b);
        Assert.That(result, Is.EqualTo(expected));
    }
}