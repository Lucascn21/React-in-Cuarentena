const libgen = require('libgen/index.js');


(async() => {
    const options = {
        mirror: 'http://libgen.li',
        query: 'erin hunter',
        count: 25
    }

    try {
        const data = await libgen.search(options)
        let n = data.length;
        console.log('top ' + n + ' results for "' +
            options.query + '"');
        while (n--) {
            console.log('***********');
            console.log('Title: ' + data[n].title);
            console.log('Author: ' + data[n].author);
            console.log('Download: ' +
                'http://libgen.li/book/index.php?md5=' +
                data[n].md5.toLowerCase());
        }
        console.log('total ' + data.length)
        return true
    } catch (err) {
        return console.error(err)
    }
})();