![](../Img/mcp.avif)

# Başlıq: MCP nədir?

MCP (Model Context Protocol) — Süni intellekt (AI) modeli üçün kontekst (context) təmin etmək üçün hazırlanmış protokoldur və böyük dil modellərinə [LLM – Large Language Model](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-19.md) kontekst təmin etmək üçün istifadə olunan bir protokoldur. MCP-nin əsas məqsədi modelə istiqamət vermək, onu müəyyən bir vəzifəyə uyğunlaşdırmaq və daha məqsədyönlü cavablar yaratmasını təmin etməkdir. MCP istifadə edildikdə, model daha "şəxsi" və kontekstə uyğun davranır.

### Məqsəd və Tətbiq Sahələri:

- Chet botlar, asistanlar(köməkçilər).
- Texniki dəstək sistemləri.
- Tədris və təlim proqramları.
- Avtomatlaşdırılmış məzmun istehsalı.
- API əsaslı məsləhət sistemləri.

### İş Prinsipi:

- **System Prompt / Rol Təyinatı –** Modelin necə davranmalı olduğunu bildirən təlimat: "Sən texniki dəstək mütəxəssisisən." kimi.
- **İstifadəçi Konteksti –** İstifadəçi haqqında öncədən məlum olan məlumat: ad, yaş, əvvəlki suallar və s.
- **Keçmiş və Yaddaş –** Əvvəlki mesajlaşma tarixçəsi, modelin cavablarında ardıcıllıq yaradır.
- **Lokal və ya Uzaq Yaddaş –** Bəzi sistemlər bu məlumatları JSON, Markdown və ya verilənlər bazasında saxlayır.

### Məlumat Təhlükəsizliyi: 

MCP kontekstində istifadəçi məlumatları istifadə olunduğu üçün məxfilik vacibdir. Həssas məlumatlar yalnız lokal mühitdə işlənməli və şifrələnmiş formatda saxlanmalıdır. Açıq mənbə (open-source) həllər bu cəhətdən daha çox nəzarət imkanı yaradır.

### Üstünlükləri:

- **Şəxsi Uyğunlaşma –** İstifadəçiyə uyğun cavablar.
- **Vəzifəyə Fokuslanma –** Modelin yoldan kənarlaşmasının/sapmasının qarşısını alır.
- **Effektivlik –** Daha sürətli və məqsədyönlü cavablar.
- **Modulluq və Ölçəklənmə –** İstənilən layihəyə uyğunlaşdırıla bilər.

### Proqramlaşdırma Dilləri və İnkişaf İmkanları:

MCP xüsusi texnologiyaya bağlı deyil. Onun əsas gücü məntiqi və modullu strukturundadır. Bu səbəbdən istənilən [proqramlaşdırma dili](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-3.md) ilə MCP sistemi inkişaf etdirilə bilər və MCP qatmanlardan ibarət olduğu üçün MCP-nin hər bir qatını fərqli proqramlaşdırma dilləri ilə inkişaf etdirmək mümkündür və hətta praktikada geniş yayılmışdır. Şərt odur ki, bu qatlar API-lərlə və ya fayl format əsaslı interfeyslərlə bir-biri ilə əlaqə qura bilsin məsələn: (JSON, HTTP, Socket, Markdown, TXT və s.).

#### Nümunə:

JavaScript (Node.js): `contextBuilder.js` - İstifadəçi və sistem məlumatlarını toplayır.
Python: `promptGenerator.py` - Məqsədə uyğun prompt yaradır.
C# (.NET): `memoryManager.cs` - Keçmiş məlumatları saxlayır və oxuyur.
JavaScript (Node.js): `llmClient.js` - ChatGPT, Claude və digər LLM API-lərlə əlaqə qurur.

### Niyə bu qədər elastikdir?:

- Kontekst məlumatlarını JSON, Markdown, YAML və ya verilənlər bazasında saxlamaq mümkündür.
- Promptlar statik və ya dinamik şəkildə yaradıla bilər.
- Lokal yaddaş və ya server yaddaşı istifadə oluna bilər.
- Səsli komandaları da MCP sisteminə daxil etmək olar.

### Ən Çox İstifadə Olunan Dillər:

MCP-ni inkişaf etdirmək üçün istənilən proqramlaşdırma dili istifadə edilə bilər. Bununla belə, aşağıdakılar adətən üstünlük verilən dillərdir:

| Dil | Tətbiq sahəsi | Üstünlükləri |
|----------|----------|----------|
| Python   | Chat bot, asistanlar, prototiplər   | OpenAI SDK, rahat string idarəsi   |
| JavaScript / Node.js   | Web əsaslı interfeys və API-lər   | Realtime imkanlar, prompt dinamizmi   |
| C# / .NET   | Korporativ tətbiqlər, desktop proqramlar  | Güclü infrastruktur, geniş kitabxana dəstəyi  |
| Go   | Server performansı  | Yüngül və sürətli  |
| Rust   | Təhlükəsiz və sürətli sistemlər  | Yaddaş təhlükəsizliyi, aşağı səviyyəyə çıxış  |


[**_by knvmrt_**](https://github.com/knvmrt)