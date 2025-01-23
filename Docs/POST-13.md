![](../img/sqlinj.avif)

# Başlıq: SQL ve SQL Injection nədir?

## SQL nədir:

SQL (Structured Query Language), verilənlər bazasını idarə etmək və onlarla ünsiyyət qurmaq üçün istifadə olunan bir dildir. SQL vasitəsilə verilənlər bazasına məlumat əlavə etmək, silmək, yeniləmək və sorğular göndərmək mümkündür. Məsələn, bir e-ticarət saytında məhsul məlumatlarını saxlamaq, istifadəçi məlumatlarını qorumaq və hesabatlar hazırlamaq kimi əməliyyatlar SQL istifadə edərək həyata keçirilə bilər.

## SQL Injection nədir:

SQL Injection, veb saytlarında istifadəçilərdən alınan məlumatların düzgün şəkildə yoxlanılmaması nəticəsində pis niyyətli şəxslərin verilənlər bazasına icazəsiz giriş əldə etməsinə səbəb olan bir təhlükəsizlik zəifliyidir. Bu metodla hücum edən şəxslər; həssas məlumatları oğurlaya, verilənlər bazasındakı məlumatları dəyişdirə və ya tamamilə silə bilərlər.

### SQL Injection-un Zərərləri:

- **Həssas Məlumatların Oğurlanması:** İstifadəçi məlumatları və şifrələr əldə edilə bilər.
- **Verilənlər Bazasında Manipulyasiya:** Məlumatlar dəyişdirilə və ya zərər verilə bilər.
- **İcazəsiz Giriş:** Administrator hüquqları əldə edilərək sistem ələ keçirilə bilər.
- **Xidmətin Dayandırılması:** Verilənlər bazasına zərər verilərək sistemin işləməsi əngəllənə bilər.

### SQL Injection-dan qorunma:

1. İstifadəçidən alınan məlumatlar mütləq yoxlanmalı və təmizlənməlidir.
2. Verilənlər bazasına giriş icazələri məhdudlaşdırılmalıdır.
3. Xətalar istifadəçilərə açıq göstərilməməlidir.
4. Təhlükəsizlik divarları və müntəzəm təhlükəsizlik testləri istifadə edilməlidir.

### Nəticə:

SQL Injection, veb tətbiqləri üçün ən təhlükəli təhlükəsizlik boşluqlarından biridir və adətən proqramçılar tərəfindən diqqət edilməyən kiçik detallardan yaranır. Bu cür hücum yalnız bir sistemin təhlükəsizliyini təhdid etmir, həm də istifadəçilərin məxfiliyini və məlumatların bütövlüyünü təhlükəyə atır.

Lakin, SQL Injection hücumlarının qarşısını almaq mümkündür. İstifadəçi girişlərinin diqqətlə yoxlanılması, təhlükəsiz kod yazma texnikalarının tətbiqi və mütəmadi təhlükəsizlik testlərinin aparılması bu cür boşluqları böyük ölçüdə aradan qaldıra bilər. Veb tətbiqlərdə təhlükəsizlik yalnız bir seçim deyil, vacib bir tələbdir.

Proqramçılar və sistem administratorları bu təhdidlərə qarşı proaktiv yanaşma tətbiq etməli və sistemlərini daima yeniləməlidirlər. Yaddan çıxarmamalıyıq ki, bir təhlükəsizlik boşluğu yalnız bir hücumçuya deyil, həm də bir müəssisənin nüfuzuna və istifadəçi etibarına zərər verə bilər.

SQL Injection-ın qarşısını almaq üçün lazım olan addımlar kiçik görünə bilər, amma təsiri böyükdür. Düzgün tədbirlər görərək bu təhlükəni tamamilə aradan qaldırmaq mümkündür.

[**_by knvmrt_**](https://github.com/knvmrt)