![](https://i.imgur.com/KJ3s0uT.png)

# Başlıq: C# ilə dairənin çevrəsini hesablamaq.

```csharp
class Program
{
    static void Main()
    {
        const double pi = 3.14159; // Dairənin çevrəsini hesablamaq üçün sabit pi dəyərini təyin edirik.

        Console.Write("Enter the diameter (default unit: cm): "); // İstifadəçidən diametri almaq üçün bir mesaj göstəririk.
        string input = Console.ReadLine(); // İstifadəçidən girişi sətir kimi alırıq. İstifadəçinin daxil etdiyi dəyər.

        if (double.TryParse(input, out double dia)) // İstifadəçidən alınan dəyəri `double` tipə çevirir. Əməliyyat uğurlu olarsa, `input` dəyəri `cap` dəyişəninə təyin edilir.
        {
            double circle = pi * dia; // Dairənin çevrəsini hesablamaq üçün o, pi-ni diametrə vurur və nəticəni 'circle' dəyişəninə təyin edir.
            Console.WriteLine($"Circumference of a circle with a diameter of {dia} cm: {circle:F2} cm."); // `circle` iki onluq olaraq ekrana yazılır.
        }
        else
        {
            Console.WriteLine("Please enter a valid number."); // İstifadəçi ədəd xaricin də dəyər daxil edərsə xəta mesajı verəcək.
        }
    }
}
```

### Kodun riyazi düsturları: 

<img src="https://i.imgur.com/kDMD3NY.png" alt="Resim" width="700"/>

**Qısa məlumat:** `{circle:F2}` ədədin onluq hissəsini 2 rəqəmli olaraq yuvarlaqlaşdıraraq göstərir və rəqəmi daha oxunaqlı edir.

[**_by knvmrt_**](https://github.com/knvmrt)