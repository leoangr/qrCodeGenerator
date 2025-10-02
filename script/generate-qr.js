const loading = document.getElementById('loading-qr');
const qrImage = document.getElementById('qrImage');
const downloadBtn = document.getElementById('downloadQR');
const endpoint = 'https://api.qrserver.com/v1/create-qr-code';

const generateQR = () => {

    loading.style.display = 'block';
    const qrInput = document.getElementById('QrValue');
    const value = qrInput.value.trim();

    if (!value) {
        loading.style.display = 'none';
        alert('Input tidak boleh kosong!');
        return;
    }

    if (qrInput.type === 'url') {
        try {
            new URL(value); // validasi URL
        } catch {
            loading.style.display = 'none';
            alert('Masukkan URL yang valid!');
            return;
        }
    }

    setTimeout(() => {

        const qrUrl = `${endpoint}/?size=220x220&data=${encodeURIComponent(value)}`;
        qrImage.src = qrUrl;

        qrImage.onload = () => {
            loading.style.display = 'none';
            downloadBtn.href = qrImage.src;
        };

        qrImage.onerror = () => {
            loading.style.display = 'none';
            alert("Gagal memuat gambar QR");
        };
    }, 1000);

}

const downloadQR = () => {

    downloadBtn.addEventListener('click', async () => {

        try {

            const time = new Date();
            let formattedDateTime = `${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, '0')}-${String(time.getDate()).padStart(2, '0')} ${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}:${String(time.getSeconds())}`;

            const response = await fetch(qrImage.src,
                {
                    mode: 'cors'
                }
            );
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const tempLink = document.createElement('a');
            tempLink.href = url;
            tempLink.download = `QrCode-${formattedDateTime}.png`;
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);

            URL.revokeObjectURL(url);

        } catch (error) {
            alert("Terjadi kesalahan saat mendownload QR code");
            console.error(error);
        }

    });

}

export { generateQR, downloadQR };