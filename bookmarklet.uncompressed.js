javascript:(function() {
    function extractYouTubeResults() {
        const results = [];
        const videoElements = document.querySelectorAll('#contents ytd-video-renderer');

        videoElements.forEach((video, index) => {
            const title = video.querySelector('#video-title').innerText;
            const channel = video.querySelector('#text-container').innerText;
            const link = video.querySelector('#video-title').href;
            const channelLink = "https://www.youtube.com" + video.querySelector('#text-container a').getAttribute('href');
            results.push({ position: index + 1, title, channel, channelLink, link });
        });

        let table = '<table border="1" style="border-collapse:collapse;width:100%">';
        table += '<tr><th>Position</th><th>Title</th><th>Channel</th><th>Channel Link</th><th>Link</th></tr>';
        results.forEach(result => {
            table += `<tr>
                        <td>${result.position}</td>
                        <td>${result.title}</td>
                        <td>${result.channel}</td>
                        <td><a href="${result.channelLink}" target="_blank">${result.channelLink}</a></td>
                        <td><a href="${result.link}" target="_blank">${result.link}</a></td>
                      </tr>`;
        });
        table += '</table>';

        const newWindow = window.open();
        newWindow.document.write(table);
        newWindow.document.close();
    }

    extractYouTubeResults();
})();
