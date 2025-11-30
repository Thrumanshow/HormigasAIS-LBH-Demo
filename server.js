
import express from 'express';
import crypto from 'crypto';
const app = express();
app.use(express.json());

app.post('/api/lbh/validar', (req, res) => {
    const { licenseKey, assetId } = req.body;
    const hash = crypto.createHash('sha256').update(licenseKey + assetId).digest('hex');
    const autorizado = licenseKey.startsWith("HAIS-") && hash.ends_with("0");
    res.json({ autorizado });
});

app.listen(5000, () => console.log('LBH API funcionando en puerto 5000'));
