![](https://i.imgur.com/WxynoZN.png)

# Başlıq: Python ilə YouTube dən video yükləmə.


**Bu kodda _pytube_ kitabxanası istifadə olunur, YouTube-dan video yükləmək üçün istifadə edilir.**

**İstifadə edilən kitabxana:** `pip instal pytube `
**Kodu işlədin:** CMD ni açın və `python main.py ` yazın. `main.py` faylın adı olur.

**Kodun izahı:**

```python
link = input("Enter the video URL: ")
```

Burada istifadəçidən YouTube videosunun URL-sini daxil etməsi istənilir. `input()` funksiyası bu URL-ni link dəyişəninə bərabərləşdirir.

```python
try:
    yt = YouTube(link)
    print(f"Downloading '{yt.title}'...")
```

`try` bloku kodun əsas hissəsini təhlükəsiz şəkildə icra etmək üçün istifadə olunur. Əgər bir xəta baş verərsə, kod except blokuna keçəcək və xəta ilə bağlı məlumat verəcək.

`yt = YouTube(link)` , `YouTube` obyektindən istifadə olunur. Verilən URL vasitəsilə YouTube-dan videoya müraciət edilir və obyekt olaraq yt dəyişəninə təyin edilir.

`print(f"Downloading '{yt.title}'...")` , `yt.title` vasitəsilə videonun başlığı əldə olunur və istifadəçiyə hansı videonun yükləndiyini göstərən məlumat çap edilir.

```python
video = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()

video.download()
```

`yt.streams` vasitəsilə video faylının müxtəlif keyfiyyətlərdə olan stream-ləri alınır:

- `progressive=True:` Yüklənəcək stream və ya video da həm video, həm də səs olan videoları seçir.
- `file_extension='mp4':` Fayl formatı MP4 olaraq təyin edilir.
- `order_by('resolution').desc():` Videolar həllinə _(resolution)_ görə sıralanır və azalan sıralama da `.desc()` yüklənəcək videonun ən yüksək keyfiyyətli versiyasını seçir.
- `first():` İlk (və ən yüksək keyfiyyəti olan) video seçilir.

`video.download()`, `download()` funksiyası seçilmiş videonu yükləyir.

```python
   print("Video downloaded!")
except Exception as e:
    print(f"Error occurred!: {e}")
```

- `print("Video downloaded!")` Yükləmə başa çatdıqdan sonra bu mesaj çap edilir.
- `except Exception as e:` Əgər yuxarıdakı kod icra edilərkən bir xəta baş verərsə, bu blok işə düşür.
- `print(f"Error occurred!: {e}")` ilə yaranmış xətanın məlumatı çap edilir.

**Qısa məlumat:** Yüklənən video İş masasına (Desktop) yüklənir. Yüklənən video YouTube da kı, videonun ən yüksək keyfiyyətini yükləyir. Yükləmə limiti və keyfiyyətin aşağı düşməsi kimi problemlər olmadığı üçün bəzi web səhifələrdən yükləməkdən daha rahat, daha təhlükəsiz və daha sürətli olduğu üçün ən mənə görə ən məntiqlisi budur.

```python
from pytube import YouTube

link = input("Enter the video URL: ")

try:
    yt = YouTube(link)
    print(f"Downloading '{yt.title}'...")

    video = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first()
    video.download()

    print("Video downloaded!")
except Exception as e:
    print(f"Error occurred!: {e}")
```

[GitHub Repository](https://github.com/knvmrt/youtube-video-downloader)

[**_by knvmrt_**](https://github.com/knvmrt)
