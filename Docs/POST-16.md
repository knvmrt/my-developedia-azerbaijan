![](https://i.imgur.com/GBmigSM.png)

# Başlıq: WSL (Windows Subsystem for Linux) Nədir?

Windows Subsystem for Linux (WSL), Microsoft tərəfindən hazırlanmış bir xüsusiyyətdir və Windows əməliyyat sistemində Linux nüvəsini işlətməyə imkan verir. WSL, istifadəçilərə Linux komutlarını işlətməyi, inkişaf mühitləri qurmağı və fərqli Linux alətlərindən istifadə etməyi təmin edir.

### WSL-in Tarixi və İnkişafı:

- İlk dəfə **2016-cı** ildə Windows 10-un xüsusiyyəti olaraq təqdim edilmişdir.
- Əvvəlki versiya olan WSL 1, Linux sistem çağırışlarını **Windows nüvəsinə uyğunlaşdırmaq üçün bir tərcümə qatından istifadə edirdi.**
- **WSL 2 isə 2019-cu** ildə təqdim edildi və bu versiya **Linux nüvəsini tam olaraq virtual maşın mühitində işlədərək performansı əhəmiyyətli dərəcədə artırdı.**

### WSL-in İşləmə Prinsipi:

WSL istifadəçilərin xarici virtual maşına ehtiyac duymadan Linux nüvəsini Windows Hyper-V texnologiyası vasitəsilə [**_virtual maşında (VM)_**](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-10.md) işlədir. Linux nüvəsinə birbaşa çıxış əldə etməsinə imkan yaradır. İstifadəçilər Linux komandalarını `CMD` və ya `PowerShell`  kimi interfeyslərdən birbaşa işlədə bilərlər. Məsələn, `sudo`, `apt`, `bash`, `ls`, `grep` kimi əmrləri WSL üzərindən istifadə edə bilərsiniz. Bu istifadə üsuluna [**_CLI (Command Line Interface - Komanda xətti interfeysi)_**](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-2.md) deyirlər 

### WSL-dən İstifadənin Üstünlükləri:

- **Developerlər(İnkişafçılar, Proqramçılar) üçün İdeal Mühit:** WSL, inkişafçılara Linux mühitində tətbiq inkişaf etdirmək imkanı verir. Xüsusilə, veb inkişafı və məlumat elmi sahələrində böyük rahatlıq yaradır.
- **Performans və Yüngüllük:** Ənənəvi virtual maşınlardan fərqli olaraq, WSL daha az resurs istifadə edir və daha sürətlidir.
- **Windows və Linux-un Ən Yaxşı Xüsusiyyətlərini Birləşdirir:** İstifadəçilər eyni anda həm Windows, həm də Linux alətlərindən problemsiz istifadə edə bilərlər.
- **Docker və Kubernetes Dəstəyi:** WSL 2, Docker kimi alətlərlə asan inteqrasiya təmin edir.

### WSL-in Qurulması:

  1. **Windows da Funksiyaları Aktiv Etmək:**
  
     - **"Windows Features"** pəncərəsində **"Windows Subsystem for Linux"** və **"Virtual Machine Platform"** seçimlərini aktivləşdirin.

  2. **Linux Paylanmasını(Distributions) Seçmək:**

     - **Microsoft Store-dan və ya Linux Paylayıcılarının(Distributivlərinin) Rəsmi Saytlarından**  `Debian`, `Ubuntu`, `Kali Linux`, `Fedora`, `Arch`  kimi paylanmaları(distros) endirib quraşdıra bilərsiniz.

  3. **WSL 2-yə Yüksəltmək:**
  
  - Aşağıdakı əmr vasitəsilə WSL 2-ni aktivləşdirə bilərsiniz:

  ```bash
  wsl --set-version <paylanma_adı> 2
  ```

### WSL və Ənənəvi Virtual Maşınlar Arasındakı Fərqlər:

| Xüsusiyyətlər | WSL | Virtual Maşın (VM) |
|----------|----------|----------|
| Performans   | Daha sürətli   | Daha yavaş   |
| Resurs İstifadəsi   | Daha az   | Daha çox   |
| VerLinux Nüvəsi   | WSL 2 ilə tam nüvə  | Tam nüvə  |
| İstifadə Rahatlığı   | Daha asan quraşdırma və istifadə  | Daha mürəkkəb və qarışıq  |

### Nəticə:

WSL, developerlər(inkişafçılar, proqramçılar) və sistem administratorları üçün əla bir vasitədir. Windows istifadəçilərinə Linux-un gücünü, sürətini gətirərək platformalararası keçidi asanlaşdırır. Həm tələbələr, həm də mütəxəssislər üçün ideal bir həll təqdim edir. Microsoft, WSL üzərində davamlı təkmilləşdirmələr edərək performansı artırmağı və daha istifadəçi dostu xüsusiyyətlər təqdim etməyi hədəfləyir. Xüsusilə, WSL 2 ilə Docker və Kubernetes kimi alətlərin daha geniş istifadəçi kütləsinə çatması mümkün olur.

[**_by knvmrt_**](https://github.com/knvmrt)