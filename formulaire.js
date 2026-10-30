// créer un formulaire qui recupère l'url d'un site et qui génère le qr du site et faire un readme qui explique les étapes 
const express = require('express');
const app = express();
const qrcode = require('qrcode');

// middleware pour parser le corps des requêtes
app.use(express.urlencoded({ extended: true }));

let port = 3001;

// affichage du formulaire    
app.get('/', (req, res) => {
    res.send(`
        <form action="/generate" method="post"> 
        <label for="url">URL du site :</label>
        <input type="text" id="url" name="url" required>
        <button type="submit">Générer le QR Code</button>       
        </form>
    `);

});

// génération du QR code à partir de l'URL soumise
app.post('/generate', async (req, res) => {
    const url = req.body.url;
    try {
        const qrCode = await qrcode.toDataURL(url);
        res.send(`
            <h1>QR Code pour ${url}</h1>
            <img src="${qrCode}" alt="QR Code">
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erreur lors de la génération du QR Code");
    }
});

app.listen(port, () => {
    console.log(`serveur démarrer sur le port ${port}`);
});
