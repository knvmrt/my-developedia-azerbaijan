![](../img/oss.avif)

# Başlıq: Əməliyyat sistemləri və işləmə məntiqi.


**Əməliyyat sistemi** _(Operating System - OS)_, kompüterin və ya başqa bir cihazın resurslarını idarə edən və istifadəçilərin proqramları icra edə bilməsi üçün bir mühit yaradan əsas proqram təminatıdır. Əməliyyat sistemi həm də texniki təchizat (hardware) ilə proqram (software) arasındakı əlaqəni təmin edir. Əməliyyat sistemləri istifadəçinin təcrübəsini və cihazın funksionallığını müəyyən edir. Kompüterlər, smartfonlar, serverlər və digər cihazlar əməliyyat sistemləri olmadan effektiv şəkildə işləyə bilməz.

### Əsas funksiyaları:

1. **Resursların İdarə Edilməsi:** Əməliyyat sistemi yaddaş, prosessor, giriş-çıxış qurğuları kimi sistem resurslarını idarə edir və bölüşdürür.
2. **Proseslərin İdarə Edilməsi:** Proqramların icrası zamanı əməliyyat sistemi prosesləri yaradır, icra edir və bir-birindən təcrid edir.
3. **Fayl Sistemi:** Əməliyyat sistemi faylların və qovluqların yaradılması, saxlanılması və idarə olunmasını təmin edir.
4. **Təhlükəsizlik və İcazə:** Əməliyyat sistemi istifadəçilər arasında təhlükəsizlik və məlumatların qorunmasını təmin edir, istifadəçilərə və tətbiqlərə müxtəlif səviyyəli icazələr verir.
5. **İstifadəçi İnterfeysi:** Əməliyyat sistemi istifadəçilərə cihazı idarə etmək üçün qrafik (GUI) və ya mətn (CLI) əsaslı interfeys təqdim edir.

### Populyar Əməliyyat Sistemləri:

- **Windows:** Microsoft tərəfindən hazırlanmış və dünyada ən çox istifadə olunan əməliyyat sistemlərindən biridir. Windows OS fərdi kompüterlər, serverlər, **ATM** _(Automated Teller Machine - Avtomatlaşdırılmış Kassa Aparatı)_ və **POS** _(Point of Sale - Satış nöqtəsi)_ terminal üçün geniş istifadə olunur.

- **macOS:** Apple tərəfindən hazırlanmış əməliyyat sistemidir və əsasən Mac kompüterlərində istifadə olunur.

- **Linux:** Açıq mənbə kodlu, azad proqram kimi təqdim olunan əməliyyat sistemidir. Linux-un bir çox fərqli paylamaları, versiyaları var (Debian, Kali, Ubuntu, Fedora, Arch və s.), fərdi kompüterlər, serverlər üçün çox geniş istifadə olunur. **ATM** _(Automated Teller Machine - Avtomatlaşdırılmış Kassa Aparatı)_ və **POS** _(Point of Sale - Satış nöqtəsi)_ terminal üçün çox geniş istifadə olunmasa də bəzi ölkələr və ya firmalar da istifadə edilir. Linux OS xüsusilə serverlərdə geniş istifadə olunur. Serverlər də ən çox istifadə edilən paylamaları, versiyalar (Debian, Ubuntu, Fedora, Arch).

- **Android:** Mobil cihazlar üçün Google tərəfindən hazırlanmış əməliyyat sistemidir və dünyada ən çox istifadə olunan mobil OS-lərdən biridir.

- **iOS:** Apple tərəfindən iPhone və iPad cihazları üçün hazırlanmış əməliyyat sistemidir. Onu digər mobil əməliyyat sistemlərin dən fərqləndirən onun təhlükəsizliyi və sürətli işləməsidir.

<img src="../img/oss-2.avif" alt="Resim" width="700"/>

### Nüvə (Kernel):

Nüvə (Kernel) əməliyyat sisteminin əsas hissəsidir və kompüter resurslarına birbaşa çıxışı təmin edən bir təbəqədir. O, texniki təchizat (hardware) və proqram (software) arasında vasitəçi rolunu oynayır.

**Nüvənin əsas vəzifələri:**

- **Yaddaş İdarəetməsi:** Yaddaş (RAM) cihazın müxtəlif prosesləri tərəfindən istifadə olunur. Kernel bu yaddaşı bölüşdürür və idarə edir. Hər bir proses üçün ayrı-ayrı yaddaş sahələri ayırır və proseslərin bir-birinin yaddaşına müdaxilə etməsini qarşısını alır.

- **Proseslərin İdarə Edilməsi:** Kernel cihazda eyni anda bir neçə prosesi (proqramı) işə salır və bu proseslərin resurslardan düzgün istifadə etməsini təmin edir. Həm də onların növbəli şəkildə prosessoru istifadə etməsini təmin edir.

- **Giriş-Çıxış İdarəetməsi:** Nüvə giriş-çıxış cihazları (disklər, klaviatura, ekran, printer və s.) arasında əlaqəni idarə edir. O, giriş-çıxış əməliyyatlarını həyata keçirir və onları proseslərə çatdırır.

- **Multitasking (Çoxtapşırıqlılıq):** Kernel prosessorun (CPU) nüvələrini bir neçə proqram arasında bölüşdürməklə eyni vaxtda çoxsaylı işlərin yerinə yetirilməsini təmin edir. Bu proseslər sürətlə bir-birini əvəz edir, beləliklə istifadəçilər hər prosesin eyni vaxtda işlədiyini hiss edirlər.

**Qeydlər:** Əslin də Linux əməliyyat sistemi deyil. Linux əməliyyat sisteminin istifadə etdiyi nüvənin (kernel) adıdır. Linux nüvəsinin adını tərtibatçısı Linus Benedict Torvalds adından alınmışdır. Hətda Linux nüvəsinin tam adı GNU (General Public License - Ümumi İctimai Lisenziya) Linux dur.

### Nəticə:

Əməliyyat sistemi cihazın işləməsini təşkil edən əsas proqram təminatıdır. Nüvə (kernel) vasitəsilə resursların idarə olunması, proseslərin icrası və sistem çağırışları ilə proqramların cihaz resurslarından istifadə etməsi təmin edilir. Həmçinin istifadəçi interfeysi (CLI və ya GUI) vasitəsilə istifadəçi əməliyyat sistemi ilə birbaşa əlaqə qura bilir. Bu məntiq və proseslər birlikdə əməliyyat sistemlərinin işləmə mexanizmini formalaşdırır.

**Əməliyyat sitemi ilə əlaqəli müzakirələrim:**

[CLI və GUI nədir?](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-2.md)

[**_by knvmrt_**](https://github.com/knvmrt)
