![](../Img/vm-1.avif)

# Başlıq: Virtual Maşın (VM) Nədir?

Virtual maşın (VM), fiziki kompüter üzərində çalışan, bir kompüterin bütün xüsusiyyətlərini təqlid edən proqram təminatıdır. Virtual maşınlar bir serverin resurslarını bölərək bir neçə virtual sistemin işləməsinə imkan yaradır. Bu, avadanlığın daha səmərəli istifadəsini və eyni fiziki serverdə müxtəlif əməliyyat sistemlərinin bir arada işləməsini mümkün edir.

### Virtual Maşın Növləri:
1. **Sistem Virtual Maşınları (System Virtual Machines):** Bu tip virtual maşınlar tam bir avadanlıq platformasını təqlid edir və istifadəçilərə bir əməliyyat sistemi qurub tam funksional kompüter kimi istifadə etmə imkanı verir. Məsələn, VMware, Hyper-V və VirtualBox bu kateqoriyaya aiddir.
2. **Proses Virtual Maşınları (Process Virtual Machines):** Bu, yalnız bir tətbiqin və ya prosesin işlədilməsi üçün nəzərdə tutulmuş yüngül virtual maşınlardır. Java Virtual Machine (JVM) və .NET CLR bu tip maşınların nümunələridir.

### Üstünlükləri:

- **Resursların Səmərəli İstifadəsi:** Fiziki avadanlığın bir neçə virtual maşınla paylaşılmasını təmin edir.
- **Elastiklik:** Fərqli əməliyyat sistemlərinin eyni cihazda işlədilməsinə imkan verir.
- **Təhlükəsizlik və İzolyasiya:** Bir virtual maşındakı problem digərlərinə təsir etməz.
- **Asan Yedəkləmə:** VM-lər fayl kimi saxlanılıb asanlıqla yedəklənə bilər.

### Dezavantajları:

- **Performans:** Fiziki maşınlar qədər sürətli olmaya bilər.
- **Resurs İstehlakı:** Bir neçə VM, fiziki resursları tez bir zamanda tükədə bilər.
- **Maliyet:** Lisenziya və avadanlıq xərcləri arta bilər.

### Virtual Maşınların İstifadə Sahələri:

1. **Test və İnkişaf:** Tərtibatçılar, fərqli mühitləri təqlid edərək proqramlarını test edir və inkişaf etdirirlər.
2. **Server Konsolidasiyası:** Bir neçə fiziki serverin yerini ala bilər.
3. **Təhsil:** Fərqli əməliyyat sistemlərinin öyrənilməsi üçün istifadə olunur.
4. **Bulud Hesablama:** Bulud infrastrukturlarında (AWS, Azure) VM-lər mühüm rol oynayır.

### Populyar Virtual Maşın Proqramları:

1. [**VMware:**](https://blogs.vmware.com/workstation/2024/05/vmware-workstation-pro-now-available-free-for-personal-use.html) Bazarın ən populyar virtualizasiya həllərindən biridir və həm fərdi istifadəçilər, həm də korporativ həllər üçün müxtəlif versiyaları mövcuddur.
2. [**Oracle VirtualBox:**](https://www.virtualbox.org/) Açıq mənbəli və pulsuz bir virtualizasiya proqramıdır. Xüsusilə fərdi istifadəçilər və kiçik layihələr üçün uyğundur.
3. **Microsoft Hyper-V:** Windows Server və Windows 10/11 Pro versiyalarında mövcud olan inteqrasiya edilmiş bir virtualizasiya platformasıdır.
4. **KVM (Kernel-based Virtual Machine):** Linux əsaslı açıq mənbəli bir virtualizasiya həllidir və xüsusilə Linux sistemlərində güclü bir alternativ təklif edir.

### Virtual Maşınlar və Bulud Hesablama:

Virtual maşınlar, bulud hesablama infrastrukturunun əsasını təşkil edir. Bulud təminatçıları (Amazon AWS, Microsoft Azure, Google Cloud) istifadəçilərə virtual maşınları icarəyə götürmə imkanı verərək çevik və miqyaslana bilən hesablama resursları təmin edir. İstifadəçilər, avadanlıq idarəçiliyi ilə məşğul olmadan ehtiyaclarına görə CPU, yaddaş və saxlama resurslarını artırıb azalda bilərlər.

<img src="../Img/vm-2.avif" alt="Resim" width="700"/>

### Nəticə:

Virtual maşınlar, müasir hesablama dünyasında mühüm rol oynayır. Həm fərdi istifadəçilər, həm də müəssisələr üçün elastiklik, səmərəlilik və təhlükəsizlik təmin edən bu texnologiya, proqram inkişafından server idarəçiliyinə, test mühitlərindən təhsil tətbiqlərinə qədər bir çox fərqli sahədə istifadə olunur. Lakin, virtual maşınların effektiv istifadəsi üçün resurs idarəçiliyinə diqqət yetirilməsi və performans itkilərinin nəzərə alınması vacibdir.

[**_by knvmrt_**](https://github.com/knvmrt)
