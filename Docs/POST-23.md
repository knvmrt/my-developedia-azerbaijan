![](../Img/topologiya.avif)

# Başlıq: İnternet Topologiyası nədir?

**İnternet topologiyası –** İnternet bu gün milyardlarla cihazı bir-birinə bağlayan qlobal ünsiyyət şəbəkəsidir. Şəbəkənin quruluşunu izah etmək üçün topologiya anlayışı istifadə olunur. Topologiya – şəbəkədəki cihazların (kompüter, server, router və s.) necə bağlandığını və məlumatın hansı yollarla ötürüldüyünü göstərir. İnternet topologiyası həm fiziki bağlantıları (kabel, fiber optik, simsiz əlaqə), həm də məntiqi quruluşu (IP ünvanlama, yönləndirmə cədvəlləri, protokollar) əhatə edir. Sadə dillə desək, bu şəhərləri birləşdirən yol şəbəkəsinə bənzəyir, amma burada şəhərlər yerinə milyonlarla **şəbəkə və cihaz**, yollar yerinə isə **məlumat axınları** _(trafik)_ var.

### İnternet topologiyasının qat quruluşu:

İnternet vahid bir mərkəzdən idarə olunan sistem deyil. O, çoxlu müstəqil şəbəkələrin birləşməsi ilə yaranıb. Buna görə onun topologiyası adətən hierarchical (iyerarxik) və paylanmış olur.

- [**LAN (Local Area Network - Yerlik Şəbəkə):**](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-12.md) Evdə və ofisdə istifadə olunan kiçik şəbəkələr.
- [**WAN (Wide Area Network - Geniş Ərazi Şəbəkəsi):**](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-12.md) Şəhərlər və ölkələr arasında əlaqə/qoşulma yaradır.
- [**MAN (Metropolitan Area Network – Metropoliten Ərazi Şəbəkəsi):**](https://github.com/knvmrt/my-developedia-azerbaijan/blob/master/Docs/POST-12.md) Bir şəhər və ya böyük ərazi daxilindəki fərqli binaları və təşkilatları birləşdirən şəbəkədir.
- **ISP (Internet Service Providers - İnternet Xidmət Təminatçıları):** İstifadəçilərə internet çıxışı verir, əsas şəbəkələri idarə edir.
- **Dayaq (Backbone):** Dünyanın müxtəlif bölgələrini yüksək sürətli fiber optik xətlər ilə birləşdirən əsas hissə.

### İnternetdə Marşrutlaşdırma və Əlaqələr:

**İnternet Avtonom Sistemlər (AS – Autonomous Systems) -** İlə idarə olunur. Hər AS bir ISP-yə, universitetə və ya şirkətə məxsusdur.
**BGP (Border Gateway Protocol - Sərhəd Keçidinin Protokolu) protokolu –** AS-lər arasında məlumatın hansı yolla keçəcəyini müəyyənləşdirir.
**IXP (Internet Exchange Points) –** Provayderlərin trafiki birbaşa paylaşdığı mərkəzlərdir. Bu, həm sürəti artırır, həm də xərc azaldır.

### İnternet Topologiyasının Növləri:

İnternetin quruluşunda tək bir topologiya istifadə edilmir. Müxtəlif topologiyalar birləşərək mürəkkəb quruluş yaradır. İnternet və ümumiyyətlə kompüter şəbəkələrində topologiya cihazların və şəbəkə qurğularının bir-birinə necə qoşulduğunu göstərən modeldir.

### Topologiyalar iki yerə bölünür:

İnternet **düz (flat)** deyil, çoxmərtəbəli bir quruluşa malikdir:

1. **Fiziki Topologiya -** Cihazların və kabellərin fiziki yerləşməsi/qoşulması.
   - **Buraya daxildir:**
     - **Optik kabellər–** İnternetin dayaq sütunu.
     - **Sualtı kabellər –** Qitələri birləşdirir.
     - **Peyk şəbəkələri –** Xüsusilə yeni nəsil LEO peykləri **(Məsələn: Starlink).**
2. **Məntiqi (Logical) Topologiya -** Məlumatın şəbəkədə necə hərəkət etməsi.
   - Fiziki quruluşdan asılı olmayaraq, məlumatın necə ötürüldüyünü göstərir.
   - **Əsas protokollar:** IP routing (marşrutlaşdırma/yönləndirmə), BGP (Border Gateway Protocol - Sərhəd Keçidinin Protokolu).

### Şəbəkə Topologiyaları:

1. **Point to Point (Nöqtədən-Nöqtəyə) Topologiya:**

   - **Tərifi:** İki cihaz arasında birbaşa əlaqə qurulur.
   - **Üstünlükləri:**
     - Sadə və ucuz.
     - Məlumat birbaşa qarşı tərəfə getdiyi üçün sürətlidir.
   - **Çatışmazlıqları:**
     - Yalnız iki cihazı birləşdirir, genişlənmir.
   - **Nümunə:** Kompüter <---> Modem.
    - ![](../Img/pointtopoint.avif)

2. **Bus (Avtobus) Topologiyası:**

   - **Tərifi:** Bütün cihazlar bir əsas kabelə qoşulur.
   - **Üstünlükləri:**
     - Qurulması asandır, ucuzdur.
     - Kiçik şəbəkələr üçün uyğundur.
   - **Çatışmazlıqları:**
     - Əsas kabel sıradan çıxsa, bütün şəbəkə dayanır.
     - Çox cihaz qoşulanda sürət düşür.
   - **Nümunə:** Köhnə Ethernet şəbəkələri (koaksial kabel ilə).
   - ![](../Img/bus.avif)

3. **Star (Ulduz) Topologiyası:**

   - **Tərifi:** Bütün cihazlar mərkəzdəki hub, switch və ya router-ə qoşulur.
   - **Üstünlükləri:**
     - Bir cihaz sıradan çıxsa, şəbəkə dayanmaz.
     - Genişləndirmək asandır.
   - **Çatışmazlıqları:**
     - Mərkəzi cihaz sıradan çıxsa, bütün şəbəkə dayanır.
   - **Nümunə:** Müasir LAN şəbəkələri.
   - ![](../Img/star.avif)

4. **Ring (Halqa/Üzük) Topologiyası:**

   - **Tərif:** Cihazlar halqa formasında qoşulur, məlumat halqa üzrə hərəkət edir.
   - **Üstünlükləri:**
     - Məlumat müəyyən qaydada ötürülür, toqquşma az olur.
   - **Çatışmazlıqları:**
     - Bir cihaz və ya bağlantı sıradan çıxsa, şəbəkə işləməyə bilər.
   - **Nümunə:** Köhnə Token Ring şəbəkələri.
   - ![](../Img/ring.avif)

5. **Mesh (Şəbəkəvari) Topologiya:**

   - **Tərif:** Hər bir cihaz digər cihazlarla birbaşa qoşulur.
   - **İki növü var:**
     - **Full Mesh (Tam şəbəkə):** Hər cihaz bütün cihazlara qoşulub.
     - **Partial Mesh (Qismən şəbəkə):** Yalnız bəzi cihazlar birbaşa bağlıdır.
   - **Üstünlükləri:**
     - Çox etibarlıdır.
     - Bir xətt sıradan çıxdıqda məlumat başqa yolla gedə bilir.
   - **Çatışmazlıqları:**
     - Bahalıdır və mürəkkəbdir.
   - **Nümunə:** İnternet onurğa şəbəkəsi, böyük data mərkəzləri.
   - ![](../Img/mesh.avif)

6. **Tree (Ağac) Topologiyası:**

   - **Tərif:** Ulduz və bus topologiyalarının birləşməsidir. Hiyerarxik quruluş yaradır.
   - **Üstünlükləri:**
     - Böyük şəbəkələrdə səliqə və idarəetmə asanlığı yaradır.
     - Genişləndirmək mümkündür.
   - **Çatışmazlıqları:**
     - Əsas xətt sıradan çıxsa, şəbəkə dayanır.
   - **Nümunə:** Universitet və şirkət kampus şəbəkələri.
   - ![](../Img/tree.avif)

7. **Hybrid (Hibrid) Topologiya:**

   - **Tərif:** Müxtəlif topologiyaların qarışığından yaranır (məs: ulduz + mesh).
   - **Üstünlükləri:**
     - Çox çevikdir, müxtəlif tələblərə uyğunlaşdırmaq olar.
     - Böyük şəbəkələrdə daha əlverişlidir.
   - **Çatışmazlıqları:**
     - Qurmaq və idarə etmək çətindir.
     - Bahalıdır.
   - **Nümunə:** Müasir internet infrastrukturu.
   - ![](../Img/hybrid.avif)

8. **Daisy Chain (Zəncirvari) Topologiya:**
   **Tərif:** Cihazlar ardıcıllıqla zəncirvari qoşulur.

   - **Üstünlükləri:**
     - Sadə və ucuzdur.
   - **Çatışmazlıqları:**
     - Bir cihaz sıradan çıxsa, ondan sonrakılar işləməyəcək.
   - **Nümunə:** Kiçik ofis şəbəkələri.
   - ![](../Img/daisychain.avif)

9. **All-Connected (Tam Qoşulmuş) Topologiya:**
   **Tərif:** Bütün cihazlar bir-birinə birbaşa bağlıdır.
   - **Üstünlükləri:**
     - Ən etibarlı topologiyadır.
     - Heç bir cihazın sıradan çıxması şəbəkəni dayandırmır.
   - **Çatışmazlıqları:**
     - Çox bahalıdır, kabel və port sayı çox tələb edir.
     - İdarə etmək çətindir.
   - **Nümunə:** Hərbi şəbəkələr, kritik təhlükəsizlik sistemləri.
   - ![](../Img/allcon.avif)

### İnternetin Həqiqi Topologiyası:

İnternet tam **mesh** tipli deyil, çünki bu çox baha başa gələrdi. O həm də tam mərkəzləşmiş deyil, çünki bütün interneti idarə edən tək bir mərkəz yoxdur. Gerçəklikdə internet belə işləyir:

İnternet tam olaraq **mesh** tipli topologiya`ya sahib deyil. Cünki bu çox baha başa gələrdi. Həm də o tam mərkəzləşmiş deyil, çünki bütün interneti idarə edən tək bir mərkəz yoxdur. Gerçəklikdə internet aşağıdaki kimi işləyir.

- **Nüvə (Core):** Böyük internet dayaq şəbəkələri, ISP (Internet Service Providers - İnternet Xidmət Təminatçıları) lər.
- **Paylama (Distribution):** Orta səviyyəli təminatçılar.
- **Əlçatanlıq (Access):** İstifadəçilərin qoşulduğu son qat.

**Bu quruluşun internetə qatqıları:**

1. Paylanmış edir (tək mərkəz yoxdur),
2. Davamlı edir (bir yol kəsilsə başqa yol işləyir),
3. Genişlənə bilən edir (yeni cihazlar rahat qoşula bilir).

### İnternet Topologiyasının Əhəmiyyəti:

- **Performans:** Məlumat paketlərinin ən qısa və sürətli yolla çatması üçün düzgün topologiya vacibdir.
- **Təhlükəsizlik:** Əsas şəbəkə nöqtələrinin qorunması lazımdır.
- **Dayanıqlılıq:** Təbiət hadisələri və ya nasazlıqlar zamanı ünsiyyətin davam etməsi üçün ehtiyat yollar olmalıdır.

### İnternet Topologiyasının Gələcəyi:

- **SDN (Software Defined Networking) –** Proqramlaşdırıla bilən marşrutlaşdırma.
- **CDN (Content Delivery Network) –** Kontenti istifadəçiyə daha yaxın saxlamaq.
- **LEO peykləri –** Daha aşağı gecikmə ilə qlobal əhatə və əlçatanlıq.
- **5G və gələcəkdə 6G+ –** Mobil internetin dayaq ilə daha sıx inteqrasiyası və inkişafı.
- **Mərkəzləşdirilməmiş internet layihələri –** Blokçeyn əsaslı alternativlər.

### Nəticə:

İnternet topologiyası müasir informasiya cəmiyyətinin əsas infrastrukturudur. **Ulduz, Halqa, Şəbəkəvari və Ağac** kimi topologiyaların birləşməsi ilə yaranan bu qlobal quruluş milyardlarla cihazın etibarlı, sürətli şəkildə əlaqəsini təmin edir. İnternet böyüdükcə onun topologiyası da dəyişir, yəni texnologiyalar (**5G, Starlink,** proqramla idarə olunan şəbəkələr) bu quruluşu daha da gücləndirir.

[**_by knvmrt_**](https://github.com/knvmrt)