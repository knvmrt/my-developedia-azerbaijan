![](https://i.imgur.com/iLTeJkL.png)

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
