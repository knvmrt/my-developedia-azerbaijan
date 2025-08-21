![](../Img/database.avif)

# Başlıq: Məlumat Bazası (Database) nədir?

Məlumat bazası (Database) - Verilərin rəqəmsal mühitdə müəyyən qaydalar çərçivəsində saxlandığı, idarə olunduğu və lazım gəldikdə əldə edilə bildiyi sistemdir.
Müasir proqramların demək olar ki, hamısı istifadəçi məlumatlarından məhsul qeydlərinə qədər hər cür informasiyanı saxlamaq və işləmək üçün məlumat bazasına ehtiyac duyur. Məlumat bazalarının əsas məqsədi məlumatı səliqəli, etibarlı, əlçatan və təhlükəsiz şəkildə saxlamaqdır.

### Qısa Tarixçə:

- **1960-cı illər** – Verilər fayl əsaslı sistemlərdə saxlanılmağa başladı.
- **1970-ci illər** – Edgar F. Codd Əlaqəli Məlumat Bazası Modelini (Relational Model) təqdim etdi.
- **1980-ci illər** – SQL dili geniş yayıldı, Oracle və IBM DB2 kimi sistemlər yarandı.
- **1990-cı illər** – İnternetin yayılması ilə bazaların miqyası böyüdü.
- **2000-ci illər** – NoSQL bazaları ortaya çıxdı.
- **Müasir dövr** – Bulud əsaslı (Cloud) və Paylanmış Sistemlər daha çox istifadə olunur.

### Əsas Anlayışlar:

- **Cədvəl (Table)** – Verilərin sətir–sütun formatında saxlandığı əsas struktur.

- **Sətir (Row / Record)** – Tək bir məlumat qeydi.

- **Sütun (Column / Field)** – Müəyyən tipdə olan məlumat sahəsi.

- **Açarlar (Keys):**
  - **Primary Key (Əsas Açar)** – Hər qeydi unikal tanıdır.
  - **Foreign Key (Xarici Açar)** – Cədvəllər arasında əlaqə yaradır.
- **Sorğu (Query)** – Məlumat üzərində əməliyyat aparmaq üçün istifadə edilən əmr.
- **İndeks (Index)** – Məlumatı daha sürətli tapmaq üçün istifadə olunan struktur.

### Məlumat Bazası Növləri:

**SQL Məlumat Bazaları:**

- Verilər cədvəllərdə saxlanılır.
- SQL dili istifadə olunur.
- Nümunələr:
  - **MySQL** – Açıq mənbə, veb layihələrdə məşhur.
  - **PostgreSQL** – Güclü funksiyaları və etibarlılığı ilə tanınır.
  - **Microsoft SQL Server** – Korporativ sistemlərdə geniş yayılıb.
  - **Oracle Database** – Yüksək performans və təhlükəsizlik.

**NoSQL Məlumat Bazaları:**
- Elastik məlumat strukturu, cədvəl məcburiyyəti yoxdur.
- Növləri:
    - Sənəd/fayl əsaslı: MongoDB, CouchDB
    - Açar-dəyər əsaslı: Redis, DynamoDB
    - Sütun əsaslı: Cassandra, HBase
    - Qrafik əsaslı: Neo4j
- Yüksək miqyaslılığı və sürətli məlumat girişini təmin edir.

**Operativ Yaddaş Daxili Məlumat Bazaları:**

- Verilər RAM-da saxlanılır.
- Oxuma/yazma əməliyyatları çox sürətlidir.
- Nümunələr: Redis, Memcached.

**Bulud Əsaslı Məlumat Bazaları:**

- Fiziki server idarəsi tələb etmir.
- Nümunələr:
    - Amazon RD
    - Google Cloud SQ
    - Azure SQL Databas
    - Firebase Realtime Database

### Ən Populyar Məlumat Bazası Sistemləri:

| Adı | Növü | İstifadə Sahəsi |
|----------|----------|----------|
| Oracle Database   | SQL   | Korporativ sistemlər   |
| MySQL   | SQL   | Veb tətbiqlər   |
| Microsoft SQL Server   | SQL  | ERP, CRM sistemləri  |
| PostgreSQL  | SQL  | Geniş funksiyalı layihələr  |
| MongoDB   | NoSQL  | Böyük məlumat, elastik struktur  |
| Redis   | NoSQL  | Keş, real vaxt tətbiqləri  |

### İstifadə Sahələri:

- E-ticarət platformaları (məhsul, sifariş, müştəri qeydləri)
- Bank sistemləri
- Sosial media platformaları
- Sağlamlıq informasiya sistemləri
- Oyun serverləri
- IoT cihazları və sensorlar

### Üstünlüklər:

- Səliqəli məlumat idarəsi
- Sürətli əldə etmə və sorğulama
- Təhlükəsizlik
- Ehtiyat nüsxə və bərpa imkanı
- Çoxistifadəçi dəstəyi

### Mənfi cəhətləri:

- Qurulum və idarəetmə xərci
- Böyük verilərdə performansın azalması
- Mürəkkəb idarəetmə tələbi

### SQL Nümunəsi:

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    BirthDate DATE
);
```

### Nəticə:

Məlumat bazaları müasir texnologiyaların ayrılmaz hissəsidir. Düzgün seçilmiş və qurulmuş bir məlumat bazası həm təhlükəsizliyi, həm də performansı artırır.
Proqram təminatı hazırlanarkən məlumat bazasının dizaynı layihənin uğuru üçün əsas amillərdən biridir.


[**_by knvmrt_**](https://github.com/knvmrt)