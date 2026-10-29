const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();
app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
         data = data.replace(/__TITLE__/g, 'Hybreed.co | Web & Mobile UX UI Product Design Agency in Navi Mumbai').replace(/__DESCRIPTION__/g, 'Hybreed is design & development Agency specialized in web- and mobile-friendly platforms. We work as your extended team and bring in a mix of strategy, design & technology.');

        res.send(data);
    });
})
 
app.use(express.static(path.resolve(__dirname, './build')));
 
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});