![](https://media.discordapp.net/attachments/1227709566045655172/1281705936825614356/Group_82.png?ex=66e348ac&is=66e1f72c&hm=9a91a2a973536914f855d03c5516c1c8d81c11cd73e0559a018733567ff20117&=&format=webp&quality=lossless&width=1440&height=422)

# Title: Python ilə QR kod yaratmaq.

### Kodun qısa izahı:

**Qeyd:** Bəzi zəruri kitabxanaları yükləməlisiniz.

```
pip install qrcode
pip install pillow
```

### Kod:

```python
import qrcode
from PIL import Image

# İstifadəçidən URL daxil etməyi tələb edirik
data = input("Zəhmət olmasa URL daxil edin: ")

# QR kodu yaradırıq
qrCode = qrcode.QRCode(version=1, box_size=10, border=5)
qrCode.add_data(data)
qrCode.make(fit=True)

#QR kod şəklini yaradırıq
iimage = qrCode.make_image(fill="#000000", back_color="#FF0066")

# QR kodunu yaddaş da saxlayırıq
image.save("qr_code.png")

# Yaradılmış QR kodunu açırıq
Image.open("qr_code.png").show()
```

[GitHub Repository](https://github.com/knvmrt/python-qr-code-generator)

[**_by knvmrt_**](https://github.com/knvmrt)
