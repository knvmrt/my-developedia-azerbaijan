---
layout: default
title: "What is ASCII, Unicode, UTF-8?"
---

![](../Img/ascii.avif)

# Başlıq: ASCII, Unicode, UTF-8 nədir?

## ASCII:

ASCII (American Standard Code for Information Interchange), 1960-cı illərdə Amerika Standartları İnstitutu (ANSI) tərəfindən hazırlanmış bir xarakter kodlama standartıdır. Bu standart kompüter sistemləri arasında mətn əsaslı məlumat mübadiləsini təmin etmək məqsədi ilə yaradılmışdır. ASCII hər bir xarakteri bir rəqəmlə təmsil edir və bu rəqəmlər 7-bitlik (0-127) aralığını əhatə edir.

### ASCII-nin Tarixi və İnkişafı:

- **1963:** *İlk Standart:* İlk olaraq teletayp (teleprinter) maşınlarında istifadə üçün hazırlanmışdır.
- **1977:** *Təkmilləşdirilmiş Versiyalar:* ASCII kompüter dünyasının inkişafı ilə daha çox qəbul edilmişdir.
- **Müasir İstifadə:** ASCII bu gün Unicode kimi daha geniş standartlara çevrilmişdir, lakin hələ də əsas baza olaraq istifadə edilir.

### ASCII-nin Texniki Detalları:

- **8-bitlik Sistem:** ASCII standartı əslində 8 bitlik sistemdə işləyir, lakin yalnız 7 biti xarakterlərin təmsili üçün istifadə edir və yerdə 1 bit isə boş qalır.
- **Nəzarət Xarakterləri (0-31):** Printer və digər cihazları idarə etmək üçün istifadə edilir. Məsələn:
    - 0: Null (Heç bir əməliyyat etmir)
    - 10: Sətir keçidi (Line Feed - LF)
- **Yazıla bilən Xarakterlər (32-126):** Hərflər, rəqəmlər, durğu işarələri və simvollar. Məsələn:
    - 65: 'A'
    - 97: 'a'
- **127:** Del (silinmə) xarakteri olaraq təyin edilmişdir.

### ASCII-nin Gündəlik Həyatda İstifadəsi:

- **E-poçt və Mətn Mesajlaşmaları:** E-poçt standartları adətən ASCII üzərində qurulmuşdur.
- **Fayl Formatları:** Sadə mətn faylları (.txt) adətən ASCII xarakterlərindən istifadə edərək yazılır.
- **Proqramlaşdırma:** Çox proqramlaşdırma dillərində xarakterlər ASCII kodları ilə işlənir. 

***Məsələn:***
```bash
char c = 'M';
int asciiCode = (int)c; // Nəticə: 77
```

### ASCII-nin Məhdudiyyətləri

ASCII-nin ən böyük məhdudiyyəti yalnız İngilis dili xarakterlərini dəstəkləməsidir. Məsələn, Azərbaycan əlifbasından (ç, ş, ğ, ı, ə, ö, ü) ASCII cədvəlində yoxdur. Bu məhdudiyyət UTF-8 və Unicode kimi daha geniş kodlama standartlarının inkişafına səbəb olmuşdur.

## Unicode:

Unicode, müxtəlif dillər və yazı sistemləri üçün vahid bir xarakter kodlama standartıdır. ASCII yalnız İngilis dili xarakterlərini dəstəklədiyi halda, Unicode dünyadakı bütün dillərin və xüsusi simvolların təmsil olunmasını təmin edir. 

***Əsas xüsusiyyətləri:***

- **Daha Geniş Aralıq:** Unicode 1 milyondan çox xarakteri təmsil edə bilir.
- **Hərflər və Simvollar:** Azərbaycan əlifbasından tutmuş Orxon(Göktürklər) əlifbasına və hətta emojilərə qədər geniş bir spektri əhatə edir.

### Unicode İş Prinsipi:

Unicode-un əsas məqsədi bütün dillərdəki xarakterləri unikal bir kod nömrəsi ilə təmsil etməkdir. Unicode iş prinsipi aşağıdakı kimi işləyir:

1. **Kod Nömrəsi:** Unicode hər bir xarakterə unikal bir kod nömrəsi (code point) təyin edir. 
    ```bash
    " A " üçün kod nömrəsi: U+0041
    " ç " üçün kod nömrəsi: U+00E7
    " 𐰀 " üçün kod nömrəsi: U+10C00
    " © " üçün kod nömrəsi: U+00A9
    ```

1. **Abstrakt Kodlama:** Bu kod nömrələri sadəcə abstrakt olaraq təyin edilir, yəni bu mərhələdə onların kompüterdə necə saxlanılacağı və ya ötürüləcəyi müəyyən deyil.

2. **Kodlama Formatları:** Unicode xarakterlərini saxlayıb ötürmək üçün müxtəlif kodlama formatlarından istifadə olunur, məsələn, UTF-8, UTF-16, və UTF-32.

## UTF-8:

UTF-8 (Unicode Transformation Format-8), Unicode xarakterlərini kodlamaq üçün ən geniş istifadə edilən standartlardan biridir. Proqramçılar olaraq UTF-8`i HTML meta teglərin də görürük.

```html
// HTML Meta tegləri:
<head>
    <meta charset="UTF-8"> // UTF-8 kodlama formatını istifadə edir
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Developedia Azerbaijan</title>
</head>
```

***Əsas xüsusiyyətləri:***

- **ASCII ilə Uyğunluq:** UTF-8 ilk 128 xarakter üçün ASCII ilə tam uyğundur. Yəni ASCII xarakterləri UTF-8-də də eyni şəkildə təmsil edilir.
- **Dinamik Kodlama:** UTF-8 xarakterləri təmsil etmək üçün 1-dən 4 bayta qədər istifadə edə bilər.
    - **1 Bayt:** ASCII xarakterləri üçün (məsələn: A, B, C).
    - **2 və ya Daha Çox Bayt:** Unicode xarakterləri üçün (məsələn: ç, ə, ü, 你好).
- **Effektivlik:** Sadə mətnlərdə (məsələn, İngilis dili mətnlərində) daha az yer tutaraq daha səmərəli işləyir.

## ASCII, Unicode və UTF-8-in Fərqləri Cədvəli:

| Xüsusiyyət | ASCII | Unicode | UTF-8 |
|----------|----------|----------|----------|
| VKodlama Aralığı   | 7-bit (128 xarakter)   | 1 milyondan çox xarakter   | 1-dən 4 bayta qədər   |
| Dəstəklənən Dillər   | Yalnız İngilis dili   | Bütün dillər   |  Unicode əsaslı (Bütün dillər)   |
| Uyğunluq   | Sadədir  | Böyük dil dəstəyi  | ASCII ilə uyğun  |


### Unicode və UTF-8-in Gündəlik İstifadəsi:

- **Veb Saytlar:** Demək olar ki, bütün müasir veb saytlar UTF-8 kodlamasından istifadə edir.
- **Emoji və Simvollar:** Unicode olmasaydı, emojilərin və xüsusi simvolların istifadəsi mümkün olmazdı.
- **Proqramlaşdırma:** Unicode və UTF-8, müasir proqramlaşdırma dillərində mətnlərin düzgün işlənməsini təmin edir.

### UTF-8 İş Prinsipi:

UTF-8, Unicode xarakterlərini baytlar şəklində təmsil edən bir kodlama formatıdır. Onun iş prinsipi dinamik və səmərəlidir.

1. **Çoxbaytlı Kodlama:** Unicode xarakterləri bir neçə bayt ilə kodlanır:

- Xarakter nə qədər kompleksdirsə (yəni kod nömrəsi böyükdürsə), o qədər çox bayt istifadə edilir:
    - 1 bayt: ASCII xarakterləri (U+0000–U+007F).
    - 2 bayt: Əsas Avropa dillərinin xarakterləri (U+0080–U+07FF).
    - 3 bayt: Çox sayda dillərin xarakterləri (U+0800–U+FFFF).
    - 4 bayt: Rəsm heroqlifləri və nadir simvollar (U+10000 və yuxarı).

2. **Baytların Quruluşu:** UTF-8 xarakterləri kodlamaq üçün xüsusi bit nümunələri istifadə edir:

    - 1 bayt: `0xxxxxxx`
    - 2 bayt: `110xxxxx 10xxxxxx`
    - 3 bayt: `1110xxxx 10xxxxxx 10xxxxxx`
    - 4 bayt: `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx`

***Məsələn:***

"ç" (U+00E7) üçün kodlama: `11000011 10100111` (2 bayt).

### Nəticə

Unicode və UTF-8, ASCII-nin məhdudiyyətlərini aradan qaldıraraq müasir texnologiyaların qlobal dil dəstəyi ilə işləməsinə imkan yaradır. ASCII, Unicode-un təməl daşı olsa da, bu iki standartın inkişafı dünya üzrə mətn və məlumat mübadiləsini mümkün etmişdir. Hazırda Unicode kimi standartlar önə çıxa bilər, lakin ASCII-nin əsası müasir sistemlərdə hələ də aktuallığını qoruyur.

[**_by knvmrt_**](https://github.com/knvmrt)